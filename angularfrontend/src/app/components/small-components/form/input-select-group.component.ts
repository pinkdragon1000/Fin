import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-select-group-component',
  template: `
    <ng-container>
      <ng-container *ngIf="selectLabelData && selectData">
        <app-select-component
          *ngFor="let select of selectData; let i = index"
          [label]="selectLabelData[i]"
          [selectData]="select"
        ></app-select-component>
      </ng-container>
      <div class="inputs" *ngFor="let input of inputData">
        <app-input-component
          [label]="input.label"
          [placeholder]="input.placeholder"
          [id]="input.id"
          [type]="input.type"
          [name]="input.name"
        ></app-input-component>
      </div>
    </ng-container>
  `,
  styles: [
    `
      .inputs {
        width: 50%;
      }
    `,
  ],
})
export class InputSelectGroupComponent {
  @Input() inputData: any;
  @Input() selectLabelData: any;
  @Input() selectData: any;
}
