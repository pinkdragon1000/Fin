import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'signup-content-component',
  template: `
    <header-page-template [pagetitle]="'Sign Up'">

        <div class="inputs" *ngFor="let input of signupFieldData">
        <input-component
          [label]="input.label"
          [placeholder]="input.placeholder"
          [type]="input.type"
          [name]="input.name"
        ></input-component>
      </div>

        <div class="login-button">
          <button
            class="primary round"
            onclick="location.href='/manageAccounts';"
          >
            Sign Up
          </button>
        </div>
        <a href="/">Already have an account? Login -> </a>
    </header-page-template>
  `,
  styles: [
    `
      .login-button {
        display: flex;
        justify-content: center;
        width: 70%;
      }

      .inputs {
        width: 30%;
      }
    `,
  ],
})
export class SignupComponent implements OnInit {
  constructor() {}


  signupFieldData = [
    {
      label: 'Full Name',
      placeholder: 'Type in your full name',
      type: 'fname',
      name: 'fname',
    },
    {
      label: 'Email',
      placeholder: 'Type in your email',
      type: 'email',
      name: 'email',
    },
    {
      label: 'Password',
      placeholder: 'Type in your password',
      type: 'password',
      name: 'password',
    },
  ];

  ngOnInit(): void {}
}
