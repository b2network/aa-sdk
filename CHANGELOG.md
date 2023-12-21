# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 1.0.12 (2023-12-21)

**Note:** Version bump only for package root

## 1.0.11 (2023-12-21)

**Note:** Version bump only for package root

## 1.0.10 (2023-12-21)

**Note:** Version bump only for package root

## 1.0.9 (2023-12-21)

**Note:** Version bump only for package root

## 1.0.8 (2023-12-08)

**Note:** Version bump only for package root

## 1.0.7 (2023-12-08)

**Note:** Version bump only for package root

## 1.0.6 (2023-12-08)

**Note:** Version bump only for package root

## 1.0.5 (2023-12-08)

**Note:** Version bump only for package root

## 1.0.4 (2023-12-08)

**Note:** Version bump only for package root

## 1.0.3 (2023-11-30)

### Bug Fixes

- fix missing dependencies ([5b6799a](https://github.com/b2network/aa-sdk/commit/5b6799ae42650dc48c176cfdab27b464ccdbc45b))

## 1.0.2 (2023-11-22)

**Note:** Version bump only for package root

## 1.0.1 (2023-11-22)

**Note:** Version bump only for package root

# 1.0.0 (2023-11-22)

### Bug Fixes

- add github user details to publish script ([2b812d3](https://b2network/commits/2b812d34c041e11ba7d4c11a72c26da8f8e7af21))
- add util to fix sign typed data ([79c6f4e](https://b2network/commits/79c6f4e097131001ccd0d7d97ad019335c9c6515))
- added config directory in tests and moved common config object there ([07e64cf](https://b2network/commits/07e64cfaceb1130b60ea6f1cb898155f52b63121))
- added proper dummy sig ([8dac6f1](https://b2network/commits/8dac6f1ad4e44a7be497b3ee4583ef343d5eba74))
- **alchemy:** add opt mainnet to dummy gen ([#34](https://b2network/issues/34)) ([ef21ad5](https://b2network/commits/ef21ad514f9c1dfdfb49dedfd39586f58c2976c1))
- always import with file extension ([#48](https://b2network/issues/48)) ([4776d74](https://b2network/commits/4776d7476f8cb622416c8846afa9bc17d16b97a6))
- arbitrum min fee per bid needs to be a 1/10th the default on other chains ([#17](https://b2network/issues/17)) ([453ecec](https://b2network/commits/453ececb22e1981b27ed0635e0c763aa73e1a36f))
- build deps fix ([90e4d37](https://b2network/commits/90e4d37a53bf61db3c4869201c8ba35ca89378fc))
- build errors ([279d743](https://b2network/commits/279d7436d47b7a499958a5e8462908f29cd7a8f6))
- change the package tag ([4bbd97c](https://b2network/commits/4bbd97c8aa09da7bf70218b672a97af825819bf7))
- ci testing ([ed3ad5a](https://b2network/commits/ed3ad5ad4e1aa0903053e191b0c86d3483da2ac8))
- cjs build ([b820b90](https://b2network/commits/b820b9077261ebebae9e91587c6bffea3b3802c7))
- created ZeroDevLocalAccountSigner with signTypedData and fixed encodeExecute ([d534f19](https://b2network/commits/d534f194a5a91352f5fe6679e0c8c6aef68bfee5))
- disable session keys with no permission set ([44600a3](https://b2network/commits/44600a3183b5f417f84deb20310dfed7592b23e3))
- e2e ([a4b0e44](https://b2network/commits/a4b0e44c6ca2d9756f80453ba7ed1f7192cbe978))
- e2e ([2b78fe1](https://b2network/commits/2b78fe1a15fd582d9ca5b6dd1ae8c9264a5bb16f))
- e2e linting errors ([db9093e](https://b2network/commits/db9093efeca9c11b0d99c49673c8f267fd465917))
- e2e workflow ([b942b9a](https://b2network/commits/b942b9a16fafce8cb1683183383dabfc08d75aa8))
- erc20 test ([903ad7a](https://b2network/commits/903ad7ada6aed8a4ec926751a962d0dac1e91728))
- export enums as value ([f02c145](https://b2network/commits/f02c14518fe8408feddec56bcc7086b3b645c9d2))
- export issue and config setting ([e4d29cd](https://b2network/commits/e4d29cdb553f27a32a2f463482a3110abed8ec1a))
- fix broken deploy by ignoring example dapp build ([cadd788](https://b2network/commits/cadd78813c01f33d2fe1e66140275bd9dd232699))
- fix the version in the ethers project to match [@alchemy](https://b2network/alchemy) ([2a879a9](https://b2network/commits/2a879a9a13298df7a979c592bbc32c18e6b74d82))
- fix validator param extension in validator provider ([a15c1a5](https://b2network/commits/a15c1a55d6195a28bc52d852c77777097f4c6665))
- fixed fees overriding while resending which broke with new param overrides ([9de4739](https://b2network/commits/9de473901d228c76fbce11c4ceb1927ad0b8ae2c))
- fixed gasestimation and paymaster related issues ([5911946](https://b2network/commits/591194645c105509258fdffd7e754b0945f3fb4a))
- fixed the gas limits logic ([ad2dcb7](https://b2network/commits/ad2dcb7cead4a72e90447d686a466cdd44987298))
- fixed the TokenPaymaster middleware undefined erc20 configs issue ([e99966f](https://b2network/commits/e99966f1f941b684832809b465d9fa1c1f4eae37))
- generate dynamic dummy sig based on mode ([87b441a](https://b2network/commits/87b441ad64be717a221e8c839419d1ae823ca659))
- getNonce not returning correct nonce ([3cf4ab4](https://b2network/commits/3cf4ab4fcb8b887637498a22b7a21b45e5fefee2))
- guardian weight and threshold equality check ([6f79cc7](https://b2network/commits/6f79cc7b38215a1cb7378af11e17dd2c7e528d5b))
- guardian weight and threshold logic check fix ([ddd45d3](https://b2network/commits/ddd45d3523c04917a43334a620095630da1ad419))
- hardcode enable sig length for dummy sig ([6c9e4de](https://b2network/commits/6c9e4de184a7ec5afa44fdaad7042e38011b20f8))
- import file extensions ([4313f7f](https://b2network/commits/4313f7f6a5c903fc2e050455ce57f07d7cbc85c1))
- import in core was still exporting deleted item ([4946408](https://b2network/commits/4946408e757eab4e18a96d0a16839e92d78238d4))
- imports are broken because missing .js extension ([98f4a54](https://b2network/commits/98f4a5469b0ac01a833ede08c6c077373255ed22))
- increase timeout limit from 30 seconds to 60 seconds ([e009e93](https://b2network/commits/e009e939c561614b47d498e897f4673522212a89))
- inject version was not using double quotes ([b7a7700](https://b2network/commits/b7a77005bc0b04904911285ee0a9d3b610a73b89))
- kernel v0.2.2 domain name support ([90bb0b4](https://b2network/commits/90bb0b414a518f1230523b09f862cc4c4ec98f6d))
- kernel v0.2.2 domain name support again ([2595463](https://b2network/commits/2595463d242bdc06389ef39dbe95d1736636d746))
- linting ([c46861a](https://b2network/commits/c46861af92b67f98fc15fcdbdcd8aa7fba6d1045))
- local account signers were not correctly handling hex inputs ([#42](https://b2network/issues/42)) ([9d56a5b](https://b2network/commits/9d56a5b721263c8fc976ddda341458f6666b9e2d))
- make valueLimit a bigint ([7876e80](https://b2network/commits/7876e80ecb08e0fa886db0c79127141b5dff2357))
- npm 404 error ([f34f581](https://b2network/commits/f34f581a0399a2e30f33161d8b4cc1d778122b1f))
- overriding fees logic in provider ([ad0157d](https://b2network/commits/ad0157d97379aaba240d76f0995e02099e93ce7a))
- passkey autocomplete ([402b030](https://b2network/commits/402b030824c36d373bfd40306d50b5ed894405e0))
- passkey sign typed data ([71b5e20](https://b2network/commits/71b5e20c87954cd3eec0834b9e8db7207d9184f6))
- passkeys ([9fb8716](https://b2network/commits/9fb87163c63d4585760b994f2d8b26c57bd60c72))
- reduce timeout to 30 secs per test ([c2b0395](https://b2network/commits/c2b0395a80e54862dd31ea77282236fa4b270699))
- remaining issues ([d1e58d7](https://b2network/commits/d1e58d749e59ea5e48ef345c0a1d444b26f4e029))
- remove icky generics and createProvider function ([13bd613](https://b2network/commits/13bd61338f48752859c9696fdb0f000ce05ae4d2))
- remove README.md from upstream ([33e4ef9](https://b2network/commits/33e4ef940e79e7032cd29bc0e0fe9f1996a35ff7))
- remove super reference from request fallback method in provider ([fbc6133](https://b2network/commits/fbc6133c47248f0bfdf76d9598b1c306028669cf))
- remove vgl buffer ([96bc3c4](https://b2network/commits/96bc3c438a3bc3ea01e4bfe31e6ffba9c03c35dd))
- rename folders and update readme to reference correct package names ([8bbcaf7](https://b2network/commits/8bbcaf76d2a9a945b30ce09fd2928a4a5eefb4be))
- reorder pm and gas estimator middlewares ([815689a](https://b2network/commits/815689a71703d4ceefc968ec69809de0ac1d4c55))
- replaced `0x<string>` with Hex ([bba5a6c](https://b2network/commits/bba5a6c547e51f50ebdb710e8fc63a8dcbe412e4))
- resolved token paymaster issue ([9d9004d](https://b2network/commits/9d9004d973e9ff3b5b37b3ff4938fc2bb7c51c85))
- retry erc4337publicClient fix ([6e9636e](https://b2network/commits/6e9636e99565dae1e08ff55a6d6cd5088cc3ceab))
- return scaled prio fee as max fee per gas ([#27](https://b2network/issues/27)) ([56bc34b](https://b2network/commits/56bc34be3a50a2709ca546ed90a980f3c489cbbe))
- revert constants ([48eba1d](https://b2network/commits/48eba1d63ac27158b6410a53f9facd41e830d9af))
- reverted the package name ([9cf093d](https://b2network/commits/9cf093d42c8c7d8c143be35475235d099dc8768e))
- scoping of tests ([01aadb1](https://b2network/commits/01aadb101699d054df1c0ec43f18c6c3a8753c7c))
- session key permission issue related to multisend when using token paymaster ([e433ba3](https://b2network/commits/e433ba33aa8b83896c06e689728ddd8380ced794))
- set default provider to stackup for erc20 userOps ([29039b0](https://b2network/commits/29039b007d21da6481e5b88b8f5359bf5e748782))
- set opt/arb goerli base fee percentage to 0 ([#37](https://b2network/issues/37)) ([db750f0](https://b2network/commits/db750f09bc88cc7fd3a1d8e3ea0ff874ac656a7c))
- sign-typed-data in getRpcProviderOwner ([a8d10cc](https://b2network/commits/a8d10cce0dc04dd844bfe765bb3885d6e4385973))
- sign-typed-data in getRpcProviderOwner ([e441079](https://b2network/commits/e441079364b52071a9230ee3179142e7d7732187))
- signMessage to only convert string message to bytes ([8f28580](https://b2network/commits/8f28580e8b56583a5590025c617ca082e35d36e2))
- styling ([8de8656](https://b2network/commits/8de865697074abde531e2be8133d72a00db03abe))
- ts ignore ([90e5f2f](https://b2network/commits/90e5f2feadc91ef38eb72bc792084e44ceca26fe))
- turnkey depdency ([5833216](https://b2network/commits/583321619297aa8d57aa80d20719318ea86cde8f))
- types changed when updating to latest viem ([0aec96d](https://b2network/commits/0aec96d184b5bcc3787ce9123260cf287f27f037))
- typo ([7b1d967](https://b2network/commits/7b1d9679f6480305489b7153b2dde53b433b66e2))
- url ([cff8a4d](https://b2network/commits/cff8a4d3adf8cb46becf57a3ef441aae83d9b63a))
- workflow ([873cb16](https://b2network/commits/873cb16c3518ab8ae6094a5de600b65eba316248))
- workflow ([c27202a](https://b2network/commits/c27202a80d7b2effb5f065c2846e3a3b0224673f))
- workflow by adding submodules ([363e3a4](https://b2network/commits/363e3a4da51fd3c31361879d791288a46a7f90a8))
- workflow with submodules ([dc4c02f](https://b2network/commits/dc4c02ffef724d38477fd8805b9aa9c8ad4df6d2))
- workflows ([549378d](https://b2network/commits/549378dfb93fd994d687dd33d83bddf84829bc2a))

### Features

- add a logger and some debug statements ([#35](https://b2network/issues/35)) ([faef24e](https://b2network/commits/faef24e9060216b03b4c7f2413d7fde931046096))
- add aa-accounts subpackage ([#23](https://b2network/issues/23)) ([a7fd5da](https://b2network/commits/a7fd5da8600b0a346627df3a4b5cc338210aa256))
- add alchemy sub-package ([#22](https://b2network/issues/22)) ([e7fc1aa](https://b2network/commits/e7fc1aa93ebd57237009d3aa688d8c167f240aad))
- Add polygon mainnet support and fix wallet signature issue ([#13](https://b2network/issues/13)) ([a67970a](https://b2network/commits/a67970a07900be1d9efa0640f03c7feae3768360))
- add rundler_maxPriorityFeePerGas for Alchemy ([196665a](https://b2network/commits/196665a7456ddc2545cb88209dc7be97a518a560))
- add signMessage method to SmartAccountProvider ([c95e3bc](https://b2network/commits/c95e3bccf591c89e23863259e036047a6c56e441))
- add SimpleWeightedECDSAValidator ([b30b4d6](https://b2network/commits/b30b4d67fb173d4d8f22279444d8af2a577a2098))
- add smart contract for nft for onboarding ([#10](https://b2network/issues/10)) ([e3dc165](https://b2network/commits/e3dc165bc53fcfa7d8d3e42e99d0c7cf8ff405b5))
- add support for batching transactions in a userop ([#7](https://b2network/issues/7)) ([79d63a7](https://b2network/commits/79d63a79d26d6501d74dbf90de6c9a1158d931de))
- add support for the new alchemy paymaster endpoint ([#14](https://b2network/issues/14)) ([3fac515](https://b2network/commits/3fac5152075b07ab91dea393e366b667149a3e23))
- add the separate nonce seq for recovery val | change the backend url ([f6a1cd9](https://b2network/commits/f6a1cd92ca9d2c0717d0eeea92a4dcad517b9773))
- added account provider getter in ethers-provider ([75f6433](https://b2network/commits/75f64332e00b119f44a7a3134c11c2413df2bd9f))
- added buildUserOperation function ([1b87f5d](https://b2network/commits/1b87f5d0bf71ee07de29d627138a136e9bb7ecf3))
- added custom publicClient provider support to validator ([2a15340](https://b2network/commits/2a15340bafc6b41a911036d5380e9a138e9c0ca1))
- added custom transport to route non-aa and aa calls to respective providers and meta-bundler ([63622aa](https://b2network/commits/63622aa8a235c4c957114a4e61674600dabd1262))
- added dynamicDummySig generator, proper mode management and KillSwitchValidator testcases ([27b50d1](https://b2network/commits/27b50d1a763487c6ebc3e58b96edb698b913a39c))
- added ethers/viem adapters and wallet convertors ([8d27da0](https://b2network/commits/8d27da0d4d0e234f7bc65c713e5d4688054ccd40))
- added exports for `KernelAccountProvider` in index.ts ([e951f5e](https://b2network/commits/e951f5e4df47d5e74a2db985984d4b641e863119))
- added kernel v2.2 support and paymaster error log improvement ([1545ce4](https://b2network/commits/1545ce49a2a6ef18e7e359c5341d71ad5d214223))
- added kill switch force unblock | fix - dummy paymasterAndData ([e1d63f0](https://b2network/commits/e1d63f065355062335eb103990c08fad7e107ae2))
- added killSwitch validator and provider ([930faa4](https://b2network/commits/930faa40c3265fc28105daa257154bae4d6d2a7f))
- added provider specific gas estimation rpc endpoints ([d00f20a](https://b2network/commits/d00f20a049c9acf1158388294b793800710a3a6c))
- added Readme.md for kernel implementation ([7bce3fd](https://b2network/commits/7bce3fd0b1e78ec7a399da96f23e2a74c97c9172))
- added resendTx mechanism when pending | onlySendSponsoredTransaction flag ([1777fa5](https://b2network/commits/1777fa5fa826becaec84c9e7b9249cb0ea4b8457))
- added serialize and deserialize session data funcs in sessionKey validator ([b956589](https://b2network/commits/b95658988820eced36c283e678b433a29fe06d51))
- added serialized recoveryConfig retrieval from recoveryId ([d64f182](https://b2network/commits/d64f182ac0b1197f32396e123a3a3b8dedd0a865))
- added SessionKeyV2 validator and provider and testcases ([8ae0879](https://b2network/commits/8ae08799632ae38a9f3bd1d1d8e90ac31edaf64e))
- added signMessageWith6492 in ethers account signer ([fb7ddf1](https://b2network/commits/fb7ddf143b9c0e8cd24823f2b1af8a29b087ed23))
- added signTypedDataWith6492 support ([946c27d](https://b2network/commits/946c27d3c0573834912f221e6b37a672e458f3dd))
- added support for kernel-v2.1 ([d640cc3](https://b2network/commits/d640cc361028bcc120f3eb20ce00086cac7baeea))
- added test cases for kernel account abi ([6722c5d](https://b2network/commits/6722c5dba43d065c2e6a2fe03d007de09aada686))
- added the option to pass the minPriorityFeePerBid to feeDataGetter ([14bc5ff](https://b2network/commits/14bc5ffc81c20494da2f6f16308c318ac049ebc7))
- added util to get signer from RPCProvider like web3Auth and magic ([2d6d9d0](https://b2network/commits/2d6d9d0aea36e67c76029246082cbd3e74e8c04b))
- added validator provider adapter for validator core functions, support for enable/plugin mode ([a909937](https://b2network/commits/a909937b2c10146f221c880b7f8ba9fe9e7f166f))
- added zd ethers account signer and sign typed data support in account ([de1334d](https://b2network/commits/de1334d79a4271f90b287906215f920e36e9407c))
- added zerodev paymaster support to kernel account ([568e417](https://b2network/commits/568e417c6422c99d5bd5e739c60f2d39b06341a1))
- adds custodial feature ([2730b70](https://b2network/commits/2730b70be1b98589fb16c6865503172a5a2fc7f8))
- adds passkey ([92fda6f](https://b2network/commits/92fda6f97e457dfc20adff6f08b564922af25ce6))
- adds sepolia provider ([6ef99fb](https://b2network/commits/6ef99fb86d000665587e8cffc12bf28c1e1a18df))
- bump version ([1ed0a1f](https://b2network/commits/1ed0a1fd3800993d1fff70b7a8877caf82934e69))
- clean up components for profile and nft fetching ([#9](https://b2network/issues/9)) ([e53ab62](https://b2network/commits/e53ab6204f67a09860b640531ec9c8a66bb2917f))
- create Example Directory and Example Node.js D(AA)pp ([#8](https://b2network/issues/8)) ([34b77d9](https://b2network/commits/34b77d9e2fce3ae334037c67c72a330c755be606))
- created builders and director creating provider and validator provider ([fd58845](https://b2network/commits/fd5884515198ecd4da4ef57e7eaefb483eb0333c))
- deleted redundant ecdsa validator ([4462b7d](https://b2network/commits/4462b7dbb49d4d377d5351224102fdef5f28f60d))
- erc165SessionKey validator, provider and testcases | isPluginMode check | default paymaster ([01b9b65](https://b2network/commits/01b9b658bdf602fbb976d01f673ba9d41f0ae067))
- exported `ValidatorMode` & `KernelBaseValidatorParams` in index.ts ([e36245c](https://b2network/commits/e36245c009955362cf1ee7302ad71b57ea306149))
- expose more user op methods on the provider ([#25](https://b2network/issues/25)) ([2f39460](https://b2network/commits/2f3946063d78a4fe1a99078f8fd315d87b24a901))
- finish passkey ([6f7d5ed](https://b2network/commits/6f7d5edf995681f2ea183a220aab4de647b7309d))
- fix imports ([3b663ba](https://b2network/commits/3b663ba00529e01a90bd33e23765ba6a152c66ac))
- fixed ts errors related to kernel implementations ([34edd00](https://b2network/commits/34edd00b4079bdba38f9c270544ac95f2134b92c))
- gas limit enhancement, custom bundler/paymaster provider and ethers-pro fix ([50c6f27](https://b2network/commits/50c6f27c617233231b0e3623059cba44fa862599))
- hd account signer implementation ([bf6e078](https://b2network/commits/bf6e078ad96e95ee26108661369b34d1d194d9e9))
- improves getCustodialOwner ([c26ddcf](https://b2network/commits/c26ddcf709c9e8847b76e6c1d48128f65f84a6d3))
- improves passkey ([928b1a6](https://b2network/commits/928b1a6df135f1cb9e990fbedaa97334cc5123c4))
- integrate sdk + nft contract for onboarding ([#11](https://b2network/issues/11)) ([f50b0e7](https://b2network/commits/f50b0e783f838e313a12e1c0b65e5bd6a1e5040d))
- integrate sdk and refactor onboarding ([#12](https://b2network/issues/12)) ([7dd7c97](https://b2network/commits/7dd7c97ad10936fec0c9171d93745a891674c409))
- kernel account implementation ([8489742](https://b2network/commits/848974267b656e4f9a34ce1b53c2629f1aae2be7))
- kernel account updates ([5137cc8](https://b2network/commits/5137cc84afdc3481640a46e6cb1624b70d40873c))
- kernel batch transactions and gas estimation fixes ([#39](https://b2network/issues/39)) ([f2a3d3d](https://b2network/commits/f2a3d3d093ddbe1b564c0242c28b67487554f1ba))
- kernel provider implementation ([8eed473](https://b2network/commits/8eed4732538ebd508ae94f670987d3f9318c7402))
- modified the gasEstimator ([375540a](https://b2network/commits/375540a0123d101a5fd1576dc9edde5d0b490692))
- modified ZeroDevProvider to use ZD meta-bundler ([ebedb10](https://b2network/commits/ebedb102afa99cb3da67b78646267b8d559a99ca))
- pulled updates from upstream alchemy ([f93b0e7](https://b2network/commits/f93b0e725d66ec57ff2e012169a60e52b9b334c7))
- recovery plugin provider, validator and tests ([d62a5fc](https://b2network/commits/d62a5fc7dc4c9470d9d72eca6f6ab6a9703d2d0f))
- removed unused methods from `KernelAccountProvider` ([3126a16](https://b2network/commits/3126a16b0c2dd761ff01fd8ac411f37c19b2ac27))
- renamed validator to kernel validator ([7ce1fdd](https://b2network/commits/7ce1fddf811b3107b8e372d1194c7bc9993099ed))
- request eth_chainId ([924803c](https://b2network/commits/924803c43d8ed7f018752e383b6a319caf1a3a10))
- smart account signer interface ([3115940](https://b2network/commits/3115940b193fcc6030a363f25adf45ce25f811bc))
- Support Arb Mainnet for Demo App ([#18](https://b2network/issues/18)) ([6df907c](https://b2network/commits/6df907cf8acb0fcf921b700a18d5bcb6d89c49f3))
- test cases for kernel account and validator ([a47d85b](https://b2network/commits/a47d85bc59866413c7a84ca3e110110a29d010d7))
- updated aa-core version in aa-accounts ([2d295fe](https://b2network/commits/2d295fee69b38b4150b7a04f8f43d6b026019409))
- uses filepath instead of values ([15944be](https://b2network/commits/15944be2f30472e5d338d22fb18ad0f93894d610))
- **utils:** add getSCAAddress ([5d228fb](https://b2network/commits/5d228fbe7bef5ddb29bf1ee0f06724dde3321181))
- validator implementations for kernel account ([eb0c420](https://b2network/commits/eb0c4206de93e59ade38b29adfb8210cf45187e4))

# 0.1.0-alpha.23 (2023-08-14)

### Features

- **alchemy:** modify fee defaults ([0a0a65c](https://github.com/alchemyplatform/aa-sdk/commit/0a0a65c03a6991a1c57473ae9e65c4b727d937e2))

# 0.1.0-alpha.22 (2023-08-11)

**Note:** Version bump only for package root

# 0.1.0-alpha.21 (2023-08-08)

### Features

- allow overriding alchemy provider rpc url ([#70](https://github.com/alchemyplatform/aa-sdk/issues/70)) ([6b7c4b9](https://github.com/alchemyplatform/aa-sdk/commit/6b7c4b911b97dfcd1cfb00b2892548644fbe2fc6))

# 0.1.0-alpha.20 (2023-08-05)

### Features

- add signTypedData to providers ([#66](https://github.com/alchemyplatform/aa-sdk/issues/66)) ([e0a99f6](https://github.com/alchemyplatform/aa-sdk/commit/e0a99f694a6ed6e88b15d6cc73f99e74fd985667))

# 0.1.0-alpha.19 (2023-08-03)

### Features

- add event emitter to the provider so that we can listen to connected events in dapps ([#65](https://github.com/alchemyplatform/aa-sdk/issues/65)) ([35ee990](https://github.com/alchemyplatform/aa-sdk/commit/35ee990afa1c8be7c4685631af6654ac51b094cd))

# 0.1.0-alpha.18 (2023-07-28)

**Note:** Version bump only for package root

# 0.1.0-alpha.17 (2023-07-19)

### Features

- add support for fetch options when creating public clients ([#59](https://github.com/alchemyplatform/aa-sdk/issues/59)) ([5028e7b](https://github.com/alchemyplatform/aa-sdk/commit/5028e7b21a208ad8f88e81d455c2c8e24d57d953))

# 0.1.0-alpha.16 (2023-07-06)

### Bug Fixes

- always import with file extension ([#48](https://github.com/alchemyplatform/aa-sdk/issues/48)) ([4776d74](https://github.com/alchemyplatform/aa-sdk/commit/4776d7476f8cb622416c8846afa9bc17d16b97a6))

# 0.1.0-alpha.15 (2023-07-05)

### Features

- kernel batch transactions and gas estimation fixes ([#39](https://github.com/alchemyplatform/aa-sdk/issues/39)) ([f2a3d3d](https://github.com/alchemyplatform/aa-sdk/commit/f2a3d3d093ddbe1b564c0242c28b67487554f1ba))

# 0.1.0-alpha.14 (2023-06-29)

### Bug Fixes

- npm 404 error ([f34f581](https://github.com/alchemyplatform/aa-sdk/commit/f34f581a0399a2e30f33161d8b4cc1d778122b1f))

# 0.1.0-alpha.13 (2023-06-29)

### Bug Fixes

- add github user details to publish script ([2b812d3](https://github.com/alchemyplatform/aa-sdk/commit/2b812d34c041e11ba7d4c11a72c26da8f8e7af21))

# [0.1.0-alpha.12](https://github.com/alchemyplatform/aa-sdk/compare/v0.1.0-alpha.11...v0.1.0-alpha.12) (2023-06-27)

### Bug Fixes

- set opt/arb goerli base fee percentage to 0 ([#37](https://github.com/alchemyplatform/aa-sdk/issues/37)) ([db750f0](https://github.com/alchemyplatform/aa-sdk/commit/db750f09bc88cc7fd3a1d8e3ea0ff874ac656a7c))

# [0.1.0-alpha.11](https://github.com/alchemyplatform/aa-sdk/compare/v0.1.0-alpha.10...v0.1.0-alpha.11) (2023-06-26)

### Features

- add a logger and some debug statements ([#35](https://github.com/alchemyplatform/aa-sdk/issues/35)) ([faef24e](https://github.com/alchemyplatform/aa-sdk/commit/faef24e9060216b03b4c7f2413d7fde931046096))

# [0.1.0-alpha.10](https://github.com/alchemyplatform/aa-sdk/compare/v0.1.0-alpha.8...v0.1.0-alpha.10) (2023-06-26)

### Bug Fixes

- types changed when updating to latest viem ([0aec96d](https://github.com/alchemyplatform/aa-sdk/commit/0aec96d184b5bcc3787ce9123260cf287f27f037))

# [0.1.0-alpha.9](https://github.com/alchemyplatform/aa-sdk/compare/v0.1.0-alpha.8...v0.1.0-alpha.9) (2023-06-26)

**Note:** Version bump only for package root

# [0.1.0-alpha.8](https://github.com/alchemyplatform/aa-sdk/compare/v0.1.0-alpha.7...v0.1.0-alpha.8) (2023-06-23)

### Bug Fixes

- **alchemy:** add opt mainnet to dummy gen ([#34](https://github.com/alchemyplatform/aa-sdk/issues/34)) ([ef21ad5](https://github.com/alchemyplatform/aa-sdk/commit/ef21ad514f9c1dfdfb49dedfd39586f58c2976c1))

# [0.1.0-alpha.7](https://github.com/alchemyplatform/aa-sdk/compare/v0.1.0-alpha.6...v0.1.0-alpha.7) (2023-06-20)

**Note:** Version bump only for package root

# [0.1.0-alpha.6](https://github.com/alchemyplatform/aa-sdk/compare/v0.1.0-alpha.5...v0.1.0-alpha.6) (2023-06-19)

### Bug Fixes

- return scaled prio fee as max fee per gas ([#27](https://github.com/alchemyplatform/aa-sdk/issues/27)) ([56bc34b](https://github.com/alchemyplatform/aa-sdk/commit/56bc34be3a50a2709ca546ed90a980f3c489cbbe))

# [0.1.0-alpha.5](https://github.com/alchemyplatform/aa-sdk/compare/v0.1.0-alpha.4...v0.1.0-alpha.5) (2023-06-16)

**Note:** Version bump only for package root

# [0.1.0-alpha.4](https://github.com/alchemyplatform/aa-sdk/compare/v0.1.0-alpha.3...v0.1.0-alpha.4) (2023-06-14)

### Features

- add aa-accounts subpackage ([#23](https://github.com/alchemyplatform/aa-sdk/issues/23)) ([a7fd5da](https://github.com/alchemyplatform/aa-sdk/commit/a7fd5da8600b0a346627df3a4b5cc338210aa256))
- expose more user op methods on the provider ([#25](https://github.com/alchemyplatform/aa-sdk/issues/25)) ([2f39460](https://github.com/alchemyplatform/aa-sdk/commit/2f3946063d78a4fe1a99078f8fd315d87b24a901))

# [0.1.0-alpha.3](https://github.com/alchemyplatform/aa-sdk/compare/v0.1.0-alpha.2...v0.1.0-alpha.3) (2023-06-13)

### Bug Fixes

- imports are broken because missing .js extension ([98f4a54](https://github.com/alchemyplatform/aa-sdk/commit/98f4a5469b0ac01a833ede08c6c077373255ed22))

# [0.1.0-alpha.2](https://github.com/alchemyplatform/aa-sdk/compare/v0.1.0-alpha.1...v0.1.0-alpha.2) (2023-06-12)

### Bug Fixes

- arbitrum min fee per bid needs to be a 1/10th the default on other chains ([#17](https://github.com/alchemyplatform/aa-sdk/issues/17)) ([453ecec](https://github.com/alchemyplatform/aa-sdk/commit/453ececb22e1981b27ed0635e0c763aa73e1a36f))
- fix broken deploy by ignoring example dapp build ([cadd788](https://github.com/alchemyplatform/aa-sdk/commit/cadd78813c01f33d2fe1e66140275bd9dd232699))
- import in core was still exporting deleted item ([4946408](https://github.com/alchemyplatform/aa-sdk/commit/4946408e757eab4e18a96d0a16839e92d78238d4))
- inject version was not using double quotes ([b7a7700](https://github.com/alchemyplatform/aa-sdk/commit/b7a77005bc0b04904911285ee0a9d3b610a73b89))

### Features

- add alchemy sub-package ([#22](https://github.com/alchemyplatform/aa-sdk/issues/22)) ([e7fc1aa](https://github.com/alchemyplatform/aa-sdk/commit/e7fc1aa93ebd57237009d3aa688d8c167f240aad))
- Add polygon mainnet support and fix wallet signature issue ([#13](https://github.com/alchemyplatform/aa-sdk/issues/13)) ([a67970a](https://github.com/alchemyplatform/aa-sdk/commit/a67970a07900be1d9efa0640f03c7feae3768360))
- add smart contract for nft for onboarding ([#10](https://github.com/alchemyplatform/aa-sdk/issues/10)) ([e3dc165](https://github.com/alchemyplatform/aa-sdk/commit/e3dc165bc53fcfa7d8d3e42e99d0c7cf8ff405b5))
- clean up components for profile and nft fetching ([#9](https://github.com/alchemyplatform/aa-sdk/issues/9)) ([e53ab62](https://github.com/alchemyplatform/aa-sdk/commit/e53ab6204f67a09860b640531ec9c8a66bb2917f))
- create Example Directory and Example Node.js D(AA)pp ([#8](https://github.com/alchemyplatform/aa-sdk/issues/8)) ([34b77d9](https://github.com/alchemyplatform/aa-sdk/commit/34b77d9e2fce3ae334037c67c72a330c755be606))
- integrate sdk + nft contract for onboarding ([#11](https://github.com/alchemyplatform/aa-sdk/issues/11)) ([f50b0e7](https://github.com/alchemyplatform/aa-sdk/commit/f50b0e783f838e313a12e1c0b65e5bd6a1e5040d))
- integrate sdk and refactor onboarding ([#12](https://github.com/alchemyplatform/aa-sdk/issues/12)) ([7dd7c97](https://github.com/alchemyplatform/aa-sdk/commit/7dd7c97ad10936fec0c9171d93745a891674c409))
- Support Arb Mainnet for Demo App ([#18](https://github.com/alchemyplatform/aa-sdk/issues/18)) ([6df907c](https://github.com/alchemyplatform/aa-sdk/commit/6df907cf8acb0fcf921b700a18d5bcb6d89c49f3))

# [0.1.0-alpha.1](https://github.com/alchemyplatform/aa-sdk/compare/v0.1.0-alpha.0...v0.1.0-alpha.1) (2023-06-02)

### Features

- add support for the new alchemy paymaster endpoint ([#14](https://github.com/alchemyplatform/aa-sdk/issues/14)) ([3fac515](https://github.com/alchemyplatform/aa-sdk/commit/3fac5152075b07ab91dea393e366b667149a3e23))

# [0.1.0-alpha.0](https://github.com/alchemyplatform/aa-sdk/compare/v0.0.1-alpha.2...v0.1.0-alpha.0) (2023-05-31)

### Features

- add support for batching transactions in a userop ([#7](https://github.com/alchemyplatform/aa-sdk/issues/7)) ([79d63a7](https://github.com/alchemyplatform/aa-sdk/commit/79d63a79d26d6501d74dbf90de6c9a1158d931de))

## [0.0.1-alpha.2](https://github.com/alchemyplatform/aa-sdk/compare/v0.0.1-alpha.1...v0.0.1-alpha.2) (2023-05-23)

**Note:** Version bump only for package root

## [0.0.1-alpha.1](https://github.com/alchemyplatform/aa-sdk/compare/v0.0.1-alpha.0...v0.0.1-alpha.1) (2023-05-22)

**Note:** Version bump only for package root
