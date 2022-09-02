import { Component, Input, OnInit } from '@angular/core';

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
      ></app-input-component>
    </div>
  `,
  styles: [
    `
      .inputs {
        width: 80%;
      }
    `,
  ],
})
export class InputGroupComponent implements OnInit {
  @Input() inputData: any;

  ngOnInit() {}
}
