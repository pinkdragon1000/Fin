import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class UserAPIService {
  userResult: any;
  authResult: string;
  addUserResult: any;
  auth: string = 'Basic ' + btoa('srobinson:bl');
  webservicePath: string;

  constructor(private http: HttpClient) {}

  getEnvironmentCommon() {
    this.webservicePath = environment.webservicePath;
    return this.webservicePath;
  }

  getUserData(callback: any, userId: string) {
    this.webservicePath = this.getEnvironmentCommon();
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

  postUserData(body: string, callback: any) {
    this.webservicePath = this.getEnvironmentCommon();
    const headers = {
      'content-type': 'application/json',
      authorization: this.auth,
    };
    this.http
      .post(this.webservicePath + 'addUser', body, {
        headers,
        observe: 'response',
      })
      .pipe(map((res) => res))
      .subscribe(
        (res) => {
          console.log(
            'POST completed sucessfully. The response received ' + res
          );
          this.addUserResult = res.body;
          callback(this.addUserResult);
        },
        (error) => {
          this.addUserResult = 'Post failed with errors';
          callback(this.addUserResult);
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
    };
    this.http
      .post(this.webservicePath + 'validateUser', body, {
        headers,
        observe: 'response',
      })
      .pipe(map((res) => res))
      .subscribe((res) => {
        this.authResult = res.body[0];
        callback(this.authResult);
      });
  }
}
