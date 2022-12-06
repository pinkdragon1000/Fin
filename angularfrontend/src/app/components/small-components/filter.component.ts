import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter-component',
  template: `
    <ng-container>
      <div class="column" *ngIf="this.data">
        <label class="filterLabel">{{ this.label }}</label>
        <select
          class="filterSelect"
          ngModel="{{ model }}"
          (ngModelChange)="change($event)"
          title="{{ this.label }}"
        >
          <option *ngFor="let d of data" value="{{ d }}">
            {{ d === null ? 'All' : d }}
          </option>
        </select>
      </div>
      <div class="column filterBox" *ngIf="!this.data">
        <label class="filterLabel" id="{{ this.label }}">{{
          this.label
        }}</label>
        <input
          class="filterSearch"
          type="text"
          name="search"
          title="{{ this.label }}"
          ngModel="{{ model }}"
          (ngModelChange)="change($event)"
          autocomplete="off"
          placeholder="Search ..."
        />
      </div>
    </ng-container>
  `,
  styles: [
    `
      .filterLabel {
        color: var(--fin-neutral-1);
        font-weight: bold;
      }
      .filterSearch {
        border-radius: 20rem;
        font-size: 1rem;
        height: 2.25rem;
        padding: 0rem 1rem;
        border: none;
        margin: 0.5rem 0;
        background: var(--fin-white);
        color: var(--fin-neutral-1);
      }
      .filterSearch:focus {
        outline: none;
        box-shadow: 0rem 0rem 0.313rem var(--fin-blue-1);
      }

      .filterSelect {
        border-radius: 20rem;
        font-size: 1rem;
        height: 2.25rem;
        padding: 0rem 1rem;
        border: none;
        margin: 0.5rem 0;
        background: var(--fin-white);
        color: var(--fin-neutral-1);
      }
      .filterSelect:focus {
        outline: none;
        box-shadow: 0rem 0rem 0.313rem var(--fin-blue-1);
      }
    `,
  ],
})
export class FilterComponent {
  @Input() label: string;
  @Input() data: any;

  @Input() model: string;
  @Output() searchChange = new EventEmitter();
  change(newValue: string) {
    this.model = newValue;
    this.searchChange.emit(newValue);
  }
}
