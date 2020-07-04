import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-template',
  template: `
    <navbar-component></navbar-component>
    <div class="content">
      <ng-content></ng-content>
    </div>

    <button class="btn-help">?</button>
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

  ngOnInit(): void {}
}
