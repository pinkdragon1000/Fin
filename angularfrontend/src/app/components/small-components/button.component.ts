import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-button-component',
  template: `
    <button
      type="button"
      class="{{ this.class }}"
      (click)="onClick(); $event.stopPropagation()"
      title="{{ this.title }}"
    >
      <svg *ngIf="icon === 'plus'" class="btn-svg" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 5v14"></path>
        <path d="M5 12h14"></path>
      </svg>
      <svg *ngIf="this.class === 'trash'" class="btn-svg btn-svg--trash" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 6h18"></path>
        <path d="M8 6V4h8v2"></path>
        <path d="M19 6l-1 14H6L5 6"></path>
        <path d="M10 11v5"></path>
        <path d="M14 11v5"></path>
      </svg>
      <svg *ngIf="this.class === 'edit'" class="btn-svg btn-svg--edit" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 20l4.5-1 10-10-3.5-3.5-10 10L4 20z"></path>
        <path d="M13.5 7l3.5 3.5"></path>
        <path d="M5 15.5L8.5 19"></path>
      </svg>
      <span *ngIf="label">{{ label }}</span>
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
        font-size: 0.9375rem;
        font-family: Inter, sans-serif;
        font-weight: 500;
        border-radius: var(--fin-radius);
        letter-spacing: 0.01em;
        transition: opacity 0.15s, box-shadow 0.15s, transform 0.1s;
        min-width: 8rem;
      }
      button:not(.trash):not(.edit) {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
      }
      button:hover {
        transform: translateY(-1px);
      }
      button:active {
        transform: translateY(0);
      }
      button:focus {
        outline: none;
        box-shadow: 0 0 0 3px var(--fin-blue-1-transparent);
      }
      .primary {
        background: var(--fin-gradient);
        padding: 0.75rem 2rem;
        color: var(--fin-white);
        box-shadow: 0 2px 8px rgba(233, 64, 87, 0.3);
      }
      .primary:hover {
        box-shadow: 0 4px 14px rgba(233, 64, 87, 0.4);
        opacity: 0.95;
      }
      .btn-svg {
        width: 1.0625rem;
        height: 1.0625rem;
        flex: 0 0 1.0625rem;
        fill: none;
        stroke: currentColor;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 2;
      }
      .btn-svg--edit {
        width: 1.25rem;
        height: 1.25rem;
        flex-basis: 1.25rem;
      }
      .btn-svg--trash {
        width: 1.1875rem;
        height: 1.1875rem;
        flex-basis: 1.1875rem;
      }
      .secondary {
        background-color: var(--fin-white);
        border: 1px solid var(--fin-neutral-5);
        color: var(--fin-neutral-1);
        padding: 0.625rem 1rem;
        min-width: 5rem;
        box-shadow: var(--fin-shadow-xs);
      }
      .secondary:hover {
        border-color: var(--fin-neutral-4);
        box-shadow: var(--fin-shadow-sm);
        color: var(--fin-black);
      }
      .trash {
        background-color: transparent;
        color: var(--fin-pink);
        position: relative;
        z-index: 4;
        height: 2.25rem;
        min-width: 2.5rem;
        width: 2.5rem;
        margin: 0;
        border-radius: var(--fin-radius-sm);
        transition: background-color 0.15s;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      .trash:hover {
        background-color: rgba(180, 20, 45, 0.06);
        transform: none;
      }
      .edit {
        background-color: transparent;
        color: var(--fin-pink);
        position: relative;
        z-index: 4;
        height: 2.25rem;
        min-width: 2.25rem;
        width: 2.25rem;
        margin: 0;
        border-radius: var(--fin-radius-sm);
        transition: opacity 0.15s;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      .edit:hover {
        background-color: rgba(3, 100, 255, 0.06);
        transform: none;
      }
    `,
  ],
})
export class ButtonComponent {
  @Input() label!: string;
  @Input() class!: string;
  @Input() title!: string;
  @Input() icon!: string;
  @Output() click: EventEmitter<string> = new EventEmitter<string>();
  @Output() buttonClick: EventEmitter<string> = new EventEmitter<string>();
  onClick() {
    this.click.emit();
    this.buttonClick.emit();
  }
}
