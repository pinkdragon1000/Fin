import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar-component',
  template: `
    <div class="row navbar">
      <div class="column center">
        <img src="../../assets/logo.svg" rel="icon" alt="" class="logo" />
      </div>

      <ul class="nav navbar-nav navbar-right">
        <li routerLinkActive="active">
          <a href="/addAccounts">
            <i class="fa fa-user"></i>
            <p class="white-text">Add Accounts</p>
          </a>
        </li>
        <li routerLinkActive="active">
          <a routerLink="/manageAccounts">
            <i class="fa fa-plus-circle"> </i>
            <p class="white-text">Manage Accounts</p>
          </a>
        </li>

        <li routerLinkActive="active">
          <a href="/profile">
            <i class="fa fa-user"></i>
            <p class="white-text">Profile</p>
          </a>
        </li>
        <div style="width:2rem; border-right:0.05rem solid white;"></div>
        <li>
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
      .navbar {
        align-items: center;
        background: var(--fin-gradient);
        border-radius: 0rem 0rem 2rem 2rem;
        min-width: 635px;
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

      .nav > li > a:hover,
      .nav > li > a:focus,
      .nav > li > a:active {
        text-decoration: none;
        background-color: rgba(255, 255, 255, 0.2);
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
  constructor() {}

  ngOnInit(): void {}
}
