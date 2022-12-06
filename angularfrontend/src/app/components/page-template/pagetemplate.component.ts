import { Component, OnInit, Input } from '@angular/core';
import { UserAPIService } from '../../service/user-api.service';
import { User } from '../../models/user.models';

@Component({
  selector: 'app-page-template',
  template: `
    <app-navbar-component [userData]="this.userData"></app-navbar-component>
    <div class="content">
      <div class="spaceBetween">
        <div>
          <h2 class="pagetitle">{{ pagetitle }}</h2>
          <p>{{ pagedirections }}</p>
        </div>
        <app-modal-button-component
          *ngIf="this.buttonlabel"
          [type]="'transaction'"
          [label]="this.buttonlabel"
          [class]="'primary'"
          [title]="this.buttonlabel"
          [pagetitle]="this.buttonlabel"
        >
          <ng-content select="[form]"></ng-content>
        </app-modal-button-component>
      </div>
      <br />
      <ng-content select="[content]"></ng-content>
    </div>
    <app-modal-button-component
      [type]="'help'"
      [label]="'?'"
      [title]="'Help'"
      [class]="'btn-help'"
      [pagetitle]="'Help'"
    >
      <p>
        To add an account click Add An Account. To view accounts click Manage
        Accounts. To add transactions for a specific account click on that
        account.
      </p>
    </app-modal-button-component>
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
        justify-content: space-between;
      }
    `,
  ],
})
export class PageTemplateComponent implements OnInit {
  @Input() pagedirections: string;
  @Input() pagetitle: string;
  @Input() buttonlabel: string;

  userData: string;
  userId: string = sessionStorage.getItem('userId');

  constructor(private userApiService: UserAPIService) {}

  ngOnInit() {
    if (sessionStorage.getItem('firstName') === null) {
      this.userApiService.getUserData((d: User) => {
        this.userData = d[0].fullName.split(' ')[0];
        sessionStorage.setItem('firstName', this.userData);
      }, this.userId);
    } else {
      this.userData = sessionStorage.getItem('firstName');
    }
  }
}
