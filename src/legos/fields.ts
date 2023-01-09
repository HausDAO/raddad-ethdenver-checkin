import { FieldLego } from '@daohaus/form-builder';

export const FIELD: Record<string, FieldLego> = {
  TITLE: {
    id: 'title',
    type: 'input',
    label: 'Proposal Title',
    placeholder: 'Enter title',
  },
  DESCRIPTION: {
    id: 'description',
    type: 'textarea',
    label: 'Description',
    placeholder: 'Enter description',
  },
  LINK: {
    id: 'link',
    type: 'input',
    label: 'Link',
    placeholder: 'http://',
    expectType: 'url',
  },
  SECONDS_WORKED: {
    id: 'time',
    type: 'timePicker',
    label: 'Time Worked',
    placeholder: '0',
    expectType: 'number',
  },
  MORALE: {
    id: 'morale',
    type: 'input',
    label: 'Morale',
    placeholder: 'How are you feeling?',
  },
  OBSTACLES: {
    id: 'obstacles',
    type: 'input',
    label: 'Obstacles',
    placeholder: 'What got in your way?',
  },
  FUTURE: {
    id: 'future',
    type: 'textarea',
    label: 'Next Steps',
    placeholder: 'What are you going to do next?',
  },
};
