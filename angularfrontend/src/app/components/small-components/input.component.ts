import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'input-component',
  template: `
    <label>{{ label }}</label>

    <input
      placeholder="{{ placeholder }}"
      type="{{ type }}"
      name="{{ name }}"
      required="{{ required }}"
      min="{{min}}"
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
        border: 1px solid var(--fin-white);
        margin: 0.5rem 0;
        background: var(--fin-neutral-6);
        color: var(--fin-neutral-1);
      }
    `,
  ],
})
export class InputComponent implements OnInit {
  constructor() {}
  @Input() label: string;
  @Input() placeholder: string;
  @Input() type: string;
  @Input() name: string;
  @Input() required: string;
  @Input() min: number;

  ngOnInit(): void {}
}
