import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-accounts-content-component',
  template: `
    <page-template>
      <p>
        Fill out the form to add an account. To view and manage accounts click
        "Manage Accounts" in the navbar.
      </p>
    </page-template>
  `,
  styles: [``],
})
export class AddAccountsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
