import { DHLayout, useDHConnect } from '@daohaus/connect';
import { TXBuilder } from '@daohaus/tx-builder';
import { Routes as Router, Route, useLocation } from 'react-router-dom';
import { Claim } from './pages/Claim';
import { Home } from './pages/Home';
import { TARGET_DAO } from './targetDAO';

export const Routes = () => {
  const { pathname } = useLocation();
  const { provider, address } = useDHConnect();

  return (
    <TXBuilder
      daoId={TARGET_DAO.ID}
      chainId={TARGET_DAO.CHAIN_ID}
      appState={{
        memberAddress: address,
      }}
      provider={provider}
    >
      <DHLayout
        pathname={pathname}
        navLinks={[
          { label: 'Home', href: '/' },
          { label: 'Form Test', href: '/formtest' },
        ]}
      >
        <Router>
          <Route path="/" element={<Home />} />
          <Route path="/formtest" element={<Claim />} />
        </Router>
      </DHLayout>
    </TXBuilder>
  );
};
