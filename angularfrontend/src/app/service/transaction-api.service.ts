import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ToastService } from './toast.service';

@Injectable()
export class TransactionAPIService {
  transactionsResult: any;
  auth: string = 'Basic ' + btoa('srobinson:bl');
  webservicePath!: string;

  constructor(private http: HttpClient, private toastService: ToastService) {}

  getEnvironmentCommon() {
    this.webservicePath = environment.webservicePath;
    return this.webservicePath;
  }

  getTransactionDataAsync(callback: any, accountID: string) {
    this.webservicePath = this.getEnvironmentCommon();
    this.http
      .get(this.webservicePath + 'transactions?accountID=' + accountID)
      .pipe(map((res) => res))
      .subscribe((res) => {
        this.transactionsResult = res;
        callback(this.transactionsResult);
      });
  }

  deleteTransaction(body: string, onComplete?: () => void) {
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
          console.log('POST completed successfully. The response received ' + response);
        },
        (error) => {
          console.log('Post failed with errors');
          this.toastService.show('Failed to delete transaction', 'error');
        },
        () => {
          console.log('Post Completed');
          onComplete?.();
        }
      );
  }

  updateTransaction(body: string, onComplete?: () => void) {
    this.webservicePath = this.getEnvironmentCommon();
    const headers = {
      'content-type': 'application/json',
      authorization: this.auth,
    };
    this.http
      .post(this.webservicePath + 'updateTransaction', body, {
        headers,
        observe: 'response',
      })
      .subscribe(
        (response) => {
          console.log('POST completed successfully. The response received ' + response);
        },
        (error) => {
          console.log('Post failed with errors');
          this.toastService.show('Failed to update transaction', 'error');
        },
        () => {
          console.log('Post Completed');
          onComplete?.();
        }
      );
  }

  postTransactionData(body: string, onComplete?: () => void) {
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
          console.log('POST completed successfully. The response received ' + response);
        },
        (error) => {
          console.log('Post failed with the errors');
          this.toastService.show('Failed to add transaction', 'error');
        },
        () => {
          console.log('Post Completed');
          onComplete?.();
        }
      );
  }
}
