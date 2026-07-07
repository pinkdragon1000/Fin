import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-input-select-group-component',
  template: `
    <ng-container>
      <ng-container *ngIf="selectLabelData && selectData">
        <app-select-component
          *ngFor="let select of selectData; let i = index"
          [label]="selectLabelData[i]"
          [selectData]="select"
          [disabled]="isSelectDisabled(select)"
          (selectionChange)="selectHandler($event)"
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
            [disabled]="input.disabled"
            [datalistOptions]="suggestionsForInput(input)"
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
            [disabled]="input.disabled"
            [datalistOptions]="suggestionsForInput(input)"
          ></app-input-component>
        </div>
      </div>
    </ng-container>
  `,
  styles: [
    `
      .inputs {
        width: 100%;
      }
    `,
  ],
})
export class InputSelectGroupComponent implements OnChanges {
  @Input() inputData: any;
  @Input() selectLabelData: any;
  @Input() selectData: any;

  selectedOption!: string;

  ngOnChanges() {
    this.selectedOption = this.getInitialSelectedOption();
  }

  selectHandler(option: string) {
    this.selectedOption = option;
  }

  suggestionsForInput(input: any): string[] {
    if (!input.suggestions) {
      return [];
    }

    return input.suggestions[this.selectedOption] ?? [];
  }

  isSelectDisabled(select: any[]): boolean {
    return select?.some((option: any) => option.lockSelect) ?? false;
  }

  private getInitialSelectedOption(): string {
    const firstSelect = this.selectData?.[0] ?? [];
    const selected = firstSelect.find((option: any) => option.selected);
    const defaultOption = firstSelect.find((option: any) => !option.disabled);

    return (selected ?? defaultOption)?.description;
  }
}
