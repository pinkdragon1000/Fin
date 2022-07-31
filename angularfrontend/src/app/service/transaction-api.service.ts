import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment as envirDev } from 'src/environments/environment';
import { environment as envirProd } from 'src/environments/environment.prod';

@Injectable()
export class TransactionAPIService {
  transactionsResult: any;
  auth: string = 'Basic ' + btoa('srobinson:bl');
  webservicePath: string;

  constructor(private http: HttpClient) {}

  getEnvironmentCommon() {
    if (isDevMode) {
      console.log('dev');
      this.webservicePath = envirDev.webservicePath;
    } else {
      console.log('prod');
      this.webservicePath = envirProd.webservicePath;
    }
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
        console.log(this.transactionsResult);
      });
  }

  postTransactionData(body: string) {
    this.webservicePath = this.getEnvironmentCommon();
    const headers = {
      'content-type': 'application/json',
      authorization: this.auth,
      'XSRF-TOKEN': '123',
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
