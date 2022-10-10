import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-component',
  template: `
    <form
      #ngForm="ngForm"
      (ngSubmit)="(this.click)"
      [ngClass]="{
        form: this.label !== 'Sign In' && this.label !== 'Sign Up'
      }"
    >
      <app-error-component
        *ngIf="ngForm.submitted && this.error"
        [error]="this.error"
      ></app-error-component>
      <app-input-select-group-component
        [inputData]="this.inputData"
        [selectData]="this.selectData"
        [selectLabelData]="this.selectLabelData"
      >
      </app-input-select-group-component>
      <div
        [ngClass]="{
          'login-button': this.label === 'Sign In' || this.label === 'Sign Up'
        }"
      >
        <app-button-component
          [label]="this.label"
          [class]="'primary'"
        ></app-button-component>
      </div>
    </form>
  `,
  styles: [
    `
      .login-button {
        display: flex;
        justify-content: center;
      }

      .form {
        width: calc(30rem);
      }
    `,
  ],
})
export class FormComponent {
  @Input() inputData: any;
  @Input() selectData: any;
  @Input() selectLabelData: any;
  @Input() error: string;
  @Input() label: string;

  @Output() click: EventEmitter<string> = new EventEmitter<string>();
  onClick() {
    this.click.emit();
  }
}
