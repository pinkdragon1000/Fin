import { Component, OnInit, ContentChild } from '@angular/core';

@Component({
  selector: 'app-pagetemplate',
  template: `
    <app-navbar></app-navbar>
    <div class="content">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      .content {
        margin: 2rem, 2rem, 0rem, 2rem;
      }
    `,
  ],
})
export class PageTemplateComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
