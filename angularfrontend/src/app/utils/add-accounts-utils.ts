export const selectLabelData = ['Account Type (checking/savings)'];

export const inputData = [
  {
    id: 'description',
    label: 'Account Description (Example: TD Bank Checking)',
    name: 'description',
    placeholder: 'Type in your account description',
    required: true,
    type: 'text',
  },
  {
    id: 'amount',
    label: 'Account Starting Amount ($)',
    min: 0,
    name: 'amount',
    placeholder: 'Type in your account starting amount',
    required: true,
    type: 'number',
  },
];

export const selectData = [
  [
    {
      value: '0',
      description: 'Select your account type',
      disabled: true,
    },
    {
      value: '1',
      description: 'Checking',
    },
    {
      value: '2',
      description: 'Savings',
    },
  ],
];
