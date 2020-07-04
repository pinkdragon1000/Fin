import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-accounts-content-component',
  template: `
    <page-template>
      <p>
        Fill out the form to add an account. To view and manage accounts click
        "Manage Accounts" in the navbar.
      </p>
      <input-component
        [label]="'Account Name'"
        [placeholder]="'Type in your account name'"
        [type]="'text'"
        [name]="'name'"
        [required]="'true'"
      ></input-component>

      <input-component
        [label]="'Account Starting Amount'"
        [placeholder]="'Type in your account starting amount'"
        [type]="'number'"
        [name]="'amount'"
        [required]="'true'"
      ></input-component>
      <button class="primary round" onclick="">
        Add Account
      </button>
    </page-template>
  `,
  styles: [``],
})
export class AddAccountsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
