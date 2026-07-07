import { Component, OnInit, Input } from '@angular/core';
import { UserAPIService } from '../../service/user-api.service';
import { User } from '../../models/user.models';

@Component({
  selector: 'app-page-template',
  template: `
    <app-navbar-component [userData]="this.userData"></app-navbar-component>
    <app-toast></app-toast>
    <div class="content">
      <div class="spaceBetween">
        <div>
          <h2 class="pagetitle">{{ pagetitle }}</h2>
          <p>{{ pagedirections }}</p>
        </div>
        <div class="page-action">
          <app-modal-button-component
            *ngIf="this.buttonlabel"
            [type]="'transaction'"
            [label]="this.buttonlabel"
            [class]="'primary'"
            [title]="this.buttonlabel"
            [pagetitle]="this.buttonlabel"
            [icon]="'plus'"
          >
            <ng-content select="[form]"></ng-content>
          </app-modal-button-component>
        </div>
      </div>
      <br />
      <ng-content select="[content]"></ng-content>
    </div>
  `,
  styles: [
    `
      .content {
        margin: 2rem 2rem 0rem 2rem;
      }
      .pagetitle {
        background: var(--fin-gradient);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
      }
      .spaceBetween {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
      }
      .page-action {
        margin-right: -0.375rem;
      }
    `,
  ],
})
export class PageTemplateComponent implements OnInit {
  @Input() pagedirections!: string;
  @Input() pagetitle!: string;
  @Input() buttonlabel!: string;

  userData!: string;
  userId: string = localStorage.getItem('userId');

  constructor(private userApiService: UserAPIService) {}

  ngOnInit() {
    if (localStorage.getItem('firstName') === null) {
      this.userApiService.getUserData((d: User) => {
        this.userData = d[0].fullName.split(' ')[0];
        localStorage.setItem('firstName', this.userData);
      }, this.userId);
    } else {
      this.userData = localStorage.getItem('firstName');
    }
  }
}
