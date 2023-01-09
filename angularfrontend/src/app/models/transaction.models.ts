export interface Transaction {
  transactionId: number;
  accountId: number;
  transactionType: string;
  transactionAmount: number;
  transactionGroup: number;
  transactionSubTotal: number;
  transactionDate: Date;
}
