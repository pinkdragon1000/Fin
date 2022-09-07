import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nav-items-component',
  template: `
    <ul class="nav">
      <li
        class="nav-item"
        routerLinkActive="{{ item.activeLink }}"
        *ngFor="let item of items"
      >
        <a
          routerLink="{{ item.link }}"
          (click)="onClick($event)"
          class="white-text"
        >
          {{ item.label }}
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

      .nav {
        list-style: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        display: flex;
      }

      .nav-item {
        width: 11.5rem;
      }

      .active {
        text-decoration: none;
        background-color: var(--fin-white-transparent);
        border-radius: 0.625rem;
      }

      .white-text {
        color: var(--fin-white);
      }
    `,
  ],
})
export class NavItemsComponent {
  @Input() items: any;

  @Output() click: EventEmitter<string> = new EventEmitter<string>();

  onClick(item: any): void {
    this.click.emit(item);

    if (
      item.target.href === 'http://localhost:4200/' ||
      item.target.href === 'https://finaccounts.web.app/'
    ) {
      console.log('clearing session...');
      sessionStorage.clear();
    }
  }
}
