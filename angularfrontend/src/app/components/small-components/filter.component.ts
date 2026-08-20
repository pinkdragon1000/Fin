import { Component, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter-component',
  template: `
    <ng-container>
      <div class="column" *ngIf="this.data">
        <label class="filterLabel">{{ this.label }}</label>
        <select
          class="filterSelect"
          [ngModel]="model"
          (ngModelChange)="change($event)"
          title="{{ this.label }}"
        >
          <option *ngFor="let d of data" [value]="d">
            {{ d === null ? 'All' : d }}
          </option>
        </select>
      </div>
      <div class="column filterBox" *ngIf="!this.data && !this.options">
        <label class="filterLabel" id="{{ this.label }}">{{ this.label }}</label>
        <div class="search-wrapper">
          <input
            class="filterSearch"
            type="text"
            name="search"
            title="{{ this.label }}"
            [ngModel]="model"
            (ngModelChange)="change($event)"
            autocomplete="off"
            placeholder="Search ..."
          />
          <button *ngIf="model" class="search-clear" type="button" (click)="change('')" title="Clear">✕</button>
        </div>
      </div>

      <div class="column filterBox" *ngIf="!this.data && this.options">
        <label class="filterLabel" id="{{ this.label }}">{{ this.label }}</label>
        <div class="search-wrapper" (keydown)="onKeydown($event)">
          <input
            class="filterSearch filterSearch--combo"
            [class.has-value]="model"
            type="text"
            name="search"
            title="{{ this.label }}"
            [ngModel]="model"
            (ngModelChange)="change($event)"
            (focus)="openList()"
            autocomplete="off"
            placeholder="All"
            role="combobox"
            [attr.aria-expanded]="open"
            aria-autocomplete="list"
          />
          <div class="combo-actions">
            <button *ngIf="model" class="search-clear" type="button" (click)="change('')" title="Clear">✕</button>
            <button
              class="combo-toggle"
              type="button"
              (click)="toggleList()"
              [attr.aria-label]="'Show ' + this.label + ' options'"
            >
              <svg class="combo-icon" [class.combo-icon--open]="open" viewBox="0 0 12 12" aria-hidden="true">
                <path d="M2 4.5L6 8.5L10 4.5"></path>
              </svg>
            </button>
          </div>
          <ul class="combo-list" *ngIf="open && matchingOptions.length > 0" role="listbox">
            <li
              *ngFor="let option of matchingOptions; let i = index"
              role="option"
              [attr.aria-selected]="option === model"
              [class.highlighted]="i === highlighted"
              (click)="select(option)"
              (mouseenter)="highlighted = i"
            >
              {{ option }}
            </li>
          </ul>
        </div>
      </div>
    </ng-container>
  `,
  styles: [
    `
      .filterLabel {
        color: var(--fin-neutral-1);
        font-size: 0.875rem;
        font-weight: 600;
        margin-bottom: 0.25rem;
      }
      .filterSearch,
      .filterSelect {
        border-radius: var(--fin-radius-sm);
        font-size: 0.9rem;
        font-family: Inter, sans-serif;
        height: 2.25rem;
        padding: 0 1rem;
        border: 1px solid var(--fin-neutral-5);
        margin: 0.25rem 0;
        background: var(--fin-white);
        color: var(--fin-black);
        box-shadow: var(--fin-shadow-xs);
        transition: border-color 0.15s, box-shadow 0.15s;
        -webkit-appearance: none;
        appearance: none;
      }
      .filterSelect {
        padding-right: 2.25rem;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right 0.75rem center;
        background-size: 0.75rem;
      }
      .search-wrapper {
        position: relative;
        display: flex;
        align-items: center;
      }
      .search-wrapper .filterSearch {
        width: 100%;
        padding-right: 2rem;
        box-sizing: border-box;
      }
      .search-clear {
        position: absolute;
        right: 0.5rem;
        background: none;
        border: none;
        cursor: pointer;
        color: var(--fin-neutral-3);
        font-size: 0.7rem;
        width: 1.25rem;
        height: 1.25rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        transition: background 0.15s, color 0.15s;
        line-height: 1;
      }
      .search-clear:hover {
        background: var(--fin-neutral-5);
        color: var(--fin-black);
      }
      .search-wrapper .filterSearch--combo {
        padding-right: 2rem;
      }
      .search-wrapper input.filterSearch--combo.has-value {
        padding-right: 3.25rem;
      }
      .combo-actions {
        position: absolute;
        right: 0.4rem;
        display: flex;
        align-items: center;
        gap: 0.125rem;
      }
      .combo-actions .search-clear {
        position: static;
        right: auto;
      }
      .combo-toggle {
        background: none;
        border: none;
        cursor: pointer;
        color: var(--fin-neutral-3);
        width: 1.25rem;
        height: 1.25rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        transition: background 0.15s, color 0.15s;
      }
      .combo-toggle:hover {
        background: var(--fin-neutral-5);
        color: var(--fin-black);
      }
      .combo-icon {
        width: 0.75rem;
        height: 0.75rem;
        fill: none;
        stroke: currentColor;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 1.75;
        transition: transform 0.15s;
      }
      .combo-icon--open {
        transform: rotate(180deg);
      }
      .combo-list {
        position: absolute;
        top: calc(100% - 0.15rem);
        left: 0;
        right: 0;
        z-index: 20;
        list-style: none;
        margin: 0;
        padding: 0.25rem;
        max-height: 13rem;
        overflow-y: auto;
        background: var(--fin-white);
        border: 1px solid var(--fin-neutral-5);
        border-radius: var(--fin-radius-sm);
        box-shadow: var(--fin-shadow-md);
      }
      .combo-list li {
        padding: 0.4375rem 0.625rem;
        border-radius: var(--fin-radius-sm);
        font-size: 0.875rem;
        color: var(--fin-black);
        cursor: pointer;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .combo-list li.highlighted {
        background: var(--fin-neutral-7);
        color: var(--fin-pink);
      }
      .filterSearch:focus,
      .filterSelect:focus {
        outline: none;
        border-color: var(--fin-pink);
        box-shadow: 0 0 0 3px rgba(233, 64, 87, 0.12);
      }
    `,
  ],
})
export class FilterComponent {
  @Input() label!: string;
  @Input() data: any;
  @Input() options: string[];

