import { userId } from './../../../environments/environment';
import { APIService } from './../api.service';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'manage-accounts-content-component',
  template: `
    <page-template
      [pagetitle]="'Manage Accounts'"
      [pagedirections]="'Click on an account to view and add information'"
    >
      <div *ngIf="accountData">
        <p class="align-right">Account Current Amount</p>
        <div *ngFor="let account of accountData" class="clickable-view">
          <div *ngIf="account.user_id === userId">
            <clickable-list-view
              [name]="account.account_Description"
              [link]="'/account?id='.concat(account.account_id)"
              [amount]="account.account_Starting_Amount.toLocaleString('en-GB')"
            >
            </clickable-list-view>
          </div>
        </div>
      </div>

      <div *ngIf="!accountData">
        <app-emptycontent
          emptyHeader="No Accounts Yet"
          emptyPar="Click 'Add Accounts' in the navbar to add an account. "
        ></app-emptycontent>
      </div>
    </page-template>
  `,
  styles: [
    `
      .align-right {
        text-align: right;
        margin-right: 10rem;
      }
      .clickable-view {
        margin: 0.625rem;
      }
    `,
  ],
})
export class ManageAccountsComponent implements OnInit {
  constructor(private apiService: APIService) {}
  accountData: Object;
  userId: any = userId;

  ngOnInit(): void {
    this.apiService.getAccountDataAsync((d: Object) => {
      this.accountData = d;
    });
  }
}
