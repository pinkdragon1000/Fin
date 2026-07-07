import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select-component',
  template: `
    <ng-container class="selectComponent">
      <label>
        {{ label }}
        <span class="required-marker">*</span>
      </label>
      <select
        id="select"
        title="Select an option"
        required
        [disabled]="!!disabled"
        (change)="onChange($event)"
      >
        <option
          *ngFor="let option of selectData"
          [value]="option.value"
          [disabled]="!!option.disabled"
          [selected]="!!option.selected"
        >
          {{ option.description }}
        </option>
      </select>
    </ng-container>
  `,
  styles: [
    `
      label {
        display: block;
        color: var(--fin-neutral-1);
        font-size: 0.875rem;
        font-weight: 600;
        margin-bottom: 0.375rem;
      }
      .required-marker {
        color: var(--fin-pink);
        margin-left: 0.125rem;
      }
      select {
        border-radius: var(--fin-radius-sm);
        font-size: 0.9375rem;
        font-family: Inter, sans-serif;
        width: 100%;
        padding: 0.625rem 0.875rem;
        border: 1px solid var(--fin-neutral-5);
        margin: 0 0 0.75rem 0;
        background: var(--fin-white);
        color: var(--fin-black);
        box-shadow: var(--fin-shadow-xs);
        transition: border-color 0.15s, box-shadow 0.15s;
        box-sizing: border-box;
        -webkit-appearance: none;
        appearance: none;
        cursor: pointer;
        padding-right: 2.25rem;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right 0.75rem center;
        background-size: 0.75rem;
      }
      select:focus {
        outline: none;
        border-color: var(--fin-pink);
        box-shadow: 0 0 0 3px rgba(233, 64, 87, 0.12);
      }
      select:disabled {
        background-color: var(--fin-neutral-6);
        color: var(--fin-neutral-2);
        -webkit-text-fill-color: var(--fin-neutral-2);
        cursor: not-allowed;
        background-image: none;
        opacity: 1;
      }
    `,
  ],
})
export class SelectComponent {
  @Input() selectData: any;
  @Input() label!: string;
  @Input() disabled!: boolean;
  @Output() selectionChange = new EventEmitter<string>();

  onChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.selectionChange.emit(select.options[select.selectedIndex]?.text);
  }
}
