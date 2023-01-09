import { Component } from '@angular/core';
import { UserAPIService } from '../../service/user-api.service';
import bcrypt from 'bcryptjs';
import * as signinUtils from '../../utils/signup-signin-utils';

@Component({
  selector: 'app-login-content-component',
  template: `
    <app-header-page-template [pagetitle]="'Sign In'">
      <app-form-component
        [inputData]="signinUtils.inputData.slice(1)"
        [error]="this.error"
        [label]="'Sign In'"
        (click)="signIn()"
      ></app-form-component>
      <a href="/signup">Don't have an account? Sign Up -> </a>
    </app-header-page-template>
  `,
})
export class SigninComponent {
  error: string;
  public userId: string;

  signinUtils: any = signinUtils;

  constructor(private userApiService: UserAPIService) {}

  signIn() {
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement)
      .value;

    if (email === '' || password === '') {
      this.error = 'Please fill out all fields';
    } else {
      this.error = undefined;
      const salt = '$2a$04$kyf36qq4HYoe4FliheKwe.';
      const hashedPassword = bcrypt.hashSync(password, salt);

      const body = JSON.stringify({
        email,
        password: hashedPassword,
      });

      this.userApiService.postValidateUser(body, (response: any) => {
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
