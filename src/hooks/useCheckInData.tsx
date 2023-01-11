import { ValidNetwork } from '@daohaus/keychain-utils';
import { createContract } from '@daohaus/tx-builder';
import React from 'react';
import { useQuery } from 'react-query';
import CheckInShamanABI from '../abi/CheckInShaman.json';

type FetchShape = {
  checkInInterval: boolean;
  sharesPerSecond: boolean;
  lastCheckIn: boolean;
};

const fetchCheckInData = async ({
  shamanAddress,
  chainId,
  userAddress,
  fetchShape,
}: {
  shamanAddress: string;
  chainId: ValidNetwork;
  userAddress?: string;
  fetchShape: FetchShape;
}) => {
  const checkInContract = createContract({
    address: shamanAddress,
    abi: CheckInShamanABI,
    chainId,
  });

  const checkInInterval = fetchShape.checkInInterval
    ? await checkInContract.checkInInterval()
    : null;
  const sharesPerSecond = fetchShape.sharesPerSecond
    ? await checkInContract.sharesPerSecond()
    : null;
  const lastCheckIn =
    fetchShape.lastCheckIn && userAddress
      ? await checkInContract.timeLedger(userAddress)
      : null;

  return {
    checkInInterval: checkInInterval.toString(),
    sharesPerSecond: sharesPerSecond.toString(),
    lastCheckIn,
  };
};

export const useCheckInData = ({
  shamanAddress,
  chainId,
  userAddress,
  fetchShape = {
    checkInInterval: true,
    sharesPerSecond: true,
    lastCheckIn: true,
  },
}: {
  shamanAddress: string;
  userAddress?: string;
  fetchShape?: FetchShape;
  chainId: ValidNetwork;
}) => {
  const { data, error, ...rest } = useQuery(
    [`checkInData-${shamanAddress}`, { shamanAddress, chainId, userAddress }],
    () => fetchCheckInData({ shamanAddress, chainId, fetchShape, userAddress }),
    { enabled: !!shamanAddress && !!chainId }
  );

  return { data, error: error as Error | null, ...rest };
};
