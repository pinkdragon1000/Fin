import { Component, OnInit } from '@angular/core';
import { TransactionAPIService } from '../../service/transaction-api.service';
import { AccountAPIService } from '../../service/account-api.service';
//import { formatDate } from '@angular/common';

@Component({
  selector: 'app-account-component',
  template: `
    <app-page-template
      [pagedirections]="
        'Click on the Add Transaction button to add a deposit/withdraw'
      "
      [pagetitle]="this.accountDescription"
    >
      <app-modal-button-component
        [type]="'transaction'"
        [label]="'Add Transaction'"
        [class]="'primary'"
      >
        <app-input-select-group-component
          [inputData]="this.inputData"
          [selectLabelData]="this.selectLabelData"
          [selectData]="this.selectData"
        >
        </app-input-select-group-component>

        <br />
        <app-button-component
          [label]="'Submit Transaction'"
          [class]="'primary'"
          (click)="postTransactionData()"
        ></app-button-component>
      </app-modal-button-component>

      <div class="scroll">
        <ng-container *ngIf="this.transactionData?.length !== 0">
          <app-table-component
            [tableLabel]="'Transactions'"
            [headerData]="this.transactionHeaders"
          >
            <tr
              *ngFor="let transaction of transactionData"
              [ngClass]="{
                'text-deposit': transaction.transaction_type === 'Deposit',
                'text-withdraw': transaction.transaction_type === 'Withdraw'
              }"
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
            </tr>
          </app-table-component>
        </ng-container>
      </div>

      <br />
      <br />
      <app-table-component
        [tableLabel]="'Overall Account Summary'"
        [headerData]="this.accountHeaders"
      >
        <tr>
          <td>\${{ this.accountStartingAmount }}</td>
          <td>\${{ this.accountDeposits }}</td>
          <td>\${{ this.accountWithdraws }}</td>

          <ng-container *ngIf="this.transactionData?.length !== 0">
            <td>
              \${{ this.transactionData?.slice(-1).pop().transaction_subTotal }}
            </td>
            <td>
              \${{
                this.transactionData?.slice(-1).pop().transaction_subTotal -
                  this.accountStartingAmount
              }}
            </td>
          </ng-container>

          <ng-container *ngIf="this.transactionData?.length === 0">
            <td>\${{ this.accountStartingAmount }}</td>
            <td>$0</td>
          </ng-container>
        </tr>
      </app-table-component>
    </app-page-template>
  `,
  styles: [
    `
      .scroll {
        height: 10rem;
        overflow-y: scroll;
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
      td {
        border: 0.063rem solid #dddddd;
        text-align: left;
        padding: 0.5rem;
      }
    `,
  ],
})
export class AccountComponent implements OnInit {
  accountStartingAmount: number = 0;
  accountDeposits: number = 0;
  accountWithdraws: number = 0;
  accountIDnum: number;
  accountDescription: string;
  accountUser: number;
  accountIndex: number;
  transactionTypeNum: string;
  transactionType: string;
  userId: string = sessionStorage.getItem('userId');

  transactionData: Array<any>;

  selectLabelData = ['Transaction Type'];
  selectData = [
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

  transactionHeaders = [
    'Transaction Date',
    'Transaction Type',
    'Transaction Amount',
    'Sub-Total',
  ];

  accountHeaders = [
    'Account Starting Amount',
    'Account Deposits',
    'Account Withdraws',
    'Account Current Amount',
    'Overall Account Difference (Current-Starting)',
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

  constructor(
    private accountApiService: AccountAPIService,
    private transactionApiService: TransactionAPIService
  ) {}
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
    this.transactionApiService.postTransactionData(body);
    location.reload();
  }

  ngOnInit() {
    this.accountIDnum = parseInt(window.location.search.substring(4), 10);

    this.accountApiService.getAccountDataAsync((d: any) => {
      this.accountIndex = d.findIndex(
        (account) => account.account_id == this.accountIDnum
      );
      this.accountDescription = d[this.accountIndex].account_Description;
      this.accountDeposits = d[this.accountIndex].deposit_amount;
      this.accountWithdraws = d[this.accountIndex].withdraw_amount;
      this.accountUser = d[this.accountIndex].user_id;
      this.accountStartingAmount = d[this.accountIndex].account_Starting_Amount;
    }, this.userId);

    this.transactionApiService.getTransactionDataAsync((d: Array<any>) => {
      this.transactionData = d;
    }, this.accountIDnum);
  }
}
