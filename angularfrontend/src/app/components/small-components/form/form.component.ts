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
          (click)="onClick(); $event.stopPropagation()"
          [title]="'Submit Form'"
        ></app-button-component>

        <div *ngIf="containsDelete">
          <app-button-component
            [class]="'trash'"
            (click)="onClickDeletion(); $event.stopPropagation()"
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
      }

      form {
        padding: 2rem;
        background-color: var(--fin-neutral-6);
        border-radius: 0.625rem;
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
  @Input() containsDelete: boolean;

  @Output() deletionClick: EventEmitter<string> = new EventEmitter<string>();
  onClickDeletion() {
    this.deletionClick.emit();
  }

  @Output() click: EventEmitter<string> = new EventEmitter<string>();
  onClick() {
    this.click.emit();
  }
}
