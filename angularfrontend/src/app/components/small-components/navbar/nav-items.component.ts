import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nav-items-component',
  template: `
    <ul class="nav">
      <li
        class="nav-item"
        [class.nav-item--logout]="item.action === 'logout'"
        routerLinkActive="{{ item.activeLink }}"
        *ngFor="let item of items"
      >
        <a
          routerLink="{{ item.link }}"
          (click)="onClick(item)"
          class="nav-link"
        >
          <svg
            *ngIf="item.icon === 'grid'"
            class="nav-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <rect x="4" y="4" width="6" height="6" rx="1.5"></rect>
            <rect x="14" y="4" width="6" height="6" rx="1.5"></rect>
            <rect x="4" y="14" width="6" height="6" rx="1.5"></rect>
            <rect x="14" y="14" width="6" height="6" rx="1.5"></rect>
          </svg>
          <svg
            *ngIf="item.icon === 'logout'"
            class="nav-icon nav-icon--logout"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M10 5H6.5A1.5 1.5 0 0 0 5 6.5v11A1.5 1.5 0 0 0 6.5 19H10"></path>
            <path d="M9 12h10"></path>
            <path d="M14 7l5 5-5 5"></path>
          </svg>
          {{ item.label }}
        </a>
      </li>
    </ul>
  `,
  styles: [
    `
      .nav {
        list-style: none;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin: 0;
        padding: 0;
      }

      .nav-item {
        display: flex;
      }

      .nav-link {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 2.75rem;
        padding: 0 1.15rem;
        border: 1px solid transparent;
        border-radius: var(--fin-radius);
        color: var(--fin-white);
        white-space: nowrap;
        gap: 0.5rem;
        transition: background-color 0.15s, border-color 0.15s, opacity 0.15s;
      }

      .nav-link:hover {
        background-color: var(--fin-white-transparent);
        opacity: 1;
      }

      .active .nav-link {
        background-color: var(--fin-white-transparent);
      }

      .nav-item--logout .nav-link {
        border-color: var(--fin-white-transparent);
        background-color: transparent;
      }

      .nav-item--logout .nav-link:hover {
        background-color: rgba(255, 255, 255, 0.28);
      }

      .nav-icon {
        width: 1.0625rem;
        height: 1.0625rem;
        flex: 0 0 1.0625rem;
        fill: none;
        stroke: currentColor;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 2;
      }

      .nav-icon--logout {
        width: 1.125rem;
        flex-basis: 1.125rem;
      }
    `,
  ],
})
export class NavItemsComponent {
  @Input() items: any;

  @Output() click: EventEmitter<string> = new EventEmitter<string>();

  onClick(item: any): void {
    this.click.emit(item);

    if (item.action === 'logout') {
      console.log('clearing session...');
      localStorage.clear();
    }
  }
}
