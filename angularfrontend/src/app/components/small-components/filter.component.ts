import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter-component',
  template: `
    <ng-container>
      <div class="column" *ngIf="this.data">
        <label>{{ this.label }}</label>
        <select class="filterSelect" [(ngModel)]="this.model">
          <option *ngFor="let d of this.data" value="{{ d }}">
            {{ d }}
          </option>
        </select>
      </div>
      <div class="column filterBox" *ngIf="!this.data">
        <label>{{ this.label }}</label>
        <input
          class="filterSearch"
          type="text"
          name="search"
          [ngModel]="this.model"
          (ngModelChange)="change($event)"
          autocomplete="off"
          placeholder="Search ..."
        />
      </div>
    </ng-container>
  `,
  styles: [
    `
      .filterBox {
        width: 11rem;
        background-color: var(--fin-neutral-5);
        border-radius: 0.625rem;
        padding: 1rem;
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
    `,
  ],
})
export class FilterComponent {
  @Input() label: string;
  @Input() data: any;

  @Input() model: string;
  @Output() searchChange = new EventEmitter();
  change(newValue) {
    this.model = newValue;
    this.searchChange.emit(newValue);
  }
}
