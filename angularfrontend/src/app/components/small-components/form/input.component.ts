import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-component',
  template: `
    <label>{{ label }}</label>
    <input
      placeholder="{{ placeholder }}"
      type="{{ type }}"
      name="{{ name }}"
      required="{{ required }}"
      min="{{ min }}"
      id="{{ id }}"
      autocomplete="true"
      value="{{ value }}"
      title="{{ placeholder }}"
    />
  `,

  styles: [
    `
      label {
        color: var(--fin-neutral-1);
        font-weight: bold;
      }

      input {
        border-radius: 20rem;
        font-size: 1rem;
        height: 1.5rem;
        min-width: 15rem;
        width: 100%;
        padding: 0.75rem 1rem;
        border: 0.063rem solid var(--fin-white);
        margin: 0.5rem 0;
        background: var(--fin-white);
        color: var(--fin-neutral-1);
      }

      input[type='date'] {
        font-family: Inter, sans-serif;
      }

      input:focus {
        outline: none;
        box-shadow: 0rem 0rem 0.313rem var(--fin-blue-1);
      }
    `,
  ],
})
export class InputComponent {
  @Input() label: string;
  @Input() placeholder: string;
  @Input() type: string;
  @Input() name: string;
  @Input() required: boolean;
  @Input() min: number;
  @Input() id: string;
  @Input() value?: string;

  @Output() searchChange = new EventEmitter();
  change(newValue: string) {
    this.value = newValue;
    this.searchChange.emit(newValue);
  }
}
