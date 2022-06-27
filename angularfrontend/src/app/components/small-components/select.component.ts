import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-component',
  template: `
    <div class="selectComponent">
      <label>{{ label }}</label>
      <br />
      <select class="select" id="select">
        <option *ngFor="let option of selectData" value="{{ option.value }}">
          {{ option.description }}
        </option>
      </select>
    </div>
  `,
  styles: [
    `
      label {
        color: var(--fin-neutral-1);
      }

      .select {
        width: 52%;
      }

      select {
        border-radius: 20rem;
        font-size: 1rem;
        height: 1.5rem;
        min-width: 15rem;
        width: 100%;
        height: 3.25rem;
        padding: 0rem 1rem;
        border: 0.063rem solid var(--fin-white);
        margin: 0.5rem 0;
        background: var(--fin-neutral-6);
        color: var(--fin-neutral-1);
      }
    `,
  ],
})
export class SelectComponent implements OnInit {
  @Input() selectData: any;
  @Input() label: string;

  ngOnInit() {}
}
