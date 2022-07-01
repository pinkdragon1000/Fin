import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';

@Component({
  selector: 'app-login-content-component',
  template: `
    <app-header-page-template class="signin" [pagetitle]="'Sign In'">
      <div *ngIf="error" [innerHTML]="error" class="error"></div>

      <app-input-group-component [inputData]="this.inputData">
      </app-input-group-component>

      <div class="login-button">
        <app-button-component
          [label]="'Sign Up'"
          [class]="'primary'"
          (click)="signIn()"
        ></app-button-component>
      </div>
      <a href="/signup">Don't have an account? Signup -> </a>
    </app-header-page-template>
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
export class SigninComponent implements OnInit {
  email: string;
  password: string;
  error: string;
  response: any;
  user: string;
  inputData = [
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
      password: 'blah',
    },
  ];
  constructor(private apiService: APIService) {}

  ngOnInit(): void {}

  signIn() {
    this.email = (document.getElementById('email') as HTMLInputElement).value;
    this.password = (
      document.getElementById('password') as HTMLInputElement
    ).value;

    if (this.email === '' || this.password === '') {
      console.log('Please fill out all fields');
    } else {
      const body =
        '{"email": "' + this.email + '", "password": "' + this.password + '"}';

      console.log(body);
      this.response = this.apiService.postValidateUser(body);

      console.log(this.response);
      if (!this.response.includes('error') || this.response !== undefined) {
        console.log('yay');
        location.href = '/manageAccounts';
      } else {
        console.log("can't authenticate");
        location.href = '/';
      }
    }

    /*
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
      */
  }
}
