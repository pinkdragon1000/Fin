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
    <h2>{{pagetitle}}</h2>

      <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [
    `
      .content {
        margin: 2rem 2rem 0rem 2rem;
      }
      
      h2 {
        color: var(--fin-neutral-1);
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
