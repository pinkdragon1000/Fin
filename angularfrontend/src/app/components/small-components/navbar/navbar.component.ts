import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-component',
  template: `
    <div class="row navbar">
      <div class="column center">
        <img src="../../assets/logo.svg" rel="icon" alt="" class="logo" />
      </div>

      <h1 *ngIf="!userData" class="name">Welcome!</h1>
      <h1 *ngIf="userData" class="name">Welcome {{ this.userData }}!</h1>

      <app-nav-items-component
        [items]="this.navItems"
      ></app-nav-items-component>
    </div>
  `,
  styles: [
    `
      .navbar {
        align-items: center;
        background: var(--fin-gradient);
        border-radius: 0rem 0rem 2rem 2rem;
        min-width: 39.6875rem;
      }
      .logo {
        width: 8rem;
        height: 8rem;
      }
      .name {
        width: 100%;
        color: var(--fin-white);
        font-weight: normal;
      }
    `,
  ],
})
export class NavbarComponent {
  @Input() userData: string;

  navItems = [
    {
      link: '/manageAccounts',
      label: 'Manage Accounts',
      activeLink: 'active',
    },
    {
      link: '',
      label: 'Logout',
    },
  ];
}
