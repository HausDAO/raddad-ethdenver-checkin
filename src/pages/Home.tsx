import { useTxBuilder } from '@daohaus/tx-builder';
import { Button, H2, Link, ParMd, SingleColumnLayout } from '@daohaus/ui';
import styled from 'styled-components';
import { HausAnimated } from '../components/HausAnimated';
import { TX } from '../legos/tx';

export const Home = () => {
  return (
    <SingleColumnLayout>
      <H2>DAOhaus is your haus</H2>
      <HausAnimated />
      <ParMd style={{ marginBottom: '2.4rem' }}>
        Get started by editing src/pages/Home.tsx
      </ParMd>
    </SingleColumnLayout>
  );
};