  @Input() model!: string;
  @Output() modelChange = new EventEmitter<string>();
  @Output() searchChange = new EventEmitter<string>();

  open = false;
  highlighted = -1;

  constructor(private elementRef: ElementRef) {}

  get matchingOptions(): string[] {
    const search = (this.model ?? '').trim().toLowerCase();
    if (!search) {
      return this.options ?? [];
    }
    return (this.options ?? []).filter((option) => option.toLowerCase().includes(search));
  }

  change(newValue: string) {
    this.model = newValue;
    this.highlighted = -1;
    if (this.options) {
      this.open = true;
    }
    this.modelChange.emit(newValue);
    this.searchChange.emit(newValue);
  }

  openList() {
    this.open = true;
    this.highlighted = -1;
  }

  toggleList() {
    this.open = !this.open;
    this.highlighted = -1;
  }

  select(option: string) {
    this.open = false;
    this.highlighted = -1;
    this.model = option;
    this.modelChange.emit(option);
    this.searchChange.emit(option);
  }

  onKeydown(event: KeyboardEvent) {
    if (!this.options) {
      return;
    }

    const optionCount = this.matchingOptions.length;

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        if (!this.open) {
          this.open = true;
        } else if (optionCount > 0) {
          this.highlighted = (this.highlighted + 1) % optionCount;
        }
        break;
      case 'ArrowUp':
        event.preventDefault();
        if (this.open && optionCount > 0) {
          this.highlighted = (this.highlighted - 1 + optionCount) % optionCount;
        }
        break;
      case 'Enter':
        if (this.open && this.highlighted > -1 && this.highlighted < optionCount) {
          event.preventDefault();
          this.select(this.matchingOptions[this.highlighted]);
        } else {
          this.open = false;
        }
        break;
      case 'Escape':
        this.open = false;
        this.highlighted = -1;
        break;
    }
  }

  @HostListener('document:click', ['$event.target'])
  onDocumentClick(target: HTMLElement) {
    if (this.open && !this.elementRef.nativeElement.contains(target)) {
      this.open = false;
      this.highlighted = -1;
    }
  }
}
