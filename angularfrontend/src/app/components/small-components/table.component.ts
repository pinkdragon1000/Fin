import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-component',
  template: `
    <p>{{ tableLabel }}</p>
    <table>
      <tr>
        <th *ngFor="let header of headerData">{{ header }}</th>
      </tr>
      <ng-content></ng-content>
    </table>
  `,
  styles: [
    `
      th {
        background-color: var(--fin-neutral-6);
        color: var(--fin-neutral-1);
      }

      table {
        border-collapse: collapse;
        width: 100%;
      }

      td,
      th {
        border: 0.063rem solid #dddddd;
        text-align: left;
        padding: 0.5rem;
      }
    `,
  ],
})
export class TableComponent implements OnInit {
  @Input() headerData: any;
  @Input() tableLabel: string;

  ngOnInit() {}
}
