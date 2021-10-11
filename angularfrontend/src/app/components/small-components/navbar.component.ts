import { Component, Input, OnInit } from '@angular/core';
import { APIService } from './../api.service';

@Component({
  selector: 'navbar-component',
  template: `
    <div class="row navbar">
      <div class="column center">
        <img src="../../assets/logo.svg" rel="icon" alt="" class="logo" />
      </div>

      <h3 *ngIf="!userData" class="name">Welcome!</h3>
      <h3 *ngIf="userData" class="name">Welcome {{ this.userData }}!</h3>

      <ul class="nav navbar-nav navbar-right">
        <li class="nav-item" routerLinkActive="active">
          <a routerLink="/addAccounts">
            <p class="white-text">Add Accounts</p>
          </a>
        </li>
        <li class="nav-item" routerLinkActive="active">
          <a routerLink="/manageAccounts">
            <p class="white-text">Manage Accounts</p>
          </a>
        </li>

        <div style="width:2rem; border-right:0.05rem solid white;"></div>
        <li class="nav-item" routerLinkActive="active">
          <a href="/">
            <i class="fa fa-power-off"></i>
            <p class="white-text">Logout</p>
          </a>
        </li>
      </ul>
    </div>
  `,
  styles: [
    `
      .logo {
        width: 8rem;
        height: 8rem;
      }
      .name {
        width: 100%;
        color: var(--fin-white);
        font-weight: normal;
      }

      .profilelogo {
        width: 3rem;
        height: 3rem;
      }
      .navbar {
        align-items: center;
        background: var(--fin-gradient);
        border-radius: 0rem 0rem 2rem 2rem;
        min-width: 39.6875rem;
      }

      .nav {
        padding-left: 0;
        margin-bottom: 0;
        list-style: none;
        width: 50rem;
      }

      .nav > li > a {
        position: relative;
        display: block;
        padding: 0.625rem 0.9375rem;
      }

      .active {
        text-decoration: none;
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 0.625rem;
      }

      .navbar-nav > li > a {
        padding-top: 0.9375rem;
        padding-bottom: 0.9375rem;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
      }
      .navbar-right {
        float: right;
        display: flex;
        justify-content: flex-end;
        width: 95rem;
      }

      .white-text {
        color: white;
      }
    `,
  ],
})
export class NavbarComponent implements OnInit {
  @Input('childToMaster') userData: string;

  ngOnInit() {}
}
