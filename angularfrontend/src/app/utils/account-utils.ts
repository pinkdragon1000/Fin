export const selectLabelData = ['Transaction Type'];
export const selectData = [
  [
    {
      value: 0,
      description: 'Select your transaction type',
      disabled: true,
    },
    {
      value: 1,
      description: 'Deposit',
    },
    {
      value: 2,
      description: 'Withdraw',
    },
  ],
];

export const transactionHeaders = [
  'Transaction Date',
  'Transaction Type',
  'Transaction Amount',
  'Sub-Total',
];

export const accountHeaders = [
  'Account Starting Amount',
  'Account Deposits',
  'Account Withdraws',
  'Account Current Amount',
  'Overall Account Difference (Current-Starting)',
];

export const inputData = [
  {
    id: 'amount',
    label: 'Transaction Amount',
    min: 0,
    name: 'amount',
    placeholder: 'Type in your transaction amount',
    required: true,
    type: 'number',
  },
  {
    id: 'group',
    label: 'Transaction Group',
    name: 'transaction group',
    placeholder: 'Type in your transaction group',
    required: true,
    type: 'text',
  },
  {
    id: 'date',
    label: 'Transaction Date',
    name: 'date',
    placeholder: 'Type in your transaction date',
    required: true,
    type: 'date',
  },
];
