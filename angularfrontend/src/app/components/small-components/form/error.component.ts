import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-error-component',
  template: `<div [innerHTML]="this.error" class="error"></div>`,
  styles: [
    `
      .error {
        padding: 0.75rem 1rem;
        border-radius: var(--fin-radius-sm);
        color: var(--fin-red);
        font-size: 0.875rem;
        font-weight: 500;
        background: rgba(180, 20, 45, 0.06);
        border: 1px solid rgba(180, 20, 45, 0.2);
        margin-bottom: 0.75rem;
      }
    `,
  ],
})
export class ErrorComponent {
  @Input() error!: string;
}
