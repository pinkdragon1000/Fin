import { Component, OnInit, Input } from '@angular/core';
import { APIService } from '../api.service';

@Component({
  selector: 'app-page-template',
  template: `
    <app-navbar-component
      [childToMaster]="this.userData"
    ></app-navbar-component>
    <div class="content">
      <h2 class="pagetitle">{{ pagetitle }}</h2>
      <p>{{ pagedirections }}</p>
      <br />
      <ng-content></ng-content>
    </div>
    <app-help-modal-button-component
      [modaltext]="
        'To add an account click Add An Account.  To view accounts click Manage Accounts.  To add transactions for a specific account click on that account.'
      "
    ></app-help-modal-button-component>
  `,
  styles: [
    `
      .content {
        margin: 2rem 2rem 0rem 2rem;
      }
    `,
  ],
})
export class PageTemplateComponent implements OnInit {
  @Input() pagedirections: string;
  @Input() pagetitle: string;
  userData: string;

  constructor(private apiService: APIService) {}

  ngOnInit() {
    this.apiService.getUserData((d: Object) => {
      this.userData = d[0].fullName;
    });
  }
}
