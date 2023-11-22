import { ECDSAValidator } from "./ecdsa-validator.js";
import { ERC165SessionKeyValidator } from "./erc165-session-key-validator.js";
import { KillSwitchValidator } from "./kill-switch-validator.js";
import { RecoveryValidator } from "./recovery-validator.js";
import { SessionKeyValidator } from "./session-key-validator.js";
import { SimpleWeightedECDSAValidator } from "./simple-weighted-ecdsa-validator.js";
import type { ValidatorMap } from "./types.js";

export const Validators: ValidatorMap = {
  ECDSA: ECDSAValidator,
  KILL_SWITCH: KillSwitchValidator,
  ERC165_SESSION_KEY: ERC165SessionKeyValidator,
  SESSION_KEY: SessionKeyValidator,
  RECOVERY: RecoveryValidator,
  SIMPLE_WEIGHTED_ECDSA: SimpleWeightedECDSAValidator
};

export {
  ECDSAValidator,
  KillSwitchValidator,
  ERC165SessionKeyValidator,
  SessionKeyValidator,
  RecoveryValidator,
  SimpleWeightedECDSAValidator
};
