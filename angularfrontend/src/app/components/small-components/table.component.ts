import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table-component',
  template: `
    <div class="table-wrapper">
      <div class="table-header">
        <p class="table-label">{{ tableLabel }}</p>
        <ng-content select="[tableAction]"></ng-content>
      </div>
      <table>
        <thead>
          <tr class="tableHeaders">
            <th
              *ngFor="let header of headerData"
              [class.no-border]="header === ''"
              [class.sortable]="sortableColumns.includes(header)"
              (click)="sortableColumns.includes(header) && sortChange.emit(header)"
            >
              {{ header }}
              <span *ngIf="sortableColumns.includes(header)" class="sort-icon">
                <svg
                  *ngIf="sortColumn !== header"
                  class="sort-svg sort-svg--inactive"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8 5v14"></path>
                  <path d="M5 8l3-3 3 3"></path>
                  <path d="M16 19V5"></path>
                  <path d="M13 16l3 3 3-3"></path>
                </svg>
                <svg
                  *ngIf="sortColumn === header && sortDirection === 'asc'"
                  class="sort-svg"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 19V5"></path>
                  <path d="M7 10l5-5 5 5"></path>
                </svg>
                <svg
                  *ngIf="sortColumn === header && sortDirection === 'desc'"
                  class="sort-svg"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 5v14"></path>
                  <path d="M7 14l5 5 5-5"></path>
                </svg>
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <ng-content></ng-content>
        </tbody>
      </table>
    </div>
  `,
  styles: [
    `
      .table-wrapper {
        position: relative;
        z-index: 5;
        overflow: visible;
      }
      .table-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        padding: 0.875rem 0 0.75rem;
      }
      .table-label {
        font-size: 0.8125rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: var(--fin-neutral-2);
        margin: 0;
      }
      table {
        border-collapse: collapse;
        width: 100%;
      }
      th {
        background-color: rgba(245, 245, 245, 1);
        color: var(--fin-neutral-1);
        font-size: 0.8125rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        padding: 0.625rem 0.875rem;
        border: 1px solid var(--fin-neutral-5);
        position: sticky;
        top: 0;
      }
      td {
        border-bottom: 1px solid var(--fin-neutral-6);
        text-align: left;
        padding: 0.625rem 0.875rem;
        font-size: 0.9rem;
        color: var(--fin-black);
      }
      tbody tr {
        transition: background 0.12s;
      }
      tbody tr:hover {
        background: #fdf5f5;
      }
      tbody tr:last-child td {
        border-bottom: none;
      }
      th.no-border {
        width: 3rem;
        padding: 0;
        border: 1px solid transparent;
        border-left-color: var(--fin-neutral-5);
        background: transparent;
      }
      th.sortable {
        cursor: pointer;
        user-select: none;
      }
      th.sortable:hover {
        color: var(--fin-pink);
      }
      .sort-icon {
        display: inline-flex;
        align-items: center;
        margin-left: 0.25rem;
        vertical-align: -0.125rem;
      }
      .sort-svg {
        width: 0.875rem;
        height: 0.875rem;
        fill: none;
        stroke: currentColor;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 2;
      }
      .sort-svg--inactive {
        opacity: 0.7;
      }
    `,
  ],
})
export class TableComponent {
  @Input() headerData: any;
  @Input() tableLabel!: string;
  @Input() sortableColumns: string[] = [];
  @Input() sortColumn!: string;
  @Input() sortDirection: 'asc' | 'desc' = 'asc';
  @Output() sortChange = new EventEmitter<string>();
}
