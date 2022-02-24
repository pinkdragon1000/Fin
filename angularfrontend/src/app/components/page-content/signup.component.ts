import { Component, OnInit } from '@angular/core';
import { APIService } from './../api.service';
import * as shajs from 'sha.js';

@Component({
  selector: 'signup-content-component',
  template: `
    <header-page-template [pagetitle]="'Sign Up'">
      <form>
        <div class="inputs" *ngFor="let input of signupFieldData">
          <input-component
            [label]="input.label"
            [placeholder]="input.placeholder"
            [type]="input.type"
            [name]="input.name"
            [id]="input.id"
          ></input-component>
        </div>

        <div class="login-button">
          <button type="submit" class="primary round" (click)="postUserData()">
            Sign Up
          </button>
        </div>
      </form>
      <a href="/">Already have an account? Login -> </a>
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
export class SignupComponent implements OnInit {
  constructor(private apiService: APIService) {}
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

  postUserData() {
    this.fullName = (<HTMLInputElement>document.getElementById('fname')).value;
    this.email = (<HTMLInputElement>document.getElementById('email')).value;
    this.password = (<HTMLInputElement>(
      document.getElementById('password')
    )).value;

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
    }
  }

  ngOnInit(): void {}
}
