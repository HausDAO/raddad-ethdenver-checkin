import { FieldLego, FormLego } from '@daohaus/form-builder';
import { FIELD } from './fields';
import { TX } from './tx';

export const FORM: Record<string, FormLego> = {
  SIGNAL: {
    id: 'SIGNAL',
    title: 'Signal Form',
    subtitle: 'Signal Proposal',
    description: 'Ratify on-chain using a DAO proposal.',
    requiredFields: { title: true, description: true },
    log: true,
    tx: TX.POST_SIGNAL,
    fields: [
      FIELD.TITLE,
      FIELD.DESCRIPTION,
      FIELD.LINK,
      // ...PROPOSAL_SETTINGS_FIELDS,
    ],
  },
  CHECK_IN: {
    id: 'CHECK_IN',
    tx: TX.CHECK_IN,
    log: true,
    title: 'Submit Work Claim',
    subtitle: 'Work Claim',
    description:
      'Submit a work claim to redeem DAO shares using a shaman contract. No Proposal required.',
    requiredFields: {
      time: true,
      morale: true,
      description: true,
      obstacles: true,
      future: true,
    },
    fields: [
      FIELD.SECONDS_WORKED,
      FIELD.MORALE,
      {
        ...FIELD.DESCRIPTION,
        label: 'Work Description',
        placeholder: 'What did you do?',
      } as FieldLego,
      FIELD.OBSTACLES,
      FIELD.FUTURE,
    ],
  },
};
