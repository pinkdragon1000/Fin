import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class AccountAPIService {
  accountsResult: any;
  auth: string = 'Basic ' + btoa('srobinson:bl');

  constructor(private http: HttpClient) {}

  postAccountData(body: string) {
    const headers = {
      'content-type': 'application/json',
      authorization: this.auth,
      'XSRF-TOKEN': '123',
    };
    this.http
      .post('http://localhost:8080/fin-accounts.webservice/addAccount', body, {
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
          console.log('Post failed with errors');
        },
        () => {
          console.log('Post Completed');
        }
      );
  }

  getAccountDataAsync(callback: any, userId: string) {
    const headers = {
      'content-type': 'application/json',
      authorization: this.auth,
    };
    this.http
      .get(
        'http://localhost:8080/fin-accounts.webservice/accounts?userID=' +
          userId,
        {
          headers,
        }
      )
      .pipe(map((res) => res))
      .subscribe((res) => {
        this.accountsResult = res;
        callback(this.accountsResult);
      });
  }

  deleteAccount(body: string) {
    const headers = {
      'content-type': 'application/json',
      authorization: this.auth,
      'XSRF-TOKEN': '123',
    };
    this.http
      .post(
        'http://localhost:8080/fin-accounts.webservice/deleteAccount',
        body,
        {
          headers,
          observe: 'response',
        }
      )
      .subscribe(
        (response) => {
          console.log(
            'POST completed sucessfully. The response received ' + response
          );
        },
        (error) => {
          console.log('Post failed with errors');
        },
        () => {
          console.log('Post Completed');
        }
      );
  }
}
