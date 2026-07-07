import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab-component',
  styles: [
    `
      .pane {
        padding: 1.25rem;
        background: var(--fin-white);
        border: 1px solid var(--fin-neutral-5);
        border-top: none;
        border-radius: 0 0 var(--fin-radius) var(--fin-radius);
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
  @Input('tabTitle') title!: string;
  @Input() active = false;
}
