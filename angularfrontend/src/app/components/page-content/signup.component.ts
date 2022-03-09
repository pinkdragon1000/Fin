import { Component, OnInit } from '@angular/core';
import { APIService } from './../api.service';
import * as shajs from 'sha.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-content-component',
  template: `
    <app-header-page-template [pagetitle]="'Sign Up'">
      <form>
        <div class="inputs" *ngFor="let input of signupFieldData">
          <app-input-component
            [label]="input.label"
            [placeholder]="input.placeholder"
            [type]="input.type"
            [name]="input.name"
            [id]="input.id"
          ></app-input-component>
        </div>

        <div class="login-button">
          <button type="submit" class="primary round" (click)="postUserData()">
            Sign Up
          </button>
        </div>
      </form>
      <a href="/">Already have an account? Login -> </a>
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
export class SignupComponent implements OnInit {
  fullName: string;
  email: string;
  password: string;
  hashedPassword: string;
  signupFieldData = [
    {
      label: 'Full Name',
      placeholder: 'Type in your full name',
      type: 'fname',
      name: 'fname',
      id: 'fname',
    },
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
  constructor(private apiService: APIService, private router: Router) {}

  postUserData() {
    this.fullName = (
      document.getElementById('fname') as HTMLInputElement
    ).value;
    this.email = (document.getElementById('email') as HTMLInputElement).value;
    this.password = (
      document.getElementById('password') as HTMLInputElement
    ).value;

    if (this.fullName === '' || this.email === '' || this.password === '') {
      console.log('Please fill out all fields');
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

      this.apiService.postUserData(body);
      this.router.navigate(['manageAccounts']);
    }
  }

  ngOnInit(): void {}
}
