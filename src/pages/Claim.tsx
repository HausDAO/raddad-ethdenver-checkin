import { useDHConnect } from '@daohaus/connect';
import { FormBuilder } from '@daohaus/form-builder';
import { TXBuilder } from '@daohaus/tx-builder';

import { FORM } from '../legos/forms';
import { TARGET_DAO } from '../targetDAO';

export const Claim = () => {
  const { provider } = useDHConnect();

  return (
    <FormBuilder form={FORM.CHECK_IN} targetNetwork={TARGET_DAO.CHAIN_ID} />
  );
};
