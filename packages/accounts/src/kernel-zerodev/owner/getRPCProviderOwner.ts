import type { SignTypedDataParams, SmartAccountSigner } from "@b2network/aa-sdk-core";
import { Web3Provider, type ExternalProvider } from "@ethersproject/providers";
import { fixSignedData } from "../utils.js";
import type { Hex } from "viem";
import { type TypedDataField } from "@ethersproject/abstract-signer";

export function getRPCProviderOwner(web3Provider: any): SmartAccountSigner {
  const provider = new Web3Provider(web3Provider as ExternalProvider);
  const signer = provider.getSigner();

  return {
    getAddress: async () =>
      Promise.resolve((await signer.getAddress()) as `0x${string}`),
    signMessage: async (msg: Uint8Array | string) =>
      (await signer.signMessage(msg)) as `0x${string}`,
    signTypedData: async (params: SignTypedDataParams) => {
      return fixSignedData(
        (await signer._signTypedData(
          params.domain!,
          params.types as unknown as Record<string, TypedDataField[]>,
          params.message
        )) as Hex
      );
    },
  };
}
