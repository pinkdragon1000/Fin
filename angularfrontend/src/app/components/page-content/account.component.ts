import { APIService } from './../api.service';
import { Component, OnInit } from '@angular/core';
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
      <br/>
      <button class="primary round">
        Submit Transaction
      </button>
      </add-transaction-button-component>
      <table>
        <tr>
          <th>Account Starting Amount</th>
          <th>Account Deposits</th>
          <th>Account Withdraws</th>
          <th>Account Current Amount</th>
        </tr>
        <tr>
          <td>{{this.accountData}}  </td>
          <td>50</td>
          <td>20</td>
          <td>{{100+50-20}}</td>
        </tr>
      </table>
    </page-template>
  `,
  styles: [
    `
      .clickable-view {
        margin: 10px;
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

      select {
        border-radius: 20rem;
        font-size: 1rem;
        height: 1.5rem;
        min-width: 15rem;
        width: 100%;
        height: 52px;
        padding: 0rem 1rem;
        border: 1px solid var(--fin-white);
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
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
      }
    `,
  ],
})
export class AccountComponent implements OnInit {
  constructor(private apiService: APIService) {}
  accountData: string;
  accountID: string;
  accountDescription: string;
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
  this.accountID=(parseInt(window.location.search.substring(4))-1).toString()
  this.apiService.getAccountDataAsync((d:Object)=>{this.accountDescription=d[this.accountID].account_Description})

  this.apiService.getAccountDataAsync((d:Object)=>{this.accountData=d[this.accountID].account_Starting_Amount})
  }
}
