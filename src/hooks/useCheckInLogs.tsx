import { createContract } from '@daohaus/tx-builder';
import { ValidNetwork } from '@daohaus/keychain-utils';
import CheckInShamanABI from '../abi/CheckInShaman.json';
import React from 'react';
import { useQuery } from 'react-query';
import { CheckIn } from '../types';

const resolveEventData = (arg: any): CheckIn => {
  if (JSON.parse(arg?.metadata)?.version !== 0.1) {
    throw new Error(`Invalid metadata version`);
  }
  const { account, timestamp, secondsWorked, metadata, tokenAmountClaimed } =
    arg;

  const { version, morale, description, future, obstacles } =
    JSON.parse(metadata);
  return {
    id: `${account}-${timestamp}`,
    claimVersion: version,
    morale,
    description,
    future,
    obstacles,
    memberAddress: account,
    secondsWorked,
    tokenAmountClaimed: tokenAmountClaimed.toString(),
    timeStamp: timestamp.toString(),
  };
};

const fetchShamanLogs = async ({
  shamanAddress,
  chainId,
}: {
  shamanAddress: string;
  chainId: ValidNetwork;
}) => {
  const checkInContract = createContract({
    address: shamanAddress,
    abi: CheckInShamanABI,
    chainId,
  });

  try {
    const logs = await checkInContract.queryFilter('Claim');
    return logs
      .map((log) => resolveEventData(log.args))
      .sort((a, b) => (Number(a.timeStamp) > Number(b.timeStamp) ? -1 : 1));
  } catch (error: any) {
    console.error(error);
    throw new Error(error?.message || 'Error fetching check in logs');
  }
};

export const useCheckInLogs = ({
  shamanAddress,
  chainId,
}: {
  shamanAddress: string;
  chainId: ValidNetwork;
}) => {
  const { data, error, ...rest } = useQuery(
    [`checkInShaman-${shamanAddress}`, { shamanAddress, chainId }],
    () =>
      fetchShamanLogs({
        shamanAddress,
        chainId,
      }),
    { enabled: !!shamanAddress && !!chainId }
  );

  return { logs: data, error: error as Error, ...rest };
};
