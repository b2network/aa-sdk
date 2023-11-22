import {
  getChain,
  getUserOperationHash,
  type Address,
  type Hex,
  type SmartAccountSigner,
  type UserOperationRequest,
  type SignTypedDataParams,
} from "@b2network/aa-sdk-core";
import { KernelBaseValidator, type KernelBaseValidatorParams } from "./base.js";
import { encodeFunctionData, toBytes, encodeAbiParameters } from "viem";
import { getChainId } from "../api/index.js";
import { DUMMY_ECDSA_SIG } from "../constants.js";
import { KernelAccountAbi } from "../abis/KernelAccountAbi.js";
import { fixSignedData } from "../utils.js";
import { SimpleWeightedValidatorAbi } from "../abis/SimpleWeightedValidatorAbi.js";
import { sum } from "lodash";

export const AddressZero = "0x0000000000000000000000000000000000000000";

export interface SimpleWeightedECDSAValidatorParams
  extends KernelBaseValidatorParams {
  selectedSigner: SmartAccountSigner;
  guardians: Address[];
  ids: Hex[];
  weights: number[];
  threshold: number;
}

export class SimpleWeightedECDSAValidator extends KernelBaseValidator {
  protected guardians: Address[];
  protected ids: Hex[];
  protected selectedSigner: SmartAccountSigner;
  protected weights: number[];
  protected totalWeight: number;
  protected threshold: number;

  constructor(params: SimpleWeightedECDSAValidatorParams) {
    super(params);
    this.selectedSigner = params.selectedSigner;
    this.guardians = params.guardians;
    this.ids = params.ids;
    this.weights = params.weights;
    this.totalWeight = sum(params.weights);
    this.threshold = params.threshold;
  }

  public static async init(
    params: SimpleWeightedECDSAValidatorParams
  ): Promise<SimpleWeightedECDSAValidator> {
    const chainId = await getChainId(params.projectId);
    if (!chainId) {
      throw new Error("ChainId not found");
    }
    const chain = getChain(chainId);
    const instance = new SimpleWeightedECDSAValidator({ ...params, chain });
    return instance;
  }

  async signer(): Promise<SmartAccountSigner> {
    return await Promise.resolve(this.selectedSigner);
  }

  encodeEnableData(
    guardians: Address[],
    ids: Hex[],
    weights: number[],
    threshold: number
  ): Hex {
    return encodeAbiParameters(
      [
        {
          type: "address[]",
        },
        {
          type: "bytes32[]",
        },
        {
          type: "uint24[]",
        },
        {
          type: "uint24",
        },
      ],
      [guardians, ids, weights, threshold]
    );
  }

  async getEnableData(): Promise<Hex> {
    return this.encodeEnableData(
      this.guardians,
      this.ids,
      this.weights,
      this.threshold
    );
  }

  encodeEnable(enableData: Hex): Hex {
    return encodeFunctionData({
      abi: SimpleWeightedValidatorAbi,
      functionName: "enable",
      args: [enableData],
    });
  }

  encodeDisable(disableData: Hex = "0x"): Hex {
    return encodeFunctionData({
      abi: SimpleWeightedValidatorAbi,
      functionName: "disable",
      args: [disableData],
    });
  }

  async getDummyUserOpSignature(): Promise<Hex> {
    return DUMMY_ECDSA_SIG;
  }

  async isPluginEnabled(
    kernelAccountAddress: Address,
    selector: Hex
  ): Promise<boolean> {
    if (!this.publicClient) {
      throw new Error("Validator uninitialized: PublicClient missing");
    }
    const execDetail = await this.publicClient.readContract({
      abi: KernelAccountAbi,
      address: kernelAccountAddress,
      functionName: "getExecution",
      args: [selector],
    });

    const getNextGuardian = async (curr: Address) => {
      const [kernel, weight, nextGuardian] =
        await this.publicClient!.readContract({
          abi: SimpleWeightedValidatorAbi,
          address: this.validatorAddress,
          functionName: "guardianStorage",
          args: [curr],
        });
      return {
        kernel,
        weight,
        nextGuardian,
      };
    };

    const [, threshold, firstGuardian] = await this.publicClient.readContract({
      abi: SimpleWeightedValidatorAbi,
      address: this.validatorAddress,
      functionName: "weightedStorage",
      args: [kernelAccountAddress],
    });

    const guardians: Address[] = [];
    const weights: number[] = [];
    let currGuardian = firstGuardian;
    while (currGuardian !== kernelAccountAddress) {
      const { weight, nextGuardian } = await getNextGuardian(currGuardian);
      guardians.push(currGuardian);
      weights.push(weight);
      currGuardian = nextGuardian;
    }

    return (
      execDetail.validator.toLowerCase() ===
        this.validatorAddress.toLowerCase() &&
      this.encodeEnableData(guardians, [], weights, threshold).toLowerCase() ===
        this.encodeEnableData(
          this.guardians,
          [],
          this.weights,
          this.threshold
        ).toLowerCase()
    );
  }

  async signMessage(message: string | Uint8Array): Promise<Hex> {
    return await this.selectedSigner.signMessage(message);
  }

  async signTypedData(params: SignTypedDataParams): Promise<Hex> {
    return fixSignedData(await this.selectedSigner.signTypedData(params));
  }

  async signUserOp(userOp: UserOperationRequest): Promise<Hex> {
    if (!this.chain) {
      throw new Error("Validator uninitialized");
    }
    const hash = getUserOperationHash(
      {
        ...userOp,
        signature: "0x",
      },
      this.entryPointAddress,
      BigInt(this.chain.id)
    );
    const formattedMessage = typeof hash === "string" ? toBytes(hash) : hash;
    return await this.selectedSigner.signMessage(formattedMessage);
  }
}
