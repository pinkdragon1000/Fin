import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-accounts-content-component',
  template: `
    <page-template [pagedirections]="'Fill out the form to add an account. To view and manage accounts click
    Manage Accounts in the navbar.'" >

      <div class="account-fields" *ngFor="let input of accountFieldData">
      <input-component
        [label]="input.label"
        [placeholder]="input.placeholder"
        [type]="input.type"
        [name]="input.name"
      ></input-component>
      </div>
      <button class="primary round" onclick="">
        Add Account
      </button>
    </page-template>

  `,
  styles: [`
  .account-fields {
    width: 30%;
  }
  `],
})
export class AddAccountsComponent implements OnInit {
  constructor() {}


  accountFieldData = [
    {
      label: 'Account Name',
      placeholder: 'Type in your account name',
      type: 'text',
      name: 'name',
    },
    {
      label: 'Account Starting Amount',
      placeholder: 'Type in your account starting amount',
      type: 'number',
      name: 'amount',
    },
  ];

  ngOnInit(): void {}
}
