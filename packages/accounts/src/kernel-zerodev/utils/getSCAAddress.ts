import axios from "axios";
import { type Address, type Hex, type PublicClient, hexToBigInt, keccak256, parseAbi, zeroAddress, getAddress } from "viem";
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

async function computeSCAAddress(
  publicClient: PublicClient,
  scaRegistryAddress: Address,
  factoryAddress: Address,
  owner: string
): Promise<Address> {
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

// eslint-disable-next-line import/no-anonymous-default-export
export default async (
  publicClient: PublicClient,
  scaRegistryAddress: Address,
  factoryAddress: Address,
  owner: string
) => {
  try {
    const { data } = await axios.get(`https://aa-registry-test.bsquared.network/1002/${owner}`)
    const result = getAddress(data.result)    
    console.log('fetched SCA address from cache:', result);
    return result
  } catch (err) {
    console.error('failed to fetch SCA address from cache:', err);
  }
  return computeSCAAddress(publicClient, scaRegistryAddress, factoryAddress, owner);
}
