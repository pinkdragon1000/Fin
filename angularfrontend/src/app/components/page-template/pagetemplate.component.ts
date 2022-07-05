import { Component, OnInit, Input } from '@angular/core';
import { UserAPIService } from '../../service/user-api.service';
import { User } from '../../models/user.models';

@Component({
  selector: 'app-page-template',
  template: `
    <app-navbar-component [userData]="this.userData"></app-navbar-component>
    <div class="content">
      <h2 class="pagetitle">{{ pagetitle }}</h2>
      <p>{{ pagedirections }}</p>
      <br />
      <ng-content></ng-content>
    </div>

    <app-modal-button-component
      [type]="'help'"
      [label]="'?'"
      [class]="'btn-help'"
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
    `,
  ],
})
export class PageTemplateComponent implements OnInit {
  @Input() pagedirections: string;
  @Input() pagetitle: string;
  userData: string;
  userId: string = sessionStorage.getItem('userId');

  constructor(private userApiService: UserAPIService) {}

  ngOnInit() {
    this.userApiService.getUserData((d: User) => {
      this.userData = d[0].fullName;
    }, this.userId);
  }
}
