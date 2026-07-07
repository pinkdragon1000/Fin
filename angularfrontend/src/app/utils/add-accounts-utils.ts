export const selectLabelData = ['Account Type (checking/savings)'];

const dateInputValue = (date?: string) => date?.split('T')[0] ?? '';

export const inputDataFunc = (account?: any) => [
  {
    id: 'description',
    label: 'Account Description (Example: TD Bank Checking)',
    name: 'description',
    placeholder: 'Type in your account description',
    required: true,
    type: 'text',
    value: account.account_Description,
  },
  {
    id: 'amount',
    label: 'Account Starting Amount ($)',
    min: 0,
    name: 'amount',
    placeholder: 'Type in your account starting amount',
    required: true,
    type: 'number',
    value: String(account.account_Starting_Amount),
  },
  {
    id: 'startingDate',
    label: 'Starting Balance Date',
    name: 'starting date',
    placeholder: 'Choose the starting balance date',
    required: true,
    type: 'date',
    value: dateInputValue(account.account_Starting_Date),
  },
];

export const selectDataFunc = (account?: any) => [
  [
    { value: '0', description: 'Select your account type', disabled: true },
    { value: '1', description: 'Checking', selected: account.account_Type === 'Checking' ? 'selected' : null },
    { value: '2', description: 'Savings', selected: account.account_Type === 'Savings' ? 'selected' : null },
  ],
];

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
  {
    id: 'startingDate',
    label: 'Starting Balance Date',
    name: 'starting date',
    placeholder: 'Choose the starting balance date',
    required: true,
    type: 'date',
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
