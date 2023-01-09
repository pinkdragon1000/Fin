import { Transaction } from './../../models/transaction.models';
import { Component, OnInit } from '@angular/core';
import { TransactionAPIService } from 'src/app/service/transaction-api.service';
import { AccountAPIService } from '../../service/account-api.service';

@Component({
  selector: 'app-account-graphview-component',
  template: `
    <div class="row padding">
      <app-vertical-bar-component
        [colorScheme]="'orangePinkScheme'"
        [plot]="[
          {
            name: 'Account Starting',
            value: this.accountStartingAmount
          },
          {
            name: 'Account Current',
            value: this.accountCurrentAmount
          }
        ]"
        [yLabel]="'Dollars ($)'"
      >
      </app-vertical-bar-component>
      <app-vertical-bar-component
        [colorScheme]="'redGreenScheme'"
        [plot]="[
          {
            name: 'Deposits',
            value: this.accountDeposits
          },
          { name: 'Withdrawals', value: this.accountWithdraws }
        ]"
        [yLabel]="'Dollars ($)'"
      >
      </app-vertical-bar-component>
    </div>
  `,
  styles: [
    `
      .row {
        padding-right: 5rem;
      }

      .padding {
        padding-top: 2rem;
        padding-left: 1rem;
        padding-bottom: 5rem;
      }
    `,
  ],
})
export class AccountGraphViewComponent implements OnInit {
  accountStartingAmount: number = 100;
  accountDeposits: number = 100;
  accountWithdraws: number = 100;
  accountCurrentAmount: number = 100;
  accountDifference: number = 100;
  accountIDnum: number = undefined;
  accountDescription: string = '';
  accountIndex: number;
  userID: string = sessionStorage.getItem('userId');
  transactionData: any = [];

  constructor(
    private accountApiService: AccountAPIService,
    private transactionApiService: TransactionAPIService
  ) {}

  ngOnInit() {
    this.accountIDnum = parseInt(window.location.search.substring(4), 10);

    this.accountApiService.getAccountDataAsync((d: any) => {
      this.accountIndex = d.findIndex(
        (account) => account.account_id === this.accountIDnum
      );
      this.accountDescription = d[this.accountIndex].account_Description;
      this.accountDeposits = d[this.accountIndex].deposit_amount;
      this.accountWithdraws = d[this.accountIndex].withdraw_amount;
      this.accountStartingAmount = d[this.accountIndex].account_Starting_Amount;
      this.accountCurrentAmount = d[this.accountIndex].account_Current_Amount;
      this.accountDifference = d[this.accountIndex].account_Difference;
    }, this.userID);

    this.transactionApiService.getTransactionDataAsync((d: Transaction) => {
      this.transactionData = d;
    }, this.accountIDnum);
  }
}
