import { Component } from '@angular/core';
import { AccountAPIService } from '../../service/account-api.service';
import * as addAccountsUtils from './../../utils/add-accounts-utils';

@Component({
  selector: 'app-add-accounts-content-component',
  template: `
    <app-page-template
      [pagetitle]="'Add Accounts'"
      [pagedirections]="
        'Fill out the form to add an account. To view and manage accounts click
    Manage Accounts in the navbar.'
      "
    >
      <div content>
        <form>
          <div *ngIf="error" [innerHTML]="error" class="error"></div>
          <app-input-select-group-component
            [inputData]="addAccountsUtils.inputData"
            [selectLabelData]="addAccountsUtils.selectLabelData"
            [selectData]="addAccountsUtils.selectData"
          >
          </app-input-select-group-component>

          <app-button-component
            [label]="'Add Account'"
            [class]="'primary'"
            (click)="postAccountData()"
          ></app-button-component>
        </form>
      </div>
    </app-page-template>
  `,
  styles: [``],
})
export class AddAccountsComponent {
  error: string;
  accountType: string;
  userId: string = sessionStorage.getItem('userId');
  //Reference imported util variables
  addAccountsUtils: any = addAccountsUtils;

  constructor(private accountApiService: AccountAPIService) {}

  postAccountData() {
    const accountTypeNum = (
      document.getElementById('select') as HTMLInputElement
    ).value;
    if (accountTypeNum === '1') {
      this.accountType = 'Checking';
    } else if (accountTypeNum === '2') {
      this.accountType = 'Savings';
    }
    const accountDescription = (
      document.getElementById('description') as HTMLInputElement
    ).value;
    const accountStartingAmount = (
      document.getElementById('amount') as HTMLInputElement
    ).value;

    if (
      accountTypeNum === '0' ||
      accountStartingAmount === '' ||
      accountDescription === ''
    ) {
      this.error = 'Please fill out all fields';
    } else {
      const body =
        '{"user_id":{"user_id":' +
        this.userId +
        '}, "account_Type": "' +
        this.accountType +
        '", "account_Starting_Amount": ' +
        accountStartingAmount +
        ', "account_Description": "' +
        accountDescription +
        '"}';

      this.accountApiService.postAccountData(body);
    }
  }
}
