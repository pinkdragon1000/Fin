import { Component, OnInit } from '@angular/core';
import { TransactionAPIService } from '../../service/transaction-api.service';
import { AccountAPIService } from '../../service/account-api.service';
import * as accountUtils from './../../utils/account-utils';
import * as dateUtils from './../../utils/date-utils';

@Component({
  selector: 'app-account-component',
  template: `
    <app-page-template
      [pagedirections]="
        'Click on the Add Transaction button to add a deposit/withdraw'
      "
      [pagetitle]="this.accountDescription"
      [buttonlabel]="'Add Transaction'"
    >
      <ng-container form>
        <app-input-select-group-component
          [inputData]="accountUtils.inputData"
          [selectLabelData]="accountUtils.selectLabelData"
          [selectData]="accountUtils.selectData"
        >
        </app-input-select-group-component>

        <br />

        <app-button-component
          [label]="'Submit Transaction'"
          [class]="'primary'"
          (click)="postTransactionData()"
        ></app-button-component>
      </ng-container>

      <ng-container content>
        <app-tabs-component>
          <app-tab-component [tabTitle]="'Table View'">
            <div class="scroll">
              <ng-container *ngIf="this.transactionData?.length !== 0">
                <app-table-component
                  [tableLabel]="'Transactions'"
                  [headerData]="accountUtils.transactionHeaders"
                >
                  <tr
                    *ngFor="let transaction of transactionData"
                    [ngClass]="{
                      'text-deposit':
                        transaction.transaction_type === 'Deposit',
                      'text-withdraw':
                        transaction.transaction_type === 'Withdraw'
                    }"
                  >
                    <td>
                      {{
                        dateUtils.dateFormatter(transaction.transaction_date)
                      }}
                    </td>
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
              [headerData]="accountUtils.accountHeaders"
            >
              <tr>
                <td>\${{ this.accountStartingAmount }}</td>
                <td>\${{ this.accountDeposits }}</td>
                <td>\${{ this.accountWithdraws }}</td>
                <td>\${{ this.accountCurrentAmount }}</td>
                <td>\${{ this.accountDifference }}</td>
              </tr>
            </app-table-component>
          </app-tab-component>
          <app-tab-component tabTitle="Graph View">
            <div class="row padding">
              <app-vertical-bar-component
                [colorScheme]="'orangePink'"
                [plot]="[
                  {
                    name: 'Account Starting',
                    value: this.accountStartingAmount
                  },
                  { name: 'Account Current', value: this.accountCurrentAmount }
                ]"
                [yLabel]="'Dollars ($)'"
              >
              </app-vertical-bar-component>
              <app-vertical-bar-component
                [colorScheme]="'redGreen'"
                [plot]="[
                  { name: 'Deposits', value: this.accountDeposits },
                  { name: 'Withdrawals', value: this.accountWithdraws }
                ]"
                [yLabel]="'Dollars ($)'"
              >
              </app-vertical-bar-component>
            </div>
          </app-tab-component>
        </app-tabs-component>
      </ng-container>
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

      .padding {
        padding-top: 2rem;
        padding-left: 1rem;
        padding-bottom: 5rem;
      }
    `,
  ],
})
export class AccountComponent implements OnInit {
  accountStartingAmount: number = 0;
  accountDeposits: number;
  accountWithdraws: number;
  accountCurrentAmount: number;
  accountDifference: number;
  accountIDnum: number;
  accountDescription: string;
  accountIndex: number;
  transactionTypeNum: string;
  transactionType: string;
  userID: string = sessionStorage.getItem('userId');

  //Reference imported util variables
  accountUtils: any = accountUtils;
  dateUtils: any = dateUtils;

  transactionData: Array<any>;

  constructor(
    private accountApiService: AccountAPIService,
    private transactionApiService: TransactionAPIService
  ) {}
  postTransactionData() {
    this.accountIDnum = parseInt(window.location.search.substring(4), 10);

    this.transactionTypeNum = (
      document.getElementById('select') as HTMLInputElement
    ).value;
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
      this.accountStartingAmount = d[this.accountIndex].account_Starting_Amount;
      this.accountCurrentAmount = d[this.accountIndex].account_Current_Amount;
      this.accountDifference = d[this.accountIndex].account_Difference;
    }, this.userID);

    this.transactionApiService.getTransactionDataAsync((d: Array<any>) => {
      this.transactionData = d;
    }, this.accountIDnum);
  }
}
