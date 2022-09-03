import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class AccountAPIService {
  accountsResult: any;
  auth: string = 'Basic ' + btoa('srobinson:bl');
  webservicePath: string;

  constructor(private http: HttpClient) {}

  getEnvironmentCommon() {
    this.webservicePath = environment.webservicePath;
    return this.webservicePath;
  }

  postAccountData(body: string) {
    this.webservicePath = this.getEnvironmentCommon();
    const headers = {
      'content-type': 'application/json',
      authorization: this.auth,
    };
    this.http
      .post(this.webservicePath + 'addAccount', body, {
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
    this.webservicePath = this.getEnvironmentCommon();
    const headers = {
      'content-type': 'application/json',
      authorization: this.auth,
    };
    this.http
      .get(this.webservicePath + 'accounts?userID=' + userId, {
        headers,
      })
      .pipe(map((res) => res))
      .subscribe((res) => {
        this.accountsResult = res;
        callback(this.accountsResult);
      });
  }

  deleteAccount(body: string) {
    this.webservicePath = this.getEnvironmentCommon();
    const headers = {
      'content-type': 'application/json',
      authorization: this.auth,
    };
    this.http
      .post(this.webservicePath + 'deleteAccount', body, {
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
}
