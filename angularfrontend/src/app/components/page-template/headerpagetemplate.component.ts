import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'header-page-template',
  template: `
    <header-component
      [maintitle]="'Fin'"
      [tagline]="'Financial Accounts Management'"
    ></header-component>
    <div class="content">
      <div class="column login-signup-container">
        <h2 class="pagetitle">{{ pagetitle }}</h2>
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [
    `
      .content {
        margin: 2rem 2rem 0rem 2rem;
      }

      .login-signup-container {
        align-items: center;
        margin-top: 5rem;
      }
    `,
  ],
})
export class HeaderPageTemplateComponent implements OnInit {
  constructor() {}

  @Input() pagetitle: string;

  ngOnInit(): void {}
}
