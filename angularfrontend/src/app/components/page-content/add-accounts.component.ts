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
    `,
  ],
})
export class AddAccountsComponent implements OnInit {
  constructor() {}

  accountFieldData = [
    {
      label: 'Account Type (checking/savings)',
      placeholder: 'Type in your account type',
      type: 'text',
      name: 'name',
    },
    {
      label: 'Account Description (Example: TD Bank Checking)',
      placeholder: 'Type in your account description',
      type: 'text',
      name: 'description',
    },
    {
      label: 'Account Starting Amount ($)',
      placeholder: 'Type in your account starting amount',
      type: 'number',
      name: 'amount',
      min: 0,
    },
  ];

  ngOnInit(): void {}
}
