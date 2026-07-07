import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-page-template',
  template: `
    <app-header-component
      [maintitle]="'Fin'"
      [tagline]="'Financial Accounts Management'"
    ></app-header-component>
    <div class="content">
      <div class="auth-card">
        <h2 class="pagetitle">{{ pagetitle }}</h2>
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }
      .pagetitle {
        background: var(--fin-gradient);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
        margin-bottom: 1.25rem;
      }
      .content {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2.5rem 1rem;
        background: var(--fin-white);
      }
      .auth-card {
        background: var(--fin-white);
        border-radius: var(--fin-radius-lg);
        box-shadow: var(--fin-shadow-md);
        padding: 2.5rem;
        width: 100%;
        max-width: 31rem;
        min-height: 28rem;
        border: 1px solid rgba(0, 0, 0, 0.06);
        box-sizing: border-box;
      }
    `,
  ],
})
export class HeaderPageTemplateComponent {
  @Input() pagetitle!: string;
  constructor() {}
}
