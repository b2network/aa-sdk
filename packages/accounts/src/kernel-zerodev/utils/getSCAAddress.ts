import { type Address, type Hex, type PublicClient, hexToBigInt, keccak256, parseAbi, zeroAddress } from "viem";
import { readContract } from 'viem/contract';

const SCARegistryABI = parseAbi([
  "function getSCAAddress(bytes32 id) external view returns (address)",
] as const);

const KernelFactoryABI = parseAbi([
  "function getAccountAddress(bytes data, uint256 index) external view returns (address)",
] as const)

async function getDeterministicAddress(publicClient: PublicClient, factoryAddress: Address, ownerHash: Hex): Promise<Address> {
  return readContract(publicClient, {
    abi: KernelFactoryABI,
    address: factoryAddress,
    functionName: "getAccountAddress",
    args: ['0x', hexToBigInt(ownerHash)],
  })
}

export default async (
  publicClient: PublicClient,
  scaRegistryAddress: Address,
  factoryAddress: Address,
  owner: string
): Promise<Address> => {
  const ownerHash = keccak256(Buffer.from(owner.toLowerCase(), 'utf-8'))
  const targetAddress = await readContract(publicClient, {
    abi: SCARegistryABI,
    address: scaRegistryAddress,
    functionName: "getSCAAddress",
    args: [ownerHash],
  });
  if (targetAddress === zeroAddress) {
    return getDeterministicAddress(publicClient, factoryAddress, ownerHash);
  }
  return targetAddress;
};
