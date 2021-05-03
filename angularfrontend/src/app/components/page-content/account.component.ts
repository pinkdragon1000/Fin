import { APIService } from './../api.service';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'account-component',
  template: `
    <page-template
      [pagetitle]="'Account'"
      [pagedirections]="'Click on an account to view and add information'"
    >
      <label>Transaction Type </label>
      <br />
      <select class="select">
        <option value="0">Select your transaction type</option>
        <option value="1">Deposit</option>
        <option value="2">Withdraw</option>
      </select>
      <div class="input" *ngFor="let input of accountFieldData">
        <input-component
          [label]="input.label"
          [placeholder]="input.placeholder"
          [type]="input.type"
          [name]="input.name"
          [min]="input.min"
        ></input-component>
      </div>
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
    `,
  ],
})
export class AccountComponent implements OnInit {
  constructor(private apiService: APIService) {}
  accountData = [
    {
      accountName: 'Account 1',
      accountStartingAmount: 500,
    },
    {
      accountName: 'Account 2',
      accountStartingAmount: 200,
    },
  ];

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
  ngOnInit(): void {}
}
