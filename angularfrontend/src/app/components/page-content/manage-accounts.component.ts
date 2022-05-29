import { userId } from './../../../environments/environment';
import { APIService } from './../api.service';
import { Component, OnInit, Input } from '@angular/core';
import { Account } from 'src/app/models/account.models';
@Component({
  selector: 'app-manage-accounts-content-component',
  template: `
    <app-page-template
      [pagetitle]="'Manage Accounts'"
      [pagedirections]="'Click on an account to view and add information'"
    >
      <div *ngIf="accountData?.length !==0">
        <p class="align-right">Account Starting Amount</p>
        <div *ngFor="let account of accountData" class="clickable-view">
            <app-clickable-list-view
              [name]="account.account_Description"
              [link]="'/account?id='.concat(account.account_id)"
              [amount]="account.account_Starting_Amount.toLocaleString('en-GB')"
            >
            </app-clickable-list-view>
            <button type="submit" class="trash" (click)="deleteAccount(account.account_id)">
            </button>

        </div>
      </div>

      <div *ngIf="accountData?.length === 0 ">
        <app-emptycontent
          emptyHeader="No Accounts Yet"
          emptyPar="Click 'Add Accounts' in the navbar to add an account. "
        ></app-emptycontent>
      </div>
    </app-page-template>
  `,
  styles: [
    `
    .trash {
      background: url("../../../assets/trash.svg"); 
      background-repeat: no-repeat;
      height: 3rem;
      min-width: 2.5rem;
      float: right;
      margin-top:-4.5rem;
    }

      .align-right {
        text-align: right;
        margin-right: 9rem;
      }
      .clickable-view {
        margin: 0.625rem;
      }
    `,
  ],
})
export class ManageAccountsComponent implements OnInit {
  accountData: any;
  userId: any = userId;
  constructor(private apiService: APIService) {}

  deleteAccount(accountId): void {
    if(window.confirm('Are sure you want to delete this item ?')){
      console.log(accountId);
     }
  }

  ngOnInit(): void {
    this.apiService.getAccountDataAsync((d: Account) => {
      this.accountData = d;
    });
  }
}
