import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-items-component',
  template: `
    <ul class="nav navbar-right">
      <li
        class="nav-item"
        routerLinkActive="{{ item.activeLink }}"
        *ngFor="let item of items"
      >
        <a routerLink="{{ item.link }}">
          <p class="white-text">{{ item.label }}</p>
        </a>
      </li>
    </ul>
  `,
  styles: [
    `
      .nav > li > a {
        position: relative;
        display: block;
        padding: 0.625rem 0.9375rem;
      }

      .nav-item {
        width: 11.5rem;
      }

      .active {
        text-decoration: none;
        background-color: var(--fin-white-transparent);
        border-radius: 0.625rem;
      }

      .navbar-right {
        padding-left: 0;
        margin-bottom: 0;
        list-style: none;
        padding-top: 0.9375rem;
        padding-bottom: 0.9375rem;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        float: right;
        display: flex;
        justify-content: flex-end;
      }

      .white-text {
        color: var(--fin-white);
      }
    `,
  ],
})
export class NavItemsComponent {
  @Input() items: any;
}
