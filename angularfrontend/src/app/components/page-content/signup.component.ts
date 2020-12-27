import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'signup-content-component',
  template: `
    <header-page-template>
      <div class="column login-container">
        <h2>Sign Up</h2>

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
      </div>
    </header-page-template>
  `,
  styles: [
    `
      h2 {
        color: var(--fin-neutral-1);
      }

      .login-container {
        align-items: center;
        margin-top: 5rem;
      }

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
