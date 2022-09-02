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
    label: 'Transaction Amount',
    placeholder: 'Type in your transaction amount',
    type: 'number',
    name: 'amount',
    min: 0,
    id: 'amount',
  },
  {
    label: 'Transaction Group',
    placeholder: 'Type in your transaction group',
    type: 'text',
    name: 'transaction group',
    id: 'group',
  },
  {
    label: 'Transaction Date',
    placeholder: 'Type in your transaction date',
    type: 'date',
    name: 'date',
    id: 'date',
  },
];
