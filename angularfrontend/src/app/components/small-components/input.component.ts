import { Component, OnInit, Input } from '@angular/core';

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
    />
  `,

  styles: [
    `
      label {
        color: var(--fin-neutral-1);
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
        background: var(--fin-neutral-6);
        color: var(--fin-neutral-1);
      }

      input[type='checkbox'],
      input[type='radio'] {
        width: 1.2rem;
        height: 1.2rem;
        margin-top: 0.3rem;
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
export class InputComponent implements OnInit {
  @Input() label: string;
  @Input() placeholder: string;
  @Input() type: string;
  @Input() name: string;
  @Input() required: string;
  @Input() min: number;
  @Input() id: string;
  constructor() {}
  ngOnInit(): void {}
}
