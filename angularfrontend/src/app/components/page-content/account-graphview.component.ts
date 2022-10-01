import { Component, OnInit } from '@angular/core';
import { AccountAPIService } from '../../service/account-api.service';

@Component({
  selector: 'app-account-graphview-component',
  template: `
    <div class="row padding">
      <app-vertical-bar-component
        [colorScheme]="'orangePink'"
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
        [colorScheme]="'redGreen'"
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
  accountStartingAmount: number;
  accountDeposits: number;
  accountWithdraws: number;
  accountCurrentAmount: number;
  accountDifference: number;
  accountIDnum: number;
  accountDescription: string;
  accountIndex: number;
  userID: string = sessionStorage.getItem('userId');

  constructor(private accountApiService: AccountAPIService) {}

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
  }
}
