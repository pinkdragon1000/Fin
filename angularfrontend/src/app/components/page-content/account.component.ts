import { APIService } from './../api.service';
import { Component, OnInit } from '@angular/core';
//import { formatDate } from '@angular/common';

@Component({
  selector: 'app-account-component',
  template: `
    <app-page-template
      [pagedirections]="'Click on an account to view and add information'"
      [pagetitle]="this.accountDescription"
    >
      <app-add-transaction-button-component modalAccountText="">
        <app-input-group-component [inputData]="this.inputData">
        </app-input-group-component>

        <app-select-component
          [label]="'Transaction Type'"
          [selectData]="this.selectData"
        ></app-select-component>
        <br />
        <button
          type="submit"
          class="primary round"
          (click)="postTransactionData()"
        >
          Submit Transaction
        </button>
      </app-add-transaction-button-component>

      <p>Transactions</p>
      <div class="scroll">
        <table>
          <tr>
            <th>Transaction Date</th>
            <th>Transaction Type</th>
            <th>Transaction Amount</th>
            <th>Sub-Total</th>
          </tr>

          <tr
            *ngFor="let transaction of transactionData"
            [ngClass]="{
              'text-deposit': transaction.transaction_type === 'Deposit',
              'text-withdraw': transaction.transaction_type === 'Withdraw'
            }"
          >
            <ng-container
              *ngIf="
                accountUser === currentUser &&
                transaction.account_id === accountIDnum
              "
            >
              <td>{{ transaction.transaction_date }}</td>
              <td>{{ transaction.transaction_type }}</td>
              <td
                [ngClass]="{
                  'text-deposit-arrow':
                    transaction.transaction_type === 'Deposit',
                  'text-withdraw-arrow':
                    transaction.transaction_type === 'Withdraw'
                }"
              >
                \${{ transaction.transaction_amount }}
              </td>
              <td>\${{ transaction.transaction_subTotal }}</td>
            </ng-container>
          </tr>
        </table>
      </div>
      <br />
      <br />
      <p>Overall Account Summary</p>
      <table>
        <tr>
          <th>Account Starting Amount</th>
          <th>Account Deposits</th>
          <th>Account Withdraws</th>
          <th>Account Current Amount</th>
          <th>Overall Account Difference (Current-Starting)</th>
        </tr>
        <tr>
          <td>\${{ this.accountStartingAmount }}</td>
          <td>\${{ this.accountDeposits }}</td>
          <td>\${{ this.accountWithdraws }}</td>
          <td>
            \${{ this.transactionData?.slice(-1).pop().transaction_subTotal }}
          </td>
          <td>
            \${{
              this.transactionData?.slice(-1).pop().transaction_subTotal -
                this.accountStartingAmount
            }}
          </td>
        </tr>
      </table>
    </app-page-template>
  `,
  styles: [
    `
      .scroll {
        height: 10rem;
        overflow-y: scroll;
      }
      .clickable-view {
        margin: 0.625rem;
      }

      .inputs {
        align-items: center;
      }
      .input {
        width: 50%;
      }

      .row {
        padding-right: 5rem;
      }

      .text-deposit {
        color: green;
      }

      .text-withdraw {
        color: #a10a28;
      }

      .text-deposit-arrow::before {
        font-family: 'Font Awesome 5 Free';
        content: '↑';
      }

      .text-withdraw-arrow::before {
        font-family: 'Font Awesome 5 Free';
        content: '↓';
      }

      table {
        border-collapse: collapse;
        width: 100%;
      }

      th {
        background-color: var(--fin-neutral-6);
        color: var(--fin-neutral-1);
      }

      td,
      th {
        border: 0.063rem solid #dddddd;
        text-align: left;
        padding: 0.5rem;
      }
    `,
  ],
})
export class AccountComponent implements OnInit {
  accountStartingAmount: number;
  accountDeposits: string;
  accountWithdraws: string;
  accountIDnum: number;
  accountDescription: string;
  transactionId: string;
  accountUser: number;
  accountIndex: number;
  transactionTypeNum: any;
  transactionType: string;

  currentUser = 1;

  transactionData: Array<any>;

  selectData = [
    {
      value: 0,
      description: 'Select your transaction type',
    },
    {
      value: 1,
      description: 'Deposit',
    },
    {
      value: 2,
      description: 'Withdraw',
    },
  ];

  inputData = [
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

  constructor(private apiService: APIService) {}
  postTransactionData() {
    this.accountIDnum = parseInt(window.location.search.substring(4), 10);

    this.transactionTypeNum = (
      document.getElementById('select') as HTMLInputElement
    ).value;
    console.log(this.transactionTypeNum);
    if (this.transactionTypeNum === '1') {
      this.transactionType = 'Deposit';
    } else if (this.transactionTypeNum === '2') {
      this.transactionType = 'Withdraw';
    }

    const transactionDate = (
      document.getElementById('date') as HTMLInputElement
    ).value;

    const transactionAmount = (
      document.getElementById('amount') as HTMLInputElement
    ).value;

    console.log(transactionDate);

    const body =
      '{"account_id":{"account_id":' +
      this.accountIDnum +
      '}, "transaction_type": "' +
      this.transactionType +
      '", "transaction_date":"' +
      transactionDate +
      '", "transaction_amount":' +
      transactionAmount +
      ', "transaction_subTotal": 0}';
    console.log(body);
    this.apiService.postTransactionData(body);
    location.reload();
  }

  ngOnInit() {
    this.accountIDnum = parseInt(window.location.search.substring(4), 10);

    this.apiService.getAccountDataAsync((d: any) => {
      this.accountIndex = d.findIndex(
        (account) => account.account_id == this.accountIDnum
      );
      this.accountDescription = d[this.accountIndex].account_Description;
      this.accountDeposits = d[this.accountIndex].deposit_amount;
      this.accountWithdraws = d[this.accountIndex].withdraw_amount;
      this.accountUser = d[this.accountIndex].user_id;
      this.accountStartingAmount = d[this.accountIndex].account_Starting_Amount;
    });

    this.apiService.getTransactionDataAsync((d: Array<any>) => {
      this.transactionData = d;
    }, this.accountIDnum);
  }
}
