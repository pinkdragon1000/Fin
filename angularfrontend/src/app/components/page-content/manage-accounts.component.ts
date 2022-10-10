import { AccountAPIService } from '../../service/account-api.service';
import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account.models';

@Component({
  selector: 'app-manage-accounts-content-component',
  template: `
    <app-page-template
      [pagetitle]="'Manage Accounts'"
      [pagedirections]="'Click on an account to view and add information'"
    >
      <ng-container content>
        <div *ngIf="accountData?.length !== 0">
          <app-filter-component
            label="Search for an account"
            [(model)]="accountDescription"
            (searchChange)="searchHandler($event)"
          ></app-filter-component>

          <p class="align-right">Account Starting Amount</p>
          <div
            *ngFor="
              let account of accountData | searchFilter: accountDescription
            "
            class="clickable-view"
          >
            <app-clickable-list-view-component
              [name]="account.account_Description"
              [link]="'/account?id='.concat(account.account_id)"
              [amount]="account.account_Starting_Amount.toLocaleString('en-GB')"
            >
            </app-clickable-list-view-component>

            <app-button-component
              [class]="'trash'"
              (click)="deleteAccount(account.account_id)"
            ></app-button-component>
          </div>
        </div>

        <div *ngIf="accountData?.length === 0">
          <app-emptycontent-component
            emptyHeader="No Accounts Yet"
            emptyPar="Click 'Add Accounts' in the navbar to add an account. "
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
    `,
  ],
})
export class ManageAccountsComponent implements OnInit {
  accountData: any;
  userId: string = sessionStorage.getItem('userId');
  accountDescription: string;
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

  searchHandler(search: string) {
    this.accountDescription = search;
  }

  ngOnInit(): void {
    this.accountApiService.getAccountDataAsync((d: Account) => {
      this.accountData = d;
    }, this.userId);
  }
}
