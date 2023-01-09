import { Component } from '@angular/core';
import bcrypt from 'bcryptjs';
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
        [label]="'Sign Up'"
        (click)="signUp()"
      ></app-form-component>
      <a href="/">Already have an account? Sign In -> </a>
    </app-header-page-template>
  `,
})
export class SignupComponent {
  error: string;
  public userId: string;

  //Reference imported util variables
  signupUtils: any = signupUtils;

  constructor(private userApiService: UserAPIService, private router: Router) {}

  signUp() {
    const fullName = (document.getElementById('fname') as HTMLInputElement)
      .value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement)
      .value;

    if (fullName === '' || email === '' || password === '') {
      this.error = 'Please fill out all fields';
    } else {
      this.error = undefined;
      const salt = '$2a$04$kyf36qq4HYoe4FliheKwe.';
      var hashedPassword = bcrypt.hashSync(password, salt);

      const body = JSON.stringify({
        fullName,
        email,
        password: hashedPassword,
      });

      this.userApiService.postUserData(body, (response: any) => {
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
