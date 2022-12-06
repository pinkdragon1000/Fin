import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class TransactionAPIService {
  transactionsResult: any;
  auth: string = 'Basic ' + btoa('srobinson:bl');
  webservicePath: string;

  constructor(private http: HttpClient) {}

  getEnvironmentCommon() {
    this.webservicePath = environment.webservicePath;
    return this.webservicePath;
  }

  getTransactionDataAsync(callback: any, accountID: number) {
    this.webservicePath = this.getEnvironmentCommon();
    this.http
      .get(this.webservicePath + 'transactions?accountID=' + accountID)
      .pipe(map((res) => res))
      .subscribe((res) => {
        this.transactionsResult = res;
        callback(this.transactionsResult);
      });
  }

  deleteTransaction(body: string) {
    this.webservicePath = this.getEnvironmentCommon();
    const headers = {
      'content-type': 'application/json',
      authorization: this.auth,
    };
    this.http
      .post(this.webservicePath + 'deleteTransaction', body, {
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

  postTransactionData(body: string) {
    this.webservicePath = this.getEnvironmentCommon();
    const headers = {
      'content-type': 'application/json',
      authorization: this.auth,
    };
    this.http
      .post(this.webservicePath + 'addTransaction', body, {
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
}
