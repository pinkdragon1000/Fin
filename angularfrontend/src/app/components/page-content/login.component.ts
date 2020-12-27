import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'login-content-component',
  template: `
    <header-page-template>
      <div class="column login-container">
        <h2>Sign In</h2>

        <div class="inputs" *ngFor="let input of inputFieldData">
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
            onclick="location.href='/manageAccounts';">
            Sign In
          </button>
        </div>
        <a href="/signup">Don't have an account? Signup -> </a>
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
export class LoginComponent implements OnInit {
  constructor() {}
  inputFieldData = [
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
