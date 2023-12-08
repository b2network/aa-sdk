import {
  deepHexlify,
  type BytesLike,
  type PromiseOrValue,
  type UserOperationStruct,
  resolveProperties,
} from "@b2network/aa-sdk-core";
import axios from "axios";
import { ENTRYPOINT_ADDRESS } from "../constants.js";
import type { ZeroDevProvider } from "../provider.js";
import { hexifyUserOp } from "../utils/ERC4337-utils.js";
import type { PaymasterAndBundlerProviders } from "./types.js";
import fetchAdapter from '@vespaiach/axios-fetch-adapter';

if (typeof fetch === 'function') {
  axios.defaults.adapter = fetchAdapter
}

export abstract class Paymaster {
  baseURL: string

  constructor(protected provider: ZeroDevProvider, baseURL: string) {
    this.baseURL = baseURL
  }
  abstract getPaymasterResponse(
    struct: UserOperationStruct,
    paymasterProvider?: PaymasterAndBundlerProviders,
    shouldOverrideFee?: boolean
  ): Promise<UserOperationStruct | undefined>;
  protected async signUserOp({
    chainId,
    userOp,
    callData,
    gasTokenAddress,
    erc20UserOp,
    erc20CallData,
    paymasterProvider,
    shouldOverrideFee = false,
  }: {
    chainId: number;
    userOp: UserOperationStruct;
    callData?: PromiseOrValue<BytesLike>;
    gasTokenAddress?: string;
    erc20UserOp?: Partial<UserOperationStruct>;
    erc20CallData?: PromiseOrValue<BytesLike>;
    paymasterProvider?: PaymasterAndBundlerProviders;
    shouldOverrideFee?: boolean;
  }): Promise<any> {
    const hexifiedUserOp = deepHexlify(await resolveProperties(userOp));
    let resolvedERC20UserOp;
    let hexifiedERC20UserOp: any;
    if (erc20UserOp) {
      resolvedERC20UserOp = await resolveProperties(erc20UserOp);

      hexifiedERC20UserOp = hexifyUserOp(resolvedERC20UserOp);
    }
    let requestBodyParams = Object.fromEntries(
      Object.entries({
        chainId,
        userOp: hexifiedUserOp,
        entryPointAddress: ENTRYPOINT_ADDRESS,
        callData: callData instanceof Promise ? await callData : callData,
        gasTokenData:
          gasTokenAddress && hexifiedERC20UserOp && erc20CallData
            ? {
                tokenAddress: gasTokenAddress,
                erc20UserOp: hexifiedERC20UserOp,
                erc20CallData:
                  erc20CallData instanceof Promise
                    ? await erc20CallData
                    : erc20CallData,
              }
            : undefined,
        tokenAddress: gasTokenAddress,
        erc20UserOp: hexifiedERC20UserOp,
        erc20CallData:
          erc20CallData instanceof Promise
            ? await erc20CallData
            : erc20CallData,
        paymasterProvider,
        shouldOverrideFee,
      }).filter(([_, value]) => value !== undefined)
    );
    const { data: paymasterResp } = await axios.post(
      `${this.baseURL}/${chainId}/getPaymasterAndData`,
      {
        ...requestBodyParams,
      },
      { headers: { "Content-Type": "application/json" } }
    );
    return paymasterResp;
  }
}
