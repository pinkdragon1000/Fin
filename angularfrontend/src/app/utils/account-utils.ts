import * as dateUtils from './date-utils';
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

export const selectDataFunc = (transaction?: any) => [
  [
    {
      value: 0,
      description: 'Select your transaction type',
      disabled: true,
    },
    {
      value: 1,
      description: 'Deposit',
      selected: transaction.transaction_type === 'Deposit' ? 'selected' : null,
    },
    {
      value: 2,
      description: 'Withdraw',
      selected: transaction.transaction_type === 'Withdraw' ? 'selected' : null,
    },
  ],
];

export const transactionHeaders = [
  'Transaction Date',
  'Transaction Group',
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
    label: 'Transaction Amount ($)',
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

export const inputDataFunc = (transaction?: any) => [
  {
    id: 'amount',
    label: 'Transaction Amount ($)',
    min: 0,
    name: 'amount',
    placeholder: 'Type in your transaction amount',
    required: true,
    type: 'number',
    value: transaction.transaction_amount,
  },
  {
    id: 'group',
    label: 'Transaction Group',
    name: 'transaction group',
    placeholder: 'Type in your transaction group',
    required: true,
    type: 'text',
    value: transaction.transaction_group || 'None',
  },
  {
    id: 'date',
    label: 'Transaction Date',
    name: 'date',
    placeholder: 'Type in your transaction date',
    required: true,
    type: 'date',
    value: dateUtils.dateFormatter(transaction.transaction_date),
  },
];
