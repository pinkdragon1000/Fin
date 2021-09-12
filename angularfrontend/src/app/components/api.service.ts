import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class APIService {
  constructor(private http: HttpClient) {}
  userResult: Object;
  accountsResult: Object;
  transactionsResult: Object;
  getUserData(callback: any) {
    this.http
      .get('http://localhost:8080/users')
      .pipe(map((res) => res))
      .subscribe((res) => {
        this.userResult = res;
        callback(this.userResult)
      });
  }

  getAccountDataAsync(callback: any) {
    this.http
    .get('http://localhost:8080/accounts')
    .pipe(map((res) => res))
    .subscribe((res) => {
      this.accountsResult = res;
      callback(this.accountsResult)
      console.log(this.accountsResult);
    });

  }

  getTransactionDataAsync(callback: any) {
    this.http
    .get('http://localhost:8080/transactions')
    .pipe(map((res) => res))
    .subscribe((res) => {
      this.transactionsResult = res;
      callback(this.transactionsResult)
      console.log(this.transactionsResult);
    });
    
  }
}
