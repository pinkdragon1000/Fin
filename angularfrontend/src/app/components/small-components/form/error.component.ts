import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-error-component',
  template: ` <div [innerHTML]="this.error" class="error"></div> `,
  styles: [
    `
      .error {
        padding: 1rem;
        border-radius: 0.625rem;
        color: var(--fin-red);
        width: auto;
        border: 0.1rem var(--fin-red) solid;
      }
    `,
  ],
})
export class ErrorComponent {
  @Input() error: string;
}
