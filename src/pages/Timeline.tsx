import {
  Button,
  Card,
  ParLg,
  ParMd,
  ParSm,
  ParXl,
  ParXs,
  SingleColumnLayout,
  Spinner,
  TintSecondary,
} from '@daohaus/ui';
import {
  formatDateFromSeconds,
  formatDateTimeFromSeconds,
  formatLongDateFromSeconds,
  formatPeriods,
  formatShortDateTimeFromSeconds,
  formatValueTo,
  fromWei,
  truncateAddress,
} from '@daohaus/utils';
import React from 'react';
import styled from 'styled-components';
import { useCheckInLogs } from '../hooks/useCheckInLogs';
import { TARGET_DAO } from '../targetDAO';
import { CheckIn } from '../types';

export const Timeline = () => {
  const { logs, isLoading } = useCheckInLogs({
    shamanAddress: TARGET_DAO.SHAMAN,
    chainId: TARGET_DAO.CHAIN_ID,
  });

  if (isLoading) {
    return (
      <SingleColumnLayout title="Loading Timeline">
        <Spinner size="12rem" />
      </SingleColumnLayout>
    );
  }
  console.log('logs', logs);
  return (
    <SingleColumnLayout title="Work Timeline">
      {logs?.map((log) => {
        return <Log key={`${log.id}`} {...log} />;
      })}
    </SingleColumnLayout>
  );
};

const ClaimCard = styled(Card)`
  width: 100%;
  margin-bottom: 2rem;
  .space {
    margin-bottom: 2rem;
  }
  .sm-space {
    margin-bottom: 1rem;
  }
  .xs-space {
    margin-bottom: 0.5rem;
  }
  .uppercase {
    text-transform: uppercase;
  }
`;

const Log = ({
  memberAddress,
  tokenAmountClaimed,
  secondsWorked,
  description,
  timeStamp,
  morale,
  obstacles,
  future,
}: CheckIn) => {
  const [showMore, setShowMore] = React.useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <ClaimCard>
      <ParSm className="sm-space">
        <TintSecondary>
          {formatShortDateTimeFromSeconds(timeStamp)}
        </TintSecondary>
      </ParSm>
      <ParLg className="space">
        {truncateAddress(memberAddress)} claimed{' '}
        {formatValueTo({
          value: fromWei(tokenAmountClaimed),
          decimals: 2,
          format: 'numberShort',
        })}{' '}
        shares for {formatPeriods(secondsWorked)} worked
      </ParLg>
      <Button onClick={toggleShowMore} variant="link" className="space">
        {showMore ? 'Hide Details' : 'Show Details'}
      </Button>
      {showMore && (
        <>
          <ParXs className="uppercase xs-space">Morale:</ParXs>
          <ParMd className="space">
            <TintSecondary>{morale}</TintSecondary>
          </ParMd>
          <ParXs className="uppercase xs-space">Work Description:</ParXs>
          <ParMd className="space">
            <TintSecondary>{description}</TintSecondary>
          </ParMd>
          <ParXs className="uppercase xs-space">Obstacles:</ParXs>
          <ParMd className="space">
            <TintSecondary>{obstacles}</TintSecondary>
          </ParMd>
          <ParXs className="uppercase xs-space">Future:</ParXs>
          <ParMd className="space">
            <TintSecondary>{future}</TintSecondary>
          </ParMd>
        </>
      )}
    </ClaimCard>
  );
};
