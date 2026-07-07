import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ToastService } from './toast.service';

@Injectable()
export class AccountAPIService {
  accountsResult: any;
  auth: string = 'Basic ' + btoa('srobinson:bl');
  webservicePath!: string;

  constructor(private http: HttpClient, private toastService: ToastService) {}

  getEnvironmentCommon() {
    this.webservicePath = environment.webservicePath;
    return this.webservicePath;
  }

  postAccountData(body: string, onComplete?: () => void) {
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
          console.log('POST completed successfully. The response received ' + response);
        },
        (error) => {
          console.log('Post failed with errors');
          this.toastService.show('Failed to add account', 'error');
        },
        () => {
          console.log('Post Completed');
          onComplete?.();
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

  deleteAccount(body: string, onComplete?: () => void) {
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
          console.log('POST completed successfully. The response received ' + response);
        },
        (error) => {
          console.log('Post failed with errors');
          this.toastService.show('Failed to delete account', 'error');
        },
        () => {
          console.log('Post Completed');
          onComplete?.();
        }
      );
  }

  updateAccount(body: string, onComplete?: () => void) {
    this.webservicePath = this.getEnvironmentCommon();
    const headers = {
      'content-type': 'application/json',
      authorization: this.auth,
    };
    this.http
      .post(this.webservicePath + 'updateAccount', body, {
        headers,
        observe: 'response',
      })
      .subscribe(
        (response) => {
          console.log('POST completed successfully. The response received ' + response);
        },
        (error) => {
          console.log('Post failed with errors');
          this.toastService.show('Failed to update account', 'error');
        },
        () => {
          console.log('Post Completed');
          onComplete?.();
        }
      );
  }
}
