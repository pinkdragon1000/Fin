import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-button-component',
  template: `
    <button
      type="submit"
      class="{{ this.class }}"
      (click)="(this.click)"
      title="{{ this.title }}"
    >
      {{ label }}
    </button>
  `,
  styles: [
    `
      button {
        margin: 0.375rem;
        word-wrap: break-word;
        white-space: normal;
        cursor: pointer;
        border: none;
        padding: 0.5rem 0;
        font-size: 1rem;
        border-radius: 0.625rem;
        letter-spacing: 0.094rem;
        min-width: 8rem;
      }
      button:hover {
        transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
          border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
      }
      button:focus {
        outline: none;
        box-shadow: 0rem 0rem 0.313rem var(--fin-blue-1);
      }
      .primary {
        background: var(--fin-gradient);
        padding: 1rem 2.5rem;
        text-transform: uppercase;
        color: var(--fin-white);
      }
      .primary:hover {
        box-shadow: 0.125rem 0.188rem 0.313rem 0.063rem
          var(--fin-blue-1-transparent);
      }
      .secondary {
        background-color: var(--fin-white);
        border: 0.063rem var(--fin-neutral-5) solid;
        color: var(--fin-neutral-3);
        padding: 0.75rem 1rem;
        min-width: 5rem;
      }
      .secondary:hover {
        box-shadow: 0.063rem 0.125rem 0.5rem 0.063rem
          var(--fin-neutral-5-transparent);
      }
      .btn-help {
        position: fixed;
        width: 3.75rem;
        height: 3.75rem;
        bottom: 1.75rem;
        right: 1.75rem;
        min-width: 0rem;
        border-radius: 3.125rem;
        background: var(--fin-gradient);
        box-shadow: 0.125rem 0.125rem 0.1875rem var(--fin-neutral-4);
        font-size: 2rem;
        text-shadow: 0.05rem 0.05rem var(--fin-neutral-4);
        z-index: 1;
        color: var(--fin-white);
      }
      .trash {
        background: url('../../../assets/trash.svg');
        background-repeat: no-repeat;
        height: 3rem;
        min-width: 10%;
        float: right;
        margin-top: -3.5rem;
      }

      .edit {
        background: url('../../../assets/edit.svg');
        background-repeat: no-repeat;
        height: 3rem;
        float: right;
        margin-right: 2.5rem;
        min-width: 30%;
      }
    `,
  ],
})
export class ButtonComponent {
  @Input() label: string;
  @Input() class: string;
  @Input() title: string;
  @Output() click: EventEmitter<string> = new EventEmitter<string>();
  onClick() {
    this.click.emit();
  }
}
