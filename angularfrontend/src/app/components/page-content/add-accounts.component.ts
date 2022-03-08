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
        <div class="inputs">
          <label>Account Type (checking/savings)</label>
          <br />
          <select class="select" id="select">
            <option value="0">Select your account type</option>
            <option value="1">Checking</option>
            <option value="2">Savings</option>
          </select>
          <div class="input" *ngFor="let input of accountFieldData">
            <app-input-component
              [label]="input.label"
              [placeholder]="input.placeholder"
              [type]="input.type"
              [name]="input.name"
              [min]="input.min"
              [id]="input.id"
            ></app-input-component>
          </div>
        </div>
        <button type="submit" class="primary round" (click)="postAccountData()">
          Add Account
        </button>
      </form>
    </app-page-template>
  `,
  styles: [
    `
      .inputs {
        align-items: center;
      }
      .input {
        width: 50%;
      }
      label {
        color: var(--fin-neutral-1);
      }
      .select {
        width: 52%;
      }

      select {
        border-radius: 20rem;
        font-size: 1rem;
        height: 1.5rem;
        min-width: 15rem;
        width: 100%;
        height: 3.25rem;
        padding: 0rem 1rem;
        border: 0.063rem solid var(--fin-white);
        margin: 0.5rem 0;
        background: var(--fin-neutral-6);
        color: var(--fin-neutral-1);
      }
    `,
  ],
})
export class AddAccountsComponent implements OnInit {
  error: string;
  startingAmount: any = 0;
  accountDescription: string;
  accountTypeNum: any;
  accountType: string;

  accountFieldData = [
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

  constructor(private apiService: APIService) {}

  postAccountData() {
    this.accountTypeNum = (
      document.getElementById('select') as HTMLInputElement
    ).value;
    console.log(this.accountTypeNum);
    if (this.accountTypeNum === 1) {
      this.accountType = 'Checking';
    } else if (this.accountTypeNum === 2) {
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
