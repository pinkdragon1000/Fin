import { APIService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
@Component({
  selector: 'account-component',
  template: `
    <page-template
      [pagedirections]="'Click on an account to view and add information'"
      [pagetitle]="this.accountDescription"
    >
      <add-transaction-button-component modalAccountText="">
        <div class="input" *ngFor="let input of accountFieldData">
          <input-component
            [label]="input.label"
            [placeholder]="input.placeholder"
            [type]="input.type"
            [name]="input.name"
            [min]="input.min"
          ></input-component>
        </div>
        <label>Transaction Type </label>
        <br />
        <select class="select">
          <option value="0">Select your transaction type</option>
          <option value="1">Deposit</option>
          <option value="2">Withdraw</option>
        </select>
        <br />
        <button class="primary round">Submit Transaction</button>
      </add-transaction-button-component>

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
          <th>Overall Account Difference</th>
        </tr>
        <tr>
          <td>\${{ this.accountStartingAmount }}</td>
          <td>\${{ this.accountDeposits }}</td>
          <td>\${{ this.accountWithdraws }}</td>
          <td>
            \${{ this.transactionData.slice(-1).pop().transaction_subTotal }}
          </td>
          <td>
            \${{
              this.transactionData.slice(-1).pop().transaction_subTotal -
                this.accountStartingAmount
            }}
          </td>
        </tr>
      </table>
    </page-template>
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
      .select {
        width: 52%;
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

      select {
        border-radius: 20rem;
        font-size: 1rem;
        height: 1.5rem;
        min-width: 15rem;
        width: 100%;
        height: 3.25rem;
        padding: 0rem 1rem;
        border: 0.063rem solid var(--fin-white);
        margin: 0.5rem 0;
        background: var(--fin-neutral-6);
        color: var(--fin-neutral-1);
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
  constructor(private apiService: APIService) {}
  accountStartingAmount: number;
  accountDeposits: string;
  accountWithdraws: string;
  accountID: string;
  accountIDnum: number;
  accountDescription: string;
  transactionId: string;
  accountUser: number;

  currentUser: number = 1;

  transactionData: Array<any>;

  accountFieldData = [
    {
      label: 'Transaction Amount',
      placeholder: 'Type in your transaction amount',
      type: 'number',
      name: 'amount',
      min: 0,
    },
    {
      label: 'Transaction Group',
      placeholder: 'Type in your transaction group',
      type: 'text',
      name: 'transaction group',
    },
    {
      label: 'Transaction Date',
      placeholder: 'Type in your transaction date',
      type: 'date',
      name: 'date',
    },
  ];

  ngOnInit() {
    this.accountIDnum = parseInt(window.location.search.substring(4));
    this.accountID = (
      parseInt(window.location.search.substring(4)) - 1
    ).toString();

    this.apiService.getAccountDataAsync((d: number) => {
      this.accountUser = d[this.accountID].user_id;
    });
    this.apiService.getAccountDataAsync((d: Object) => {
      this.accountDescription = d[this.accountID].account_Description;
    });
    this.apiService.getAccountDataAsync((d: number) => {
      this.accountStartingAmount = d[this.accountID].account_Starting_Amount;
    });
    this.apiService.getAccountDataAsync((d: Object) => {
      this.accountDeposits = d[this.accountID].deposit_amount;
    });
    this.apiService.getAccountDataAsync((d: Object) => {
      this.accountWithdraws = d[this.accountID].withdraw_amount;
    });

    this.apiService.getTransactionDataAsync((d: Array<any>) => {
      this.transactionData = d;
    });
  }
}
