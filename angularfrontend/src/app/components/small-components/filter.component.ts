import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter-component',
  template: `
    <ng-container>
      <div class="column" *ngIf="this.data">
        <label class="filterLabel">{{ this.label }}</label>
        <select
          class="filterSelect"
          [ngModel]="model"
          (ngModelChange)="change($event)"
          title="{{ this.label }}"
        >
          <option *ngFor="let d of data" [value]="d">
            {{ d === null ? 'All' : d }}
          </option>
        </select>
      </div>
      <div class="column filterBox" *ngIf="!this.data">
        <label class="filterLabel" id="{{ this.label }}">{{ this.label }}</label>
        <div class="search-wrapper">
          <input
            class="filterSearch"
            type="text"
            name="search"
            title="{{ this.label }}"
            [ngModel]="model"
            (ngModelChange)="change($event)"
            autocomplete="off"
            placeholder="Search ..."
          />
          <button *ngIf="model" class="search-clear" type="button" (click)="change('')" title="Clear">✕</button>
        </div>
      </div>
    </ng-container>
  `,
  styles: [
    `
      .filterLabel {
        color: var(--fin-neutral-1);
        font-size: 0.875rem;
        font-weight: 600;
        margin-bottom: 0.25rem;
      }
      .filterSearch,
      .filterSelect {
        border-radius: var(--fin-radius-sm);
        font-size: 0.9rem;
        font-family: Inter, sans-serif;
        height: 2.25rem;
        padding: 0 1rem;
        border: 1px solid var(--fin-neutral-5);
        margin: 0.25rem 0;
        background: var(--fin-white);
        color: var(--fin-black);
        box-shadow: var(--fin-shadow-xs);
        transition: border-color 0.15s, box-shadow 0.15s;
        -webkit-appearance: none;
        appearance: none;
      }
      .filterSelect {
        padding-right: 2.25rem;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right 0.75rem center;
        background-size: 0.75rem;
      }
      .search-wrapper {
        position: relative;
        display: flex;
        align-items: center;
      }
      .search-wrapper .filterSearch {
        width: 100%;
        padding-right: 2rem;
        box-sizing: border-box;
      }
      .search-clear {
        position: absolute;
        right: 0.5rem;
        background: none;
        border: none;
        cursor: pointer;
        color: var(--fin-neutral-3);
        font-size: 0.7rem;
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
      .search-clear:hover {
        background: var(--fin-neutral-5);
        color: var(--fin-black);
      }
      .filterSearch:focus,
      .filterSelect:focus {
        outline: none;
        border-color: var(--fin-pink);
        box-shadow: 0 0 0 3px rgba(233, 64, 87, 0.12);
      }
    `,
  ],
})
export class FilterComponent {
  @Input() label!: string;
  @Input() data: any;

  @Input() model!: string;
  @Output() modelChange = new EventEmitter<string>();
  @Output() searchChange = new EventEmitter<string>();
  change(newValue: string) {
    this.model = newValue;
    this.modelChange.emit(newValue);
    this.searchChange.emit(newValue);
  }
}
