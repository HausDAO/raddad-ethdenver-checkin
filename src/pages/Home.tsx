import { useDHConnect } from '@daohaus/connect';
import { useTxBuilder } from '@daohaus/tx-builder';
import {
  Button,
  Card,
  H2,
  Link,
  ParLg,
  ParMd,
  SingleColumnLayout,
} from '@daohaus/ui';
import styled from 'styled-components';
import { HausAnimated } from '../components/HausAnimated';
import { useCheckInData } from '../hooks/useCheckInData';
import { TX } from '../legos/tx';
import { TARGET_DAO } from '../targetDAO';

const ClaimsDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Home = () => {
  const { address } = useDHConnect();

  return (
    <SingleColumnLayout>
      <ClaimsDescription>
        <H2 className="mb-md">DAOMasons Claims App</H2>
        <ParMd className="mb-xl">
          This app uses a CheckIn Shaman to handle fast easy claims.{' '}
        </ParMd>
        {/* <ShamanDataDisplay /> */}
      </ClaimsDescription>
    </SingleColumnLayout>
  );
};

const ShamanDataDisplay = () => {
  const { address } = useDHConnect();

  const { data, isLoading } = useCheckInData({
    shamanAddress: TARGET_DAO.SHAMAN,
    chainId: TARGET_DAO.CHAIN_ID,
    userAddress: address as string,
  });

  if (isLoading)
    return (
      <Card>
        <ParMd>Loading Shaman Data...</ParMd>;
      </Card>
    );

  return (
    <Card>
      <ParLg>Shaman Information</ParLg>
    </Card>
  );
};
