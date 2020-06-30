import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'signup-content-component',
  template: `
    <header-page-template>
      <div class="column login-container">
        <h2>Sign Up</h2>

        <div class="inputs">
          <input-component
            [label]="'Full Name'"
            [placeholder]="'Type in your full name'"
            [type]="'fname'"
            [name]="'fname'"
            [required]="'true'"
          ></input-component>

          <input-component
            [label]="'Email'"
            [placeholder]="'Type in your email'"
            [type]="'email'"
            [name]="'email'"
            [required]="'true'"
          ></input-component>

          <input-component
            [label]="'Password'"
            [placeholder]="'Type in your password'"
            [type]="'password'"
            [name]="'password'"
            [required]="'true'"
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

      .error {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: var(--fin-red-transparent);
        width: 60%;
        border-radius: 1rem;
        margin-top: 1rem;
        padding: 1rem;
      }

      .error-text {
        font-size: 0.875rem;
        color: var(--fin-red);
      }

      .error-icon {
        cursor: pointer;
      }

      .hidden {
        display: none;
      }

      .login-content {
        width: 40vw;
      }

      .required .input-label:after {
        content: '*';
        color: var(--fin-red);
        margin-left: 0.125rem;
      }

      .focused {
        box-shadow: 0 0 5px var(--fin-blue-1);
      }

      .short {
        width: 70%;
      }
    `,
  ],
})
export class SignupComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
