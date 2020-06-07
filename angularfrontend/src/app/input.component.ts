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
    />
  `,

  styles: [
    `
      .inputs > div {
        margin-bottom: 2rem;
      }

      input {
        border-radius: 20rem;
        font-size: 1rem;
        height: 1.5rem;
        min-width: 15rem;
        width: 100%;
        padding: 0.75rem 1rem;
        border: 1px solid var(--fin-neutral-1);
        margin: 0.5rem 0;
      }

      .input-group {
        display: flex;
        border-radius: 2rem;
        margin: 0.5rem 0 1.5rem 0;
        background: var(--fin-neutral-6);
      }

      .input-group-search {
        display: flex;
        border-radius: 2rem;
        border: 1px solid var(--fin-neutral-4);
      }

      .input-group-prepend {
        height: 1rem;
        width: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-top-left-radius: 20rem;
        border-bottom-left-radius: 20rem;
        color: var(--fin-neutral-1);
        padding: 1rem 0 1rem 1rem;
        background: var(--fin-neutral-6);
      }

      .required .input-label:after {
        content: '*';
        color: var(--fin-red);
        margin-left: 0.125rem;
      }

      .focused {
        box-shadow: 0 0 0.3125rem var(--fin-blue-1);
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

  ngOnInit(): void {}
}
