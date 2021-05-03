import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class APIService {
  constructor(private http: HttpClient) {}
  userResult: Object;
  accountsResult: Object;
  getUserData(): Object {
    this.http
      .get('http://localhost:8080/users')
      .pipe(map((res) => res))
      .subscribe((res) => {
        this.userResult = res;
      });
    return this.userResult;
  }

  getAccountData(): Object {
    this.http
      .get('http://localhost:8080/accounts')
      .pipe(map((res) => res))
      .subscribe((res) => {
        this.accountsResult = res;
      });
    return this.accountsResult;
  }
}
