import type { ZeroDevProvider } from "../provider.js";
import {
  deepHexlify,
  type Hex,
  type UserOperationStruct,
  resolveProperties,
  type BigNumberish,
  type UserOperationEstimateGasResponse,
} from "@b2network/aa-sdk-core";
import { calcPreVerificationGas } from "../utils/calc-pre-verification-gas.js";
import { type PaymasterAndBundlerProviders } from "../paymaster/types.js";

export const withZeroDevGasEstimator = (
  provider: ZeroDevProvider
): ZeroDevProvider => {
  provider.withFeeDataGetter(async (struct) => {
    let overrides = await resolveProperties({
      maxFeePerGas: struct.maxFeePerGas ?? 0n,
      maxPriorityFeePerGas: struct.maxPriorityFeePerGas ?? 0n,
    });

    let maxFeePerGas, maxPriorityFeePerGas;

    try {
      ({ maxFeePerGas, maxPriorityFeePerGas } = await eip1559GasPrice(
        provider
      ));
    } catch (error: any) {
      // console.warn(
      //   "getGas: eth_maxPriorityFeePerGas failed, falling back to legacy gas price."
      // );
    }

    if (maxFeePerGas === undefined || maxPriorityFeePerGas === undefined) {
      const feeData = await getFeeData(provider);
      maxFeePerGas = feeData?.maxFeePerGas ? BigInt(feeData?.maxFeePerGas) : 0n;
      maxPriorityFeePerGas = feeData.maxPriorityFeePerGas
        ? BigInt(feeData.maxPriorityFeePerGas)
        : 0n;
    }

    if (
      maxFeePerGas < BigInt(overrides.maxFeePerGas) ||
      maxPriorityFeePerGas < BigInt(overrides.maxPriorityFeePerGas)
    ) {
      return overrides;
    }
    return { maxFeePerGas, maxPriorityFeePerGas };
  });

  provider.withGasEstimator(async (struct) => {
    if (
      struct.callGasLimit !== undefined &&
      struct.verificationGasLimit !== undefined &&
      struct.preVerificationGas !== undefined
    ) {
      return struct;
    }
    const initCode = await provider.account?.getInitCode();
    const initGas = await estimateCreationGas(provider, initCode);
    const partialStruct: UserOperationStruct = {
      ...struct,
      callGasLimit:
        initCode !== undefined && initCode.length > 2
          ? BigInt("1000000")
          : BigInt(55000),
      verificationGasLimit: BigInt(110000) + initGas,
      preVerificationGas: BigInt(100000),
    };

    partialStruct.preVerificationGas = await getPreVerificationGas(
      partialStruct
    );

    const request = deepHexlify(await resolveProperties(partialStruct));
    let userOpGasEstimates: UserOperationEstimateGasResponse | undefined;
    userOpGasEstimates = await provider.rpcClient.estimateUserOperationGas(
      request,
      provider.entryPointAddress
    );
    const { preVerificationGas, verificationGasLimit, callGasLimit } =
      userOpGasEstimates;
    request.preVerificationGas =
      (BigInt(preVerificationGas) * 12n) / 10n ?? request.preVerificationGas;
    request.verificationGasLimit =
      BigInt(verificationGasLimit) ?? request.verificationGasLimit;
    request.callGasLimit =
      (BigInt(callGasLimit) * 12n) / 10n ?? request.callGasLimit;

    return {
      ...struct,
      ...request,
    };
  });

  return provider;
};

export const estimateCreationGas = async (
  provider: ZeroDevProvider,
  initCode?: string
): Promise<bigint> => {
  if (initCode == null || initCode === "0x") return BigInt(0);
  const deployerAddress = initCode.substring(0, 42) as Hex;
  const deployerCallData = ("0x" + initCode.substring(42)) as Hex;
  return await provider.rpcClient.estimateGas({
    account: provider.entryPointAddress,
    to: deployerAddress,
    data: deployerCallData,
  });
};

/**
 * should cover cost of putting calldata on-chain, and some overhead.
 * actual overhead depends on the expected bundle size
 */
export const getPreVerificationGas = async (
  userOp: Partial<UserOperationStruct>
): Promise<number> => {
  const p = await resolveProperties(userOp);
  return calcPreVerificationGas(p);
};

export const GAS_PRICE_RPC_METHODS_BY_BUNDLER: {
  [K in PaymasterAndBundlerProviders]: string;
} = {
  STACKUP: "eth_maxPriorityFeePerGas",
  ALCHEMY: "rundler_maxPriorityFeePerGas",
  PIMLICO: "pimlico_getUserOperationGasPrice",
};

export const eip1559GasPrice = async (provider: ZeroDevProvider) => {
  let [fee, block] = await Promise.all([
    provider.rpcClient.request({
      method:
        // @ts-expect-error
        GAS_PRICE_RPC_METHODS_BY_BUNDLER[provider.bundlerProvider] ??
        "eth_maxPriorityFeePerGas",
      params: [],
    }) as any,
    provider.rpcClient.getBlock({ blockTag: "latest" }),
  ]);

  if (provider.bundlerProvider === "PIMLICO") {
    fee = fee.standard.maxPriorityFeePerGas;
  }

  const tip = BigInt(fee);
  const buffer = (tip / 100n) * 13n;
  let maxPriorityFeePerGas = tip + buffer;
  maxPriorityFeePerGas =
    maxPriorityFeePerGas < provider.minPriorityFeePerBid
      ? provider.minPriorityFeePerBid
      : maxPriorityFeePerGas;
  const maxFeePerGas = block.baseFeePerGas
    ? BigInt(block.baseFeePerGas) * 2n + maxPriorityFeePerGas
    : maxPriorityFeePerGas;

  return { maxFeePerGas, maxPriorityFeePerGas };
};
interface FeeData {
  maxFeePerGas: BigNumberish | null;
  maxPriorityFeePerGas: BigNumberish | null;
}

export const getFeeData = async (
  provider: ZeroDevProvider
): Promise<FeeData> => {
  const { block, gasPrice } = await resolveProperties({
    block: provider.rpcClient.getBlock({ blockTag: "latest" }),
    gasPrice: provider.rpcClient.getGasPrice().catch((error) => {
      console.warn("Legacy: Failed to get gas price", error);
      return null;
    }),
  });

  let maxFeePerGas = null;
  let maxPriorityFeePerGas = null;

  if (block && block.baseFeePerGas != null) {
    // Set the tip to the min of the tip for the last block and 1.5 gwei
    const minimumTip = BigInt("1500000000");
    maxPriorityFeePerGas = gasPrice ? gasPrice - block.baseFeePerGas : null;
    if (
      maxPriorityFeePerGas == null ||
      maxPriorityFeePerGas - BigInt(0) ||
      maxPriorityFeePerGas > minimumTip
    ) {
      maxPriorityFeePerGas = minimumTip;
    }
    maxPriorityFeePerGas =
      maxPriorityFeePerGas < provider.minPriorityFeePerBid
        ? provider.minPriorityFeePerBid
        : maxPriorityFeePerGas;
    maxFeePerGas =
      block.baseFeePerGas * BigInt(2) + (maxPriorityFeePerGas ?? 0);
  } else {
    maxFeePerGas = gasPrice;
    maxPriorityFeePerGas = gasPrice;
  }

  return { maxFeePerGas, maxPriorityFeePerGas };
};
