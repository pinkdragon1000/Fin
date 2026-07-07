import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-component',
  template: `
    <label>
      {{ label }}
      <span *ngIf="required" class="required-marker">*</span>
    </label>
    <div class="input-wrapper">
      <input
        #inputRef
        placeholder="{{ placeholder }}"
        type="{{ type }}"
        name="{{ name }}"
        [required]="!!required"
        min="{{ min }}"
        id="{{ id }}"
        [attr.list]="!disabled && datalistOptions?.length ? datalistId : null"
        autocomplete="true"
        [value]="value ?? ''"
        [disabled]="!!disabled"
        title="{{ placeholder }}"
        (input)="hasValue = inputRef.value.length > 0"
      />
      <datalist *ngIf="!disabled && datalistOptions?.length" id="{{ datalistId }}">
        <option *ngFor="let option of datalistOptions" [value]="option"></option>
      </datalist>
      <span *ngIf="!disabled && datalistOptions?.length" class="datalist-chevron"></span>
      <button
        *ngIf="hasValue && !disabled"
        type="button"
        class="clear-btn"
        (click)="inputRef.value = ''; hasValue = false"
        title="Clear"
      >✕</button>
    </div>
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
      .input-wrapper {
        position: relative;
        margin: 0 0 0.75rem 0;
      }
      input {
        border-radius: var(--fin-radius-sm);
        font-size: 0.9375rem;
        font-family: Inter, sans-serif;
        width: 100%;
        padding: 0.625rem 2.25rem 0.625rem 0.875rem;
        border: 1px solid var(--fin-neutral-5);
        background: var(--fin-white);
        color: var(--fin-black);
        box-shadow: var(--fin-shadow-xs);
        transition: border-color 0.15s, box-shadow 0.15s;
        box-sizing: border-box;
      }
      input[type='date'] {
        font-family: Inter, sans-serif;
      }
      input::placeholder {
        color: var(--fin-neutral-3);
      }
      input:focus {
        outline: none;
        border-color: var(--fin-pink);
        box-shadow: 0 0 0 3px rgba(233, 64, 87, 0.12);
      }
      input:disabled {
        background-color: var(--fin-neutral-6);
        color: var(--fin-neutral-2);
        -webkit-text-fill-color: var(--fin-neutral-2);
        cursor: not-allowed;
        opacity: 1;
      }
      .clear-btn {
        position: absolute;
        right: 0.625rem;
        top: 50%;
        transform: translateY(-50%);
        background: none;
        border: none;
        cursor: pointer;
        color: var(--fin-neutral-3);
        font-size: 0.75rem;
        width: 1.25rem;
        height: 1.25rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        transition: background 0.15s, color 0.15s;
        line-height: 1;
      }
      .clear-btn:hover {
        background: var(--fin-neutral-5);
        color: var(--fin-black);
      }
      .datalist-chevron {
        position: absolute;
        right: 0.875rem;
        top: 50%;
        width: 0.75rem;
        height: 0.75rem;
        transform: translateY(-50%);
        pointer-events: none;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: center;
        background-size: 0.75rem;
      }
      .datalist-chevron + .clear-btn {
        right: 2rem;
      }
    `,
  ],
})
export class InputComponent implements OnInit {
  private static nextDatalistId = 0;

  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() type!: string;
  @Input() name!: string;
  @Input() required!: boolean;
  @Input() min!: number;
  @Input() id!: string;
  @Input() value?: string;
  @Input() disabled!: boolean;
  @Input() datalistOptions: string[] = [];

  datalistId = `input-suggestions-${InputComponent.nextDatalistId++}`;

  hasValue = false;

  ngOnInit() {
    if (this.value != null && this.value !== '') {
      this.hasValue = true;
    }
  }

  @Output() searchChange = new EventEmitter();
  change(newValue: string) {
    this.value = newValue;
    this.searchChange.emit(newValue);
  }
}
