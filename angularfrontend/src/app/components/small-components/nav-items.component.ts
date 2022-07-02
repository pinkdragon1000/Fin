import { Component, Input, OnInit } from '@angular/core';

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
      .nav {
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
        width: 78rem;
      }

      .white-text {
        color: white;
      }
    `,
  ],
})
export class NavItemsComponent implements OnInit {
  @Input() items: any;

  ngOnInit() {}
}
