import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class UserAPIService {
  userResult: any;
  authResult: string;
  auth: string = 'Basic ' + btoa('srobinson:bl');

  constructor(private http: HttpClient) {}

  getUserData(callback: any, userId: string) {
    const headers = {
      'content-type': 'application/json',
      authorization: this.auth,
    };
    this.http
      .get(
        'http://localhost:8080/fin-accounts.webservice/users?userID=' + userId,
        {
          headers,
        }
      )
      .pipe(map((res) => res))
      .subscribe((res) => {
        this.userResult = res;
        callback(this.userResult);
      });
  }

  postUserData(body: string) {
    const headers = {
      'content-type': 'application/json',
      authorization: this.auth,
      'XSRF-TOKEN': '123',
      'X-CSRF-TOKEN': '123',
    };
    this.http
      .post('http://localhost:8080/fin-accounts.webservice/addUser', body, {
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
    const headers = {
      'content-type': 'application/json',
      authorization: this.auth,
      'XSRF-TOKEN': '123',
    };
    this.http
      .post(
        'http://localhost:8080/fin-accounts.webservice/validateUser',
        body,
        {
          headers,
          observe: 'response',
        }
      )
      .pipe(map((res) => res))
      .subscribe((res) => {
        this.authResult = res['body'][0];
        callback(this.authResult);
      });
  }
}
