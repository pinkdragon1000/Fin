import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class UserAPIService {
  userResult: any;
  authResult: string;
  auth: string = 'Basic ' + btoa('srobinson:bl');
  webservicePath: string;

  constructor(private http: HttpClient) {}

  getEnvironmentCommon() {
    if (isDevMode) {
      console.log('dev');
      this.webservicePath = environment.webservicePath;
    } else {
      console.log('prod');
      this.webservicePath = environment.webservicePath;
    }
    return this.webservicePath;
  }

  getUserData(callback: any, userId: string) {
    const headers = {
      'content-type': 'application/json',
      authorization: this.auth,
    };
    this.http
      .get(this.webservicePath + 'users?userID=' + userId, {
        headers,
      })
      .pipe(map((res) => res))
      .subscribe((res) => {
        this.userResult = res;
        callback(this.userResult);
      });
  }

  postUserData(body: string) {
    this.webservicePath = this.getEnvironmentCommon();
    const headers = {
      'content-type': 'application/json',
      authorization: this.auth,
      'XSRF-TOKEN': '123',
      'X-CSRF-TOKEN': '123',
    };
    this.http
      .post(this.webservicePath + 'addUser', body, {
        headers,
        observe: 'response',
      })
      .subscribe(
        (response) => {
          console.log(
            'POST completed sucessfully. The response received ' + response
          );
        },
        (error) => {
          console.log('Post failed with the errors');
        },
        () => {
          console.log('Post Completed');
        }
      );
  }

  postValidateUser(body: string, callback: any) {
    this.webservicePath = this.getEnvironmentCommon();
    const headers = {
      'content-type': 'application/json',
      authorization: this.auth,
      'XSRF-TOKEN': '123',
    };
    this.http
      .post(this.webservicePath + 'validateUser', body, {
        headers,
        observe: 'response',
      })
      .pipe(map((res) => res))
      .subscribe((res) => {
        this.authResult = res['body'][0];
        callback(this.authResult);
      });
  }
}
