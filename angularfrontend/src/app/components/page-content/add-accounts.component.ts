import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-accounts-content-component',
  template: `
    <page-template
      [pagetitle]="'Add Accounts'"
      [pagedirections]="
        'Fill out the form to add an account. To view and manage accounts click
    Manage Accounts in the navbar.'
      "
    >
      <div class="inputs">
        <label>Account Type (checking/savings)</label>
        <br />
        <select class="select">
          <option value="0">Select your account type</option>
          <option value="1">Checking</option>
          <option value="2">Savings</option>
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
      </div>
      <button class="primary round" onclick="">Add Account</button>
    </page-template>
  `,
  styles: [
    `
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
        height: 3.25rem;
        padding: 0rem 1rem;
        border: 0.063rem solid var(--fin-white);
        margin: 0.5rem 0;
        background: var(--fin-neutral-6);
        color: var(--fin-neutral-1);
      }
    `,
  ],
})
export class AddAccountsComponent implements OnInit {
  constructor() {}

  accountFieldData = [
    {
      label: 'Account Description (Example: TD Bank Checking)',
      placeholder: 'Type in your account description',
      type: 'text',
      name: 'description',
      min: 0,
    },
    {
      label: 'Account Starting Amount ($)',
      placeholder: 'Type in your account starting amount',
      type: 'number',
      name: 'amount',
      min: 1,
    },
  ];

  ngOnInit(): void {}
}
