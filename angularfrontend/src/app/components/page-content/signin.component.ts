import { Component } from '@angular/core';
import { UserAPIService } from '../../service/user-api.service';
import * as shajs from 'sha.js';
import * as signinUtils from '../../utils/signup-signin-utils';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-content-component',
  template: `
    <app-header-page-template [pagetitle]="'Sign In'">
      <app-form-component
        [inputData]="signinUtils.inputData.slice(1)"
        [error]="this.error"
        [formName]="'signIn'"
        [label]="'Sign In'"
        (click)="signIn()"
      ></app-form-component>
      <a href="/signup">Don't have an account? Sign Up -> </a>
    </app-header-page-template>
  `,
})
export class SigninComponent {
  email: string;
  password: string;
  error: string;
  response: any;
  hashedPassword: string;
  public userId: string;
  public formGroup: FormGroup;

  signinUtils: any = signinUtils;

  constructor(private userApiService: UserAPIService) {}

  signIn() {
    console.log('BLAH');
    this.email = (document.getElementById('email') as HTMLInputElement).value;
    this.password = (
      document.getElementById('password') as HTMLInputElement
    ).value;

    if (this.email === '' || this.password === '') {
      this.error = 'Please fill out all fields';
    } else {
      this.hashedPassword = shajs('sha256').update(this.password).digest('hex');

      const body =
        '{"email": "' +
        this.email +
        '", "password": "' +
        this.hashedPassword +
        '"}';

      this.userApiService.postValidateUser(body, (response) => {
        if (
          response === 'Email and password failed validation.' ||
          response === "Email doesn't exist.  Please signup" ||
          response === undefined
        ) {
          this.error = response;
        } else {
          location.href = '/manageAccounts';
          this.userId = response.split('as ').pop();
          sessionStorage.setItem('userId', this.userId);
        }
      });
    }
  }
}
