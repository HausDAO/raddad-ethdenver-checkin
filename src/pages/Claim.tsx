import { FormBuilder } from '@daohaus/form-builder';
import { useQueryClient } from 'react-query';

import { FORM } from '../legos/forms';
import { TARGET_DAO } from '../targetDAO';

export const Claim = () => {
  const client = useQueryClient();
  return (
    <FormBuilder
      form={FORM.CHECK_IN}
      targetNetwork={TARGET_DAO.CHAIN_ID}
      onSuccess={() => {
        client.clear();
      }}
    />
  );
};
