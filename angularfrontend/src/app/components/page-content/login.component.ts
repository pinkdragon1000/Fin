import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-login',
  template: `
    <div>
      <div class="row hero">
        <div class="column center">
          <img src="../../assets/logo.svg" rel="icon" alt="" class="logo" />
          <h1 class="fin">Fin</h1>
          <p class="tag-line">Financial Account Management</p>
        </div>
      </div>

      <div class="column login-container">
        <h2>Sign In</h2>

        <div class="inputs">
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
            Sign In
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      h2 {
        color: var(--fin-neutral-1);
      }
      .hero {
        align-items: center;
        background: var(--fin-gradient-1);
        border-radius: 0rem 0rem 2rem 2rem;
        justify-content: center;
      }

      .login-container {
        align-items: center;
        margin-top: 5rem;
      }

      .fin {
        color: var(--fin-white);
        font-family: 'Courgette', cursive;
        font-size: 6rem;
        text-shadow: 0.07rem 0.07rem var(--fin-neutral-1);
      }

      .tag-line {
        color: var(--fin-white);
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

      .center {
        align-items: center;
      }
    `,
  ],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
