import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class APIService {
  userResult: Object;
  accountsResult: Object;
  transactionsResult: Object;
  msg: string;
  auth: string = 'Basic ' + btoa('srobinson:bl');

  constructor(private http: HttpClient) {}

  getUserData(callback: any) {
    const headers = {
      'content-type': 'application/json',
      authorization: this.auth,
    };
    this.http
      .get('http://localhost:8080/fin-accounts.webservice/users', {
        headers,
      })
      .pipe(map((res) => res))
      .subscribe((res) => {
        this.userResult = res;
        callback(this.userResult);
      });
  }

  postValidateUser(body: string): string {
    const headers = {
      'content-type': 'application/json',
      authorization: this.auth,
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
      .subscribe(
        (response) => {
          console.log(
            'POST completed sucessfully. The response received ' + response
          );
          this.msg = 'success';
          return this.msg;
        },
        (error) => {
          console.log('Post failed with the errors');
          console.log(error);
          this.msg = 'error';
          return this.msg;
        },
        () => {
          console.log('Post Completed');
        }
      );
    return this.msg;
  }

  getAccountDataAsync(callback: any) {
    const headers = {
      'content-type': 'application/json',
      authorization: this.auth,
    };
    this.http
      .get('http://localhost:8080/fin-accounts.webservice/accounts', {
        headers,
      })
      .pipe(map((res) => res))
      .subscribe((res) => {
        this.accountsResult = res;
        callback(this.accountsResult);
        console.log(this.accountsResult);
      });
  }

  getTransactionDataAsync(callback: any) {
    this.http
      .get('http://localhost:8080/fin-accounts.webservice/transactions')
      .pipe(map((res) => res))
      .subscribe((res) => {
        this.transactionsResult = res;
        callback(this.transactionsResult);
        console.log(this.transactionsResult);
      });
  }

  postUserData(body: string) {
    const headers = {
      'content-type': 'application/json',
      authorization: this.auth,
    };
    this.http
      .post('http://localhost:8080//fin-accounts.webservice/addUser', body, {
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

  postAccountData(body: string) {
    const headers = {
      'content-type': 'application/json',
      authorization: this.auth,
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

  postTransactionDataTest() {
    const headers = {
      'content-type': 'application/json',
      authorization: this.auth,
    };
    const body =
      '{"account_id":{"account_id": 1}, "transaction_type": "Deposit", "transaction_date": "2021-09-18", \
      "transaction_amount": 20, "transaction_subTotal": 0}';
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

  postTransactionData(body: string) {
    const headers = {
      'content-type': 'application/json',
      authorization: this.auth,
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
