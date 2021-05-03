import { Component, OnInit } from '@angular/core';
import { APIService } from './../api.service';
@Component({
  selector: 'login-content-component',
  template: `
    <header-page-template class="signin" [pagetitle]="'Sign In'">
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
          onclick="location.href='/manageAccounts';"
        >
          Sign In
        </button>
      </div>
      <a href="/signup">Don't have an account? Signup -> </a>
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
export class LoginComponent implements OnInit {
  constructor(private apiService: APIService) {}
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
