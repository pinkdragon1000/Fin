import { userId } from './../../../environments/environment';
import { APIService } from './../api.service';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-manage-accounts-content-component',
  template: `
    <app-page-template
      [pagetitle]="'Manage Accounts'"
      [pagedirections]="'Click on an account to view and add information'"
    >
      <div *ngIf="accountData">
        <p class="align-right">Account Starting Amount</p>
        <div *ngFor="let account of accountData" class="clickable-view">
          <div *ngIf="account.user_id === userId">
            <app-clickable-list-view
              [name]="account.account_Description"
              [link]="'/account?id='.concat(account.account_id)"
              [amount]="account.account_Starting_Amount.toLocaleString('en-GB')"
            >
            </app-clickable-list-view>
          </div>
        </div>
      </div>

      <div *ngIf="!accountData">
        <app-emptycontent
          emptyHeader="No Accounts Yet"
          emptyPar="Click 'Add Accounts' in the navbar to add an account. "
        ></app-emptycontent>
      </div>
    </app-page-template>
  `,
  styles: [
    `
      .align-right {
        text-align: right;
        margin-right: 5rem;
      }
      .clickable-view {
        margin: 0.625rem;
      }
    `,
  ],
})
export class ManageAccountsComponent implements OnInit {
  accountData: Object;
  userId: any = userId;
  constructor(private apiService: APIService) {}

  ngOnInit(): void {
    this.apiService.getAccountDataAsync((d: Object) => {
      this.accountData = d;
    });
  }
}
