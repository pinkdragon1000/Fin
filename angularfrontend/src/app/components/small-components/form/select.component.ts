import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-select-component',
  template: `
    <ng-container class="selectComponent">
      <label>{{ label }}</label>
      <br />
      <select id="select" title="Select an option">
        <option
          *ngFor="let option of selectData"
          value="{{ option.value }}"
          disabled="{{ option.disabled }}"
          selected="{{ option.selected }}"
        >
          {{ option.description }}
        </option>
      </select>
      <br />
    </ng-container>
  `,
  styles: [
    `
      label {
        color: var(--fin-neutral-1);
        font-weight: bold;
      }
      select {
        border-radius: 20rem;
        font-size: 1rem;
        height: 1.5rem;
        min-width: 15rem;
        width: 100%;
        height: 3.25rem;
        padding: 0rem 1rem;
        border: 0.063rem solid var(--fin-white);
        margin: 0.5rem 0;
        background: var(--fin-white);
        color: var(--fin-neutral-1);
      }
      select:focus {
        outline: none;
        box-shadow: 0rem 0rem 0.313rem var(--fin-blue-1);
      }
    `,
  ],
})
export class SelectComponent {
  @Input() selectData: any;
  @Input() label: string;
}
