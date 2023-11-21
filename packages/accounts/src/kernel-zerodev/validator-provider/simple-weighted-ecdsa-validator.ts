import {
  ValidatorProvider,
  type ExtendedValidatorProviderParams,
} from "./base.js";
import { getChain } from "@alchemy/aa-core";
import { localhost } from "viem/chains";
import {
  SimpleWeightedECDSAValidator,
  type SimpleWeightedECDSAValidatorParams,
} from "../validator/simple-weighted-ecdsa-validator.js";

export class SimpleWeightedECDSAProvider extends ValidatorProvider<
  SimpleWeightedECDSAValidator,
  SimpleWeightedECDSAValidatorParams
> {
  constructor(
    params: ExtendedValidatorProviderParams<SimpleWeightedECDSAValidatorParams>
  ) {
    const chain =
      typeof params.opts?.providerConfig?.chain === "number"
        ? getChain(params.opts.providerConfig.chain)
        : params.opts?.providerConfig?.chain ?? localhost;
    const validator = new SimpleWeightedECDSAValidator({
      projectId: params.projectId,
      selectedSigner: params.selectedSigner,
      guardians: params.guardians,
      weights: params.weights,
      threshold: params.threshold,
      chain,
      ...params.opts?.validatorConfig,
    });
    super(
      {
        ...params,
        opts: {
          ...params.opts,
          providerConfig: { ...params.opts?.providerConfig, chain },
        },
      },
      validator
    );
  }

  public static async init(
    params: ExtendedValidatorProviderParams<SimpleWeightedECDSAValidatorParams>
  ): Promise<SimpleWeightedECDSAProvider> {
    const instance = new SimpleWeightedECDSAProvider({
      ...params,
      opts: {
        ...params.opts,
        providerConfig: {
          ...params.opts?.providerConfig,
        },
      },
    });
    return instance;
  }
}
