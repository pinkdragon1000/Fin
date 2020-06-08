import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  template: `
    <app-pagetemplate>
      <div class="profile">
        <div class="inputs">
          <input-component
            [label]="'Full Name'"
            [placeholder]="'Type in your full name'"
            [type]="'name'"
            [name]="'name'"
            [required]="'true'"
          ></input-component>
        </div>
      </div>
    </app-pagetemplate>
  `,
  styles: [
    `
      .inputs {
        justify-content: center;
        display: flex;
      }
    `,
  ],
})
export class ProfileComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
