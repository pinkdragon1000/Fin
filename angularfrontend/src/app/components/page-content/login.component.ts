import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { APIService } from './../api.service';

@Component({
  selector: 'login-content-component',
  template: `
    <header-page-template class="signin" [pagetitle]="'Sign In'">
      <div *ngIf="error" [innerHTML]="error" class="error"></div>
      <div class="inputs" *ngFor="let input of inputFieldData">
        <input-component
          [label]="input.label"
          [placeholder]="input.placeholder"
          [id]="input.id"
          [type]="input.type"
          [name]="input.name"
        ></input-component>
      </div>

      <div class="login-button">
        <button type="submit" class="primary round" (click)="signIn()">
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
  email: Object;
  error: string;
  inputFieldData = [
    {
      label: 'Email',
      placeholder: 'Type in your email',
      type: 'email',
      name: 'email',
      id: 'email',
    },
    {
      label: 'Password',
      placeholder: 'Type in your password',
      type: 'password',
      name: 'password',
      id: 'password',
    },
  ];

  loginData = [
    {
      password: 'B!ah123',
    },
  ];

  ngOnInit(): void {}

  signIn() {
    this.apiService.getUserData((d: Object) => {
      this.email = d[0].email;
    });
    console.log(this.email);
    if (
      this.email ==
        (<HTMLInputElement>document.getElementById('email')).value &&
      this.loginData[0].password ==
        (<HTMLInputElement>document.getElementById('password')).value
    ) {
      console.log('Input matches account sign-in info!');
      location.href = '/manageAccounts';
    } else if (
      this.email ==
        (<HTMLInputElement>document.getElementById('email')).value &&
      this.loginData[0].password !=
        (<HTMLInputElement>document.getElementById('password')).value
    ) {
      this.error = 'Email exists but password is incorrect';
      console.log('Email exists but password is incorrect');
    } else if (
      (<HTMLInputElement>document.getElementById('email')).value == '' &&
      (<HTMLInputElement>document.getElementById('password')).value == ''
    ) {
      this.error = 'Please enter in a valid username and password';
    } else if (
      this.email != (<HTMLInputElement>document.getElementById('email')).value
    ) {
      this.error = "Email doesn't exist.  Please signup first";
      console.log("Email doesn't exist.  Please signup first");
    }
  }
}
