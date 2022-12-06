import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table-component',
  template: `
    <p>{{ tableLabel }}</p>
    <table>
      <tr class="tableHeaders">
        <th *ngFor="let header of headerData">
          {{ header }}
        </th>
      </tr>
      <ng-content></ng-content>
    </table>
  `,
  styles: [
    `
      .tableHeaders {
        position: sticky;
        top: 0;
      }
      th {
        background-color: var(--fin-neutral-7);
        color: var(--fin-neutral-1);
      }
      table {
        border-collapse: collapse;
        width: 100%;
      }
      td,
      th {
        border: 0.063rem solid var(--fin-neutral-5);
        text-align: left;
        padding: 0.5rem;
      }
    `,
  ],
})
export class TableComponent {
  @Input() headerData: any;
  @Input() tableLabel: string;
}
