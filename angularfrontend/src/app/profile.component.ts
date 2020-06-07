import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  template: `
    <app-pagetemplate>
      <div class="profile">
        <p>Profile</p>
        <div class="inputs">
          <input-component
            [label]="'Name'"
            [placeholder]="'Type in your name'"
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
      .profile {
        align-items: center;
        width: 30rem;
      }
    `,
  ],
})
export class ProfileComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
