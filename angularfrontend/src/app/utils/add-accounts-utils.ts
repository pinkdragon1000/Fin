export const selectLabelData = ['Account Type (checking/savings)'];

export const inputData = [
  {
    label: 'Account Description (Example: TD Bank Checking)',
    placeholder: 'Type in your account description',
    type: 'text',
    name: 'description',
    id: 'description',
    min: 0,
  },
  {
    label: 'Account Starting Amount ($)',
    placeholder: 'Type in your account starting amount',
    type: 'number',
    name: 'amount',
    id: 'amount',
    min: 1,
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
