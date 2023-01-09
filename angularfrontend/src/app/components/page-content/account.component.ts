import { Transaction } from './../../models/transaction.models';
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
      [pagetitle]="this.overallAccountData[0]"
      [buttonlabel]="'Add Transaction'"
    >
      <ng-container form>
        <app-form-component
          [inputData]="accountUtils.inputData"
          [selectLabelData]="accountUtils.selectLabelData"
          [selectData]="accountUtils.selectData"
          [error]="this.error"
          [label]="'Submit'"
          (click)="postTransactionData()"
        ></app-form-component>
      </ng-container>

      <ng-container content>
        <div *ngIf="transactionData?.length !== 0" class="row filterBox">
          <app-filter-component
            [label]="'Month'"
            [data]="dateUtils.monthData"
            [(model)]="month"
            (searchChange)="monthHandler($event)"
          ></app-filter-component>

          <app-filter-component
            [label]="'Year'"
            [data]="yearData"
            [(model)]="year"
            (searchChange)="yearHandler($event)"
          ></app-filter-component>

          <app-filter-component
            label="Transaction Group"
            [(model)]="transactionGroup"
            (searchChange)="transactionGroupSearchHandler($event)"
          ></app-filter-component>
        </div>

        <app-tabs-component>
          <app-tab-component [tabTitle]="'Table View'">
            <div *ngIf="transactionData?.length === 0">
              <app-emptycontent-component
                emptyHeader="No Transactions Yet"
                emptyPar="Click the 'Add Transaction' button to add a transaction."
              ></app-emptycontent-component>
            </div>
            <div *ngIf="this.transactionData?.length !== 0" class="scroll">
              <app-table-component
                [tableLabel]="'Transactions'"
                [headerData]="accountUtils.transactionHeaders"
              >
                <tr
                  *ngFor="
                    let i = index;
                    let transaction;
                    of: transactionData
                      | monthFilter : month
                      | yearFilter : year
                      | transactionGroupFilter : transactionGroup
                  "
                  [ngClass]="{
                    'text-deposit': transaction.transaction_type === 'Deposit',
                    'text-withdraw': transaction.transaction_type === 'Withdraw'
                  }"
                >
                  <td *ngFor="let data of getTransactionTableData(transaction)">
                    {{ data }}
                  </td>
                  <app-modal-button-component
                    [type]="'transaction' + i"
                    [class]="'edit'"
                    [pagetitle]="'Edit Transaction'"
                    [title]="'Edit Transaction'"
                  >
                    <app-form-component
                      [inputData]="accountUtils.inputDataFunc(transaction)"
                      [selectLabelData]="accountUtils.selectLabelData"
                      [selectData]="accountUtils.selectDataFunc(transaction)"
                      [error]="this.error"
                      [label]="'Update'"
                      [containsDelete]="true"
                      (deletionClick)="deleteTransaction(transaction)"
                    ></app-form-component>
                  </app-modal-button-component>
                </tr>
              </app-table-component>
            </div>

            <br />
            <br />
            <app-table-component
              [tableLabel]="'Overall Account Summary'"
              [headerData]="accountUtils.accountHeaders"
            >
              <tr>
                <td *ngFor="let data of this.overallAccountData.slice(1)">
                  \${{ data }}
                </td>
              </tr>
            </app-table-component>
          </app-tab-component>
          <app-tab-component tabTitle="Graph View">
            <app-account-graphview-component></app-account-graphview-component>
          </app-tab-component>
        </app-tabs-component>
      </ng-container>
    </app-page-template>
  `,
  styles: [
    `
      .scroll {
        height: 20rem;
        overflow-y: auto;
      }

      .row {
        padding-right: 5rem;
      }

      .text-deposit {
        color: var(--fin-green);
      }

      .text-withdraw {
        color: var(--fin-red);
      }

      td {
        border: 0.063rem solid var(--fin-neutral-5);
        text-align: left;
        padding: 0.5rem;
      }

      .filterBox {
        width: 28rem;
        background-color: var(--fin-neutral-6);
        border-radius: 0.625rem;
        padding: 0.14rem;
      }
    `,
  ],
})
export class AccountComponent implements OnInit {
  accountIDnum: number;
  accountIndex: number;

  transactionTableData: Array<any>;
  overallAccountData: Array<number> = [];
  error: string;
  transactionType: string;
  userID: string = sessionStorage.getItem('userId');
  transactionData: any;

  //Reference imported util variables
  accountUtils: any = accountUtils;
  dateUtils: any = dateUtils;
  yearData: any = dateUtils.yearData(Number(new Date().getFullYear()) - 10);

  //Filters
  month: string;
  year: string;
  transactionGroup: string;

  constructor(
    private accountApiService: AccountAPIService,
    private transactionApiService: TransactionAPIService
  ) {}
  postTransactionData() {
    this.accountIDnum = parseInt(window.location.search.substring(4), 10);
    const transactionTypeNum = (
      document.getElementById('select') as HTMLInputElement
    ).value;
    const transactionDate = (
      document.getElementById('date') as HTMLInputElement
    ).value;

    const transactionAmount = (
      document.getElementById('amount') as HTMLInputElement
    ).value;

    const transactionGroup = (
      document.getElementById('group') as HTMLInputElement
    ).value;
    if (transactionTypeNum === '1') {
      this.transactionType = 'Deposit';
    } else if (transactionTypeNum === '2') {
      this.transactionType = 'Withdraw';
    }
    if (
      transactionTypeNum === '0' ||
      transactionDate === '' ||
      transactionAmount === ''
    ) {
      this.error = 'Please fill out all fields';
    } else {
      this.error = undefined;
      const body = JSON.stringify({
        account_id: { account_id: this.accountIDnum },
        transaction_type: this.transactionType,
        transaction_date: transactionDate,
        transaction_amount: transactionAmount,
        transaction_group: transactionGroup,
      });

      this.transactionApiService.postTransactionData(body);
      location.reload();
    }
  }

  deleteTransaction(transaction: any): void {
    if (window.confirm('Are sure you want to delete this item ?')) {
      const body = JSON.stringify({
        account_id: { account_id: transaction.account_id },
        transaction_id: transaction.transaction_id,
      });

      this.transactionApiService.deleteTransaction(body);
      location.reload();
    }
  }

  monthHandler(search: string) {
    this.month = search;
  }

  yearHandler(search: string) {
    this.year = search;
  }

  transactionGroupSearchHandler(search: string) {
    this.transactionGroup = search;
  }

  getTransactionTableData(transaction: any) {
    this.transactionTableData = [
      dateUtils.dateFormatter(transaction.transaction_date),
      transaction.transaction_group || 'None',
      '$' + transaction.transaction_amount,
      '$' + transaction.transaction_subTotal,
    ];

    return this.transactionTableData;
  }

  ngOnInit() {
    this.accountIDnum = parseInt(window.location.search.substring(4), 10);

    this.accountApiService.getAccountDataAsync((d: any) => {
      this.accountIndex = d.findIndex(
        (account) => account.account_id === this.accountIDnum
      );
      this.overallAccountData = [
        d[this.accountIndex].account_Description,
        d[this.accountIndex].account_Starting_Amount,
        d[this.accountIndex].deposit_amount,
        d[this.accountIndex].withdraw_amount,
        d[this.accountIndex].account_Current_Amount,
        d[this.accountIndex].account_Difference,
      ];
    }, this.userID);

    this.transactionApiService.getTransactionDataAsync((d: Transaction) => {
      this.transactionData = d;
    }, this.accountIDnum);
  }
}
