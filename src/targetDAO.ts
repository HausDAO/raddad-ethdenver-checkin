import { EthAddress } from '@daohaus/utils';
import { ValidNetwork } from '@daohaus/keychain-utils';

export const TARGET_DAO: {
  ID: EthAddress;
  CHAIN_ID: ValidNetwork;
  NAME: string;
  SHAMAN: EthAddress;
} = {
  ID: '0xddd21798f65b0f3d79929446039f70b3a5641527',
  CHAIN_ID: '0x64',
  NAME: 'Test Masons Project',
  SHAMAN: '0x8d53663810824716b2baDBc9B5f486b36C13e4bE',
};
