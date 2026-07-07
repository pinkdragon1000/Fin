import { Transaction } from './../../models/transaction.models';
import { Component, OnInit } from '@angular/core';
import { TransactionAPIService } from 'src/app/service/transaction-api.service';
import { AccountAPIService } from '../../service/account-api.service';

@Component({
  selector: 'app-account-graphview-component',
  template: `
    <div class="padding">
      <div class="row">
        <div class="chart-block">
          <p class="chart-label">Account Balance</p>
          <app-vertical-bar-component
            [colorScheme]="'orangePinkScheme'"
            [plot]="[
              { name: 'Starting', value: this.accountStartingAmount },
              { name: 'Current', value: this.accountCurrentAmount }
            ]"
            [yLabel]="'Dollars ($)'"
          ></app-vertical-bar-component>
        </div>
        <div class="chart-block" *ngIf="spendingByGroup.length > 0">
          <p class="chart-label">Spending by Group</p>
          <app-pie-chart-component
            [plot]="spendingByGroup"
          ></app-pie-chart-component>
        </div>
      </div>
      <div class="row" *ngIf="balanceSeries[0].series.length > 0">
        <div class="chart-block wide">
          <p class="chart-label">Running Balance</p>
          <app-line-chart-component
            [colorScheme]="'orangePinkScheme'"
            [plot]="balanceSeries"
            [xLabel]="'Date'"
            [yLabel]="'Balance ($)'"
          ></app-line-chart-component>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .padding {
        padding: 1.5rem 1rem 3rem;
      }
      .row {
        display: flex;
        flex-wrap: wrap;
        gap: 1.5rem;
        margin-bottom: 1.5rem;
      }
      .chart-block {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .chart-block.wide {
        width: 100%;
        align-items: flex-start;
      }
      .chart-label {
        font-size: 0.8125rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: var(--fin-neutral-2);
        margin-bottom: 0.5rem;
      }
    `,
  ],
})
export class AccountGraphViewComponent implements OnInit {
  accountStartingAmount: number = 0;
  accountCurrentAmount: number = 0;
  accountID: string = undefined;
  accountIndex: number;
  userID: string = localStorage.getItem('userId');
  transactionData: any[] = [];

  constructor(
    private accountApiService: AccountAPIService,
    private transactionApiService: TransactionAPIService
  ) {}

  get spendingByGroup(): { name: string; value: number }[] {
    const groups: { [key: string]: number } = {};
    this.transactionData
      .filter((t) => t.transaction_type === 'Withdraw')
      .forEach((t) => {
        const group = t.transaction_group || 'None';
        groups[group] = (groups[group] || 0) + Number(t.transaction_amount);
      });
    return Object.entries(groups).map(([name, value]) => ({ name, value }));
  }

  get balanceSeries(): { name: string; series: { name: Date; value: number }[] }[] {
    const series = this.transactionData
      .slice()
      .sort(
        (a, b) =>
          new Date(a.transaction_date).getTime() -
          new Date(b.transaction_date).getTime()
      )
      .map((t) => ({
        name: new Date(t.transaction_date),
        value: Number(t.transaction_subTotal),
      }));
    return [{ name: 'Balance', series }];
  }

  ngOnInit() {
    this.accountID = new URLSearchParams(window.location.search).get('id');

    this.accountApiService.getAccountDataAsync((d: any) => {
      this.accountIndex = d.findIndex(
        (account) => account.account_id === this.accountID
      );
      this.accountStartingAmount = d[this.accountIndex].account_Starting_Amount;
      this.accountCurrentAmount = d[this.accountIndex].account_Current_Amount;
    }, this.userID);

    this.transactionApiService.getTransactionDataAsync((d: Transaction) => {
      this.transactionData = d as any;
    }, this.accountID);
  }
}
