import { Component } from '@angular/core';
import * as shajs from 'sha.js';
import { Router } from '@angular/router';
import { UserAPIService } from '../../service/user-api.service';
import * as signupUtils from '../../utils/signup-signin-utils';

@Component({
  selector: 'app-signup-content-component',
  template: `
    <app-header-page-template [pagetitle]="'Sign Up'">
      <div>
        <div *ngIf="error" [innerHTML]="error" class="error"></div>

        <app-input-group-component [inputData]="signupUtils.inputData">
        </app-input-group-component>

        <div class="login-button">
          <app-button-component
            [label]="'Sign Up'"
            [class]="'primary'"
            (click)="postUserData()"
          ></app-button-component>
        </div>
      </div>
      <a href="/">Already have an account? Login -> </a>
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
      this.hashedPassword = shajs('sha256').update(this.password).digest('hex');

      const body =
        '{"fullName": "' +
        this.fullName +
        '", "email": "' +
        this.email +
        '", "password":"' +
        this.hashedPassword +
        '"}';

      this.userApiService.postUserData(body, (response) => {
        if (response === 'Post failed with errors') {
          this.error = 'User was not created.  Please try again';
        } else {
          this.userId = response['user_id'];
          sessionStorage.setItem('userId', this.userId);
          this.router.navigate(['manageAccounts']);
        }
      });
    }
  }
}
