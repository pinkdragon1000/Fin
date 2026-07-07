export interface Transaction {
  transactionId: string;
  accountId: string;
  transactionType: string;
  transactionAmount: number;
  transactionGroup: number;
  transactionSubTotal: number;
  transactionDate: Date;
}
