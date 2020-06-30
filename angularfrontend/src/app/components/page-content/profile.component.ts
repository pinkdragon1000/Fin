import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile-content-component',
  template: `
    <page-template>
      <div class="profile">
        <div class="inputs">
          <div class="column">
            <input-component [type]="'file'" [name]="'file'"></input-component>

            <input-component
              [label]="'Full Name'"
              [placeholder]="'Type in your full name'"
              [type]="'name'"
              [name]="'name'"
              [required]="'true'"
            ></input-component>
          </div>
        </div>
      </div>
    </page-template>
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
