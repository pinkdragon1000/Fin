import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'header-page-template',
  template: `
    <header-component
      [maintitle]="'Fin'"
      [tagline]="'Financial Accounts Management'"
    ></header-component>
    <div class="content">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      .content {
        margin: 2rem 2rem 0rem 2rem;
      }
    `,
  ],
})
export class HeaderPageTemplateComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
