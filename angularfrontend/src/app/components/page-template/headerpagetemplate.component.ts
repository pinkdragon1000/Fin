import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-page-template',
  template: `
    <app-header-component
      [maintitle]="'Fin'"
      [tagline]="'Financial Accounts Management'"
    ></app-header-component>
    <div class="content">
      <div class="column login-signup-container">
        <h2 class="pagetitle">{{ pagetitle }}</h2>
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [
    `
      .pagetitle {
        background: var(--fin-gradient);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
      }
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
export class HeaderPageTemplateComponent {
  @Input() pagetitle: string;
  constructor() {}
}
