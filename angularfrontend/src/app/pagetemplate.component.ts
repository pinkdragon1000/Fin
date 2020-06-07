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
        margin-left: 2rem;
        margin-top: 2rem;
      }
    `,
  ],
})
export class PageTemplateComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
