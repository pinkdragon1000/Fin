import { AccountAPIService } from '../../service/account-api.service';
import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account.models';
import { ToastService } from '../../service/toast.service';
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
          (formSubmit)="postAccountData()"
        ></app-form-component>
      </ng-container>
      <ng-container content>
        <div *ngIf="accountData?.length !== 0" class="accounts-layout">
          <div class="filterBox">
            <app-filter-component
              label="Search for an account"
              [(model)]="accountDescription"
              (searchChange)="searchHandler($event)"
            ></app-filter-component>
          </div>

          <div *ngIf="filteredAccounts.length === 0">
            <app-emptycontent-component
              emptyHeader="No Results"
              emptyPar="No accounts match the current filters."
            ></app-emptycontent-component>
          </div>

          <div *ngIf="filteredAccounts.length > 0" class="account-list-header">
            <span>Account Current Amount</span>
          </div>
          <div *ngIf="filteredAccounts.length > 0" class="account-list">
            <div
              *ngFor="let account of filteredAccounts"
              class="clickable-view"
            >
              <app-clickable-list-view-component
                [name]="account.account_Description"
                [link]="'/account?id='.concat(account.account_id)"
                [amount]="account.account_Current_Amount.toLocaleString('en-GB')"
              >
              </app-clickable-list-view-component>

              <app-modal-button-component
                [type]="'account-' + account.account_id"
                [class]="'edit'"
                [pagetitle]="'Edit Account'"
                [title]="'Edit Account'"
              >
                <app-form-component
                  [inputData]="editDataMap[account.account_id]?.inputData"
                  [selectLabelData]="addAccountsUtils.selectLabelData"
                  [selectData]="editDataMap[account.account_id]?.selectData"
                  [error]="this.error"
                  [label]="'Update'"
                  [containsDelete]="true"
                  (formSubmit)="updateAccount(account)"
                  (deletionClick)="deleteAccount(account)"
                ></app-form-component>
              </app-modal-button-component>
            </div>
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
      .accounts-layout {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
      }

      .account-list-header {
        width: calc(100% - 4rem);
        text-align: right;
        color: var(--fin-neutral-1);
        font-size: 0.9375rem;
        margin-top: 0.25rem;
        margin-bottom: -0.25rem;
      }

      .account-list {
        display: flex;
        flex-direction: column;
        gap: 0.625rem;
      }

      .clickable-view {
        display: grid;
        grid-template-columns: minmax(0, 1fr) 3rem;
        align-items: center;
        gap: 0.5rem;
      }

      .clickable-view app-modal-button-component {
        justify-self: end;
      }

      .filterBox {
        display: flex;
        width: 100%;
        box-sizing: border-box;
        background-color: rgba(245, 245, 245, 1);
        border-radius: 0.625rem;
        padding: 0.14rem;
      }

      .filterBox app-filter-component {
        width: min(28rem, 100%);
      }
    `,
  ],
})
export class ManageAccountsComponent implements OnInit {
  accountData: any;
  userId: string = localStorage.getItem('userId');
  accountDescription!: string;

  error!: string;
  accountType!: string;
  addAccountsUtils: any = addAccountsUtils;
  editDataMap: { [id: string]: { inputData: any[]; selectData: any[][] } } = {};

  constructor(private accountApiService: AccountAPIService, private toastService: ToastService) {}

  get filteredAccounts(): any[] {
    if (!this.accountData) {
      return [];
    }

    const search = this.accountDescription?.trim();
    if (!search) {
      return this.accountData;
    }

    const escapedSearch = search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return this.accountData.filter((account) =>
      account.account_Description.search(new RegExp(escapedSearch, 'i')) > -1
    );
  }

  updateAccount(account: any) {
    const modal = document.getElementById(`account-${account.account_id}`);
    const accountTypeNum = (modal?.querySelector('select') as HTMLSelectElement)?.value;
    const accountDescription = (modal?.querySelector('#description') as HTMLInputElement)?.value;
    const accountStartingAmount = (modal?.querySelector('#amount') as HTMLInputElement)?.value;
    const accountStartingDate = (modal?.querySelector('#startingDate') as HTMLInputElement)?.value;

    let accountType: string;
    if (accountTypeNum === '1') accountType = 'Checking';
    else if (accountTypeNum === '2') accountType = 'Savings';
    else accountType = account.account_Type;

    if (!accountDescription || !accountStartingAmount || !accountStartingDate) {
      this.error = 'Please fill out all fields';
      return;
    }

    this.error = '';
    const body = JSON.stringify({
      account_id: account.account_id,
      user_id: { user_id: this.userId },
      account_Type: accountType,
      account_Starting_Amount: accountStartingAmount,
      account_Starting_Date: accountStartingDate,
      account_Description: accountDescription,
    });
    this.accountApiService.updateAccount(body, () => {
      this.toastService.queue('Account updated', 'success');
      location.reload();
    });
  }

  deleteAccount(account: any): void {
    if (window.confirm('Are sure you want to delete this item ?')) {
      const body = JSON.stringify({
        user_id: { user_id: this.userId },
        account_id: account.account_id,
      });

      this.accountApiService.deleteAccount(body, () => {
        this.toastService.queue('Account deleted', 'success');
        location.reload();
      });
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
    const accountStartingDate = (
      document.getElementById('startingDate') as HTMLInputElement
    ).value;

    if (
      accountTypeNum === '0' ||
      accountStartingAmount === '' ||
      accountStartingDate === '' ||
      accountDescription === ''
    ) {
      this.error = 'Please fill out all fields';
    } else {
      this.error = '';
      const body = JSON.stringify({
        user_id: { user_id: this.userId },
        account_Type: this.accountType,
        account_Starting_Amount: accountStartingAmount,
        account_Starting_Date: accountStartingDate,
        account_Description: accountDescription,
      });

      this.accountApiService.postAccountData(body, () => {
        this.toastService.queue('Account added', 'success');
        location.reload();
      });
    }
  }

  searchHandler(search: string) {
    this.accountDescription = search;
  }

  ngOnInit(): void {
    this.accountApiService.getAccountDataAsync((d: Account) => {
      this.accountData = d;
      this.editDataMap = {};
      (this.accountData as any[]).forEach(a => {
        this.editDataMap[a.account_id] = {
          inputData: addAccountsUtils.inputDataFunc(a),
          selectData: addAccountsUtils.selectDataFunc(a),
        };
      });
    }, this.userId);
  }
}
