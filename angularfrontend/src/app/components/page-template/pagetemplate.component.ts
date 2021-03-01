import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'page-template',
  template: `
    <navbar-component></navbar-component>
    <div class="content">
      <h2 class="pagetitle">{{ pagetitle }}</h2>
      <p>{{ pagedirections }}</p>
      <br />
      <ng-content></ng-content>
    </div>
    <help-modal-button-component
      [modaltext]="
        'To add an account click Add An Account.  To view accounts click Manage Accounts.  To add transactions for a specific account click on that account.'
      "
    ></help-modal-button-component>
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
  constructor() {}

  @Input() pagedirections: string;
  @Input() pagetitle: string;
  ngOnInit(): void {}
}
