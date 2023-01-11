import { EthAddress } from '@daohaus/utils';
import { ValidNetwork } from '@daohaus/keychain-utils';

export const TARGET_DAO: {
  ID: EthAddress;
  CHAIN_ID: ValidNetwork;
  NAME: string;
  SHAMAN: EthAddress;
} = {
  ID: '0xe03c08245551163ddbd7361ad1c3f56a8f63db8a',
  CHAIN_ID: '0x64',
  NAME: 'RadDad Lads - Eth Denver Hack',
  SHAMAN: '0xae487435dCF82C764526f7f8805518d8E8b27677',
};
