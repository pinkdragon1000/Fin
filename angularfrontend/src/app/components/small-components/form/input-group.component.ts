import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-group-component',
  template: `
    <div class="inputs" *ngFor="let input of inputData">
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
  `,
  styles: [
    `
      .inputs {
        width: 91%;
      }
    `,
  ],
})
export class InputGroupComponent {
  @Input() inputData: any;
}
