import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab-component',
  styles: [
    `
      .pane {
        padding: 1rem;
      }
    `,
  ],
  template: `
    <div [hidden]="!active" class="pane">
      <ng-content></ng-content>
    </div>
  `,
})
export class TabComponent {
  @Input('tabTitle') title: string;
  @Input() active = false;
}
