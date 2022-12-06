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
        <div *ngIf="input.value">
          <app-input-component
            [label]="input.label"
            [placeholder]="input.placeholder"
            [id]="input.id"
            [type]="input.type"
            [name]="input.name"
            [min]="input.min"
            [required]="input.required"
            [value]="input.value"
          ></app-input-component>
        </div>

        <div *ngIf="!input.value">
          <app-input-component
            [label]="input.label"
            [placeholder]="input.placeholder"
            [id]="input.id"
            [type]="input.type"
            [name]="input.name"
            [min]="input.min"
            [required]="input.required"
          ></app-input-component>
        </div>
      </div>
    </ng-container>
  `,
  styles: [
    `
      .inputs {
        width: 91%;
      }
    `,
  ],
})
export class InputSelectGroupComponent {
  @Input() inputData: any;
  @Input() selectLabelData: any;
  @Input() selectData: any;
}
