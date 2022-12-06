import { AccountAPIService } from '../../service/account-api.service';
import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account.models';
import * as addAccountsUtils from './../../utils/add-accounts-utils';

@Component({
  selector: 'app-manage-accounts-content-component',
  template: `
    <app-page-template
      [pagetitle]="'Manage Accounts'"
      [pagedirections]="'Click on an account to view and add information'"
      [buttonlabel]="'Add Account'"
    >
      <ng-container form>
        <app-form-component
          [inputData]="addAccountsUtils.inputData"
          [selectLabelData]="addAccountsUtils.selectLabelData"
          [selectData]="addAccountsUtils.selectData"
          [error]="this.error"
          [label]="'Submit'"
          (click)="postAccountData()"
        ></app-form-component>
      </ng-container>
      <ng-container content>
        <div *ngIf="accountData?.length !== 0">
          <div class="filterBox">
            <app-filter-component
              label="Search for an account"
              [(model)]="accountDescription"
              (searchChange)="searchHandler($event)"
            ></app-filter-component>
          </div>

          <p class="align-right">Account Current Amount</p>
          <div
            *ngFor="
              let account of accountData | searchFilter: accountDescription
            "
            class="clickable-view"
          >
            <app-clickable-list-view-component
              [name]="account.account_Description"
              [link]="'/account?id='.concat(account.account_id)"
              [amount]="account.account_Current_Amount.toLocaleString('en-GB')"
            >
            </app-clickable-list-view-component>

            <app-button-component
              [class]="'trash'"
              [title]="'Delete Account'"
              (click)="deleteAccount(account.account_id)"
            ></app-button-component>
          </div>
        </div>

        <div *ngIf="accountData?.length === 0">
          <app-emptycontent-component
            emptyHeader="No Accounts Yet"
            emptyPar="Click the 'Add Account' button to add an account. "
          ></app-emptycontent-component>
        </div>
      </ng-container>
    </app-page-template>
  `,
  styles: [
    `
      .align-right {
        text-align: right;
        margin-right: 10%;
      }
      .clickable-view {
        margin: 0.625rem;
      }
      .filterBox {
        width: 14rem;
        background-color: var(--fin-neutral-6);
        border-radius: 0.625rem;
        padding: 0.14rem;
      }
    `,
  ],
})
export class ManageAccountsComponent implements OnInit {
  accountData: any;
  userId: string = sessionStorage.getItem('userId');
  accountDescription: string;

  error: string;
  accountType: string;
  //Reference imported util variables
  addAccountsUtils: any = addAccountsUtils;

  constructor(private accountApiService: AccountAPIService) {}
  deleteAccount(accountId): void {
    if (window.confirm('Are sure you want to delete this item ?')) {
      const body = JSON.stringify({
        user_id: { user_id: this.userId },
        account_id: accountId,
      });

      this.accountApiService.deleteAccount(body);
      location.reload();
    }
  }

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
      this.error = undefined;
      const body = JSON.stringify({
        user_id: { user_id: this.userId },
        account_Type: this.accountType,
        account_Starting_Amount: accountStartingAmount,
        account_Description: accountDescription,
      });

      this.accountApiService.postAccountData(body);
      location.reload();
    }
  }

  searchHandler(search: string) {
    this.accountDescription = search;
  }

  ngOnInit(): void {
    this.accountApiService.getAccountDataAsync((d: Account) => {
      this.accountData = d;
    }, this.userId);
  }
}
