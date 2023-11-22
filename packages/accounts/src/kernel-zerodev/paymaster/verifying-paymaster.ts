import {
  type UserOperationStruct,
  deepHexlify,
  resolveProperties,
} from "@b2network/aa-sdk-core";
import { Paymaster } from "./base.js";
import type { ZeroDevProvider } from "../provider.js";
import type { PaymasterAndBundlerProviders, PaymasterConfig } from "./types.js";

export class VerifyingPaymaster extends Paymaster {
  constructor(
    provider: ZeroDevProvider,
    config: PaymasterConfig<"VERIFYING_PAYMASTER">
  ) {
    super(provider, config.baseURL);
  }
  async getPaymasterResponse(
    struct: UserOperationStruct,
    paymasterProvider?: PaymasterAndBundlerProviders,
    shouldOverrideFee?: boolean
  ): Promise<UserOperationStruct | undefined> {
    const chainId = await this.provider.rpcClient.getChainId()
    const hexifiedUserOp = deepHexlify(await resolveProperties(struct));
    const paymasterResp = await this.signUserOp({
      chainId,
      userOp: hexifiedUserOp,
      paymasterProvider,
      shouldOverrideFee,
    });
    return paymasterResp;
  }
}
