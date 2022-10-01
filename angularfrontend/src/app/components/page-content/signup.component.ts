import { Component, OnInit } from '@angular/core';
import * as shajs from 'sha.js';
import { Router } from '@angular/router';
import { UserAPIService } from '../../service/user-api.service';
import * as signupUtils from '../../utils/signup-signin-utils';

@Component({
  selector: 'app-signup-content-component',
  template: `
    <app-header-page-template [pagetitle]="'Sign Up'">
      <app-form-component
        [inputData]="signupUtils.inputData"
        [error]="this.error"
        [formName]="'signUp'"
        [label]="'Sign Up'"
        (click)="postUserData()"
      ></app-form-component>
      <a href="/">Already have an account? Sign In -> </a>
    </app-header-page-template>
  `,
})
export class SignupComponent {
  fullName: string;
  email: string;
  error: string;
  password: string;
  hashedPassword: string;
  public userId: string;

  //Reference imported util variables
  signupUtils: any = signupUtils;

  constructor(private userApiService: UserAPIService, private router: Router) {}

  postUserData() {
    this.fullName = (
      document.getElementById('fname') as HTMLInputElement
    ).value;
    this.email = (document.getElementById('email') as HTMLInputElement).value;
    this.password = (
      document.getElementById('password') as HTMLInputElement
    ).value;

    if (this.fullName === '' || this.email === '' || this.password === '') {
      this.error = 'Please fill out all fields';
    } else {
      this.error = undefined;
      this.hashedPassword = shajs('sha256').update(this.password).digest('hex');

      const body = JSON.stringify({
        fullName: this.fullName,
        email: this.email,
        password: this.hashedPassword,
      });

      this.userApiService.postUserData(body, (response) => {
        if (response === 'Post failed with errors') {
          this.error = 'User was not created.  Please try again';
        } else {
          this.userId = response.user_id;
          sessionStorage.setItem('userId', this.userId);
          this.router.navigate(['manageAccounts']);
        }
      });
    }
  }
}
