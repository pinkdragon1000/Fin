import { Component, OnInit } from '@angular/core';
import { UserAPIService } from '../../service/user-api.service';
import * as shajs from 'sha.js';
import * as signinUtils from '../../utils/signup-signin-utils';

@Component({
  selector: 'app-login-content-component',
  template: `
    <app-header-page-template class="signin" [pagetitle]="'Sign In'">
      <div *ngIf="error" [innerHTML]="error" class="error"></div>

      <app-input-group-component [inputData]="signinUtils.inputData.slice(1)">
      </app-input-group-component>

      <div class="login-button">
        <app-button-component
          [label]="'Sign In'"
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
      }
    `,
  ],
})
export class SigninComponent implements OnInit {
  email: string;
  password: string;
  error: string;
  response: any;
  hashedPassword: string;
  public userId: string;

  signinUtils: any = signinUtils;

  constructor(private userApiService: UserAPIService) {}

  ngOnInit(): void {}

  signIn() {
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
          response == undefined
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
