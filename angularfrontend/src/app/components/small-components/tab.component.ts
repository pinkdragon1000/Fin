/**
 * A single tab page. It renders the passed template
 * via the @Input properties by using the ngTemplateOutlet
 * and ngTemplateOutletContext directives.
 */

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab-component',
  styles: [
    `
      .pane {
        padding: 1em;
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
  @Input() title: string;
  @Input() active = false;
}
