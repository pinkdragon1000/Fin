import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-component',
  template: `
    <div class="navbar">
      <div class="brand">
        <a href="/manageAccounts">
          <img src="../../assets/logo.svg" rel="icon" alt="Fin" class="logo" />
        </a>
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
        display: grid;
        grid-template-columns: auto minmax(12rem, 1fr) auto;
        gap: 1.5rem;
        align-items: center;
        background: var(--fin-gradient);
        border-radius: 0rem 0rem 2rem 2rem;
        box-sizing: border-box;
        min-width: 39.6875rem;
        padding: 1.25rem 2rem;
      }
      .brand {
        display: flex;
        align-items: center;
      }
      .logo {
        display: block;
        width: 4.75rem;
        height: auto;
      }
      .name {
        color: var(--fin-white);
        font-size: 1.45rem;
        font-weight: 500;
        letter-spacing: 0;
        min-width: 0;
      }
    `,
  ],
})
export class NavbarComponent {
  @Input() userData!: string;

  navItems = [
    {
      link: '/manageAccounts',
      label: 'Manage Accounts',
      activeLink: 'active',
      icon: 'grid',
    },
    {
      link: '/',
      label: 'Logout',
      action: 'logout',
      icon: 'logout',
    },
  ];
}
