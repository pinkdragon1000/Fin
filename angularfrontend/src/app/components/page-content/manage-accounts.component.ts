import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-accounts',
  template: `
    <app-pagetemplate>
      <div class="acc">
        <p>Click on an account to view and add information</p>
        <button
          class="tertiary round"
          onclick="location.href='/manageAccounts';"
        >
          Add Account
        </button>
      </div>
      <app-emptycontent
        emptyHeader="No Accounts Yet"
        emptyPar="Click the button 'Add Accounts' to add an account. "
      ></app-emptycontent>
    </app-pagetemplate>
  `,
  styles: [
    `
      .acc {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    `,
  ],
})
export class ManageAccountsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
