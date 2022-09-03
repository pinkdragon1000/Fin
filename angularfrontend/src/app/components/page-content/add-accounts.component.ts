import { Component, OnInit } from '@angular/core';
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
        <div *ngIf="error" [innerHTML]="error" class="error"></div>
        <form>
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
export class AddAccountsComponent implements OnInit {
  error: string;
  startingAmount: any = 0;
  accountDescription: string;
  accountTypeNum: any;
  accountType: string;
  userId: string = sessionStorage.getItem('userId');
  //Reference imported util variables
  addAccountsUtils: any = addAccountsUtils;

  constructor(private accountApiService: AccountAPIService) {}

  postAccountData() {
    this.accountTypeNum = (
      document.getElementById('select') as HTMLInputElement
    ).value;
    if (this.accountTypeNum === '1') {
      this.accountType = 'Checking';
    } else if (this.accountTypeNum === '2') {
      this.accountType = 'Savings';
    }
    this.accountDescription = (
      document.getElementById('description') as HTMLInputElement
    ).value;
    this.startingAmount = (
      document.getElementById('amount') as HTMLInputElement
    ).value;

    if (
      this.accountTypeNum === 0 ||
      this.startingAmount === 0 ||
      this.accountDescription === ''
    ) {
      this.error =
        'Invalid inputs provided.  Please fill out all field inputs.';
    } else {
      const body =
        '{"user_id":{"user_id":' +
        this.userId +
        '}, "account_Type": "' +
        this.accountType +
        '", "account_Starting_Amount": ' +
        this.startingAmount +
        ', "account_Description": "' +
        this.accountDescription +
        '"}';

      this.accountApiService.postAccountData(body);
    }
  }

  ngOnInit(): void {}
}
