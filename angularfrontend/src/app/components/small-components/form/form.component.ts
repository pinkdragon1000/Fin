import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-component',
  template: `
    <form
      #ngForm="ngForm"
      [ngClass]="{
        form: this.label !== 'Sign In' && this.label !== 'Sign Up'
      }"
    >
      <app-error-component
        *ngIf="this.error"
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
        class="button-row"
      >
        <app-button-component
          [label]="this.label"
          [class]="'primary'"
          (buttonClick)="onClick()"
          [title]="'Submit Form'"
        ></app-button-component>

        <div *ngIf="containsDelete">
          <app-button-component
            [class]="'trash'"
            (buttonClick)="onClickDeletion()"
            [title]="'Delete Item'"
          ></app-button-component>
        </div>
      </div>
    </form>
  `,
  styles: [
    `
      .login-button {
        display: flex;
        justify-content: center;
        margin-top: 0.5rem;
      }
      .button-row {
        margin-top: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.5rem;
      }
      form {
        padding: 0;
      }
      .form {
        padding: 1.5rem;
        width: 28rem;
        box-sizing: border-box;
      }
    `,
  ],
})
export class FormComponent {
  @Input() inputData: any;
  @Input() selectData: any;
  @Input() selectLabelData: any;
  @Input() error!: string;
  @Input() label!: string;
  @Input() containsDelete!: boolean;

  @Output() deletionClick: EventEmitter<string> = new EventEmitter<string>();
  onClickDeletion() {
    this.deletionClick.emit();
  }

  @Output() formSubmit: EventEmitter<string> = new EventEmitter<string>();
  onClick() {
    this.formSubmit.emit();
  }
}
