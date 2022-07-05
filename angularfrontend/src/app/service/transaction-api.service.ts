import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class TransactionAPIService {
  transactionsResult: any;
  auth: string = 'Basic ' + btoa('srobinson:bl');

  constructor(private http: HttpClient) {}

  getTransactionDataAsync(callback: any, accountID: number) {
    this.http
      .get(
        'http://localhost:8080/fin-accounts.webservice/transactions?accountID=' +
          accountID
      )
      .pipe(map((res) => res))
      .subscribe((res) => {
        this.transactionsResult = res;
        callback(this.transactionsResult);
        console.log(this.transactionsResult);
      });
  }

  postTransactionData(body: string) {
    const headers = {
      'content-type': 'application/json',
      authorization: this.auth,
      'XSRF-TOKEN': '123',
    };
    this.http
      .post(
        'http://localhost:8080/fin-accounts.webservice/addTransaction',
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
          console.log('Post failed with the errors');
        },
        () => {
          console.log('Post Completed');
        }
      );
  }
}
