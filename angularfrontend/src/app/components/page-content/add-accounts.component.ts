import { Component, OnInit } from '@angular/core';
import { APIService } from './../api.service';
import { userId } from 'src/environments/environment';

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
      <div *ngIf="error" [innerHTML]="error" class="error"></div>
      <form>
        <app-select-component
          [label]="'Account Type (checking/savings)'"
          [selectData]="this.selectData"
        ></app-select-component>

        <app-input-group-component [inputData]="this.inputData">
        </app-input-group-component>

        <app-button-component
          [label]="'Add Account'"
          [class]="'primary'"
          (click)="postAccountData()"
        ></app-button-component>
      </form>
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

  inputData = [
    {
      label: 'Account Description (Example: TD Bank Checking)',
      placeholder: 'Type in your account description',
      type: 'text',
      name: 'description',
      id: 'description',
      min: 0,
    },
    {
      label: 'Account Starting Amount ($)',
      placeholder: 'Type in your account starting amount',
      type: 'number',
      name: 'amount',
      id: 'amount',
      min: 1,
    },
  ];

  selectData = [
    {
      value: '0',
      description: 'Select your account type',
      disabled: true,
    },
    {
      value: '1',
      description: 'Checking',
    },
    {
      value: '2',
      description: 'Savings',
    },
  ];

  constructor(private apiService: APIService) {}

  postAccountData() {
    this.accountTypeNum = (
      document.getElementById('select') as HTMLInputElement
    ).value;
    console.log(this.accountTypeNum);
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
        userId +
        '}, "account_Type": "' +
        this.accountType +
        '", "account_Starting_Amount": ' +
        this.startingAmount +
        ', "account_Description": "' +
        this.accountDescription +
        '", "deposit_amount": 0, "withdraw_amount": 0}';

      console.log(body);

      this.apiService.postAccountData(body);
    }
  }

  ngOnInit(): void {}
}
