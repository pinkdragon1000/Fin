import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-clickable-list-view-component',
  template: `
    <div class="account-card">
      <a href="{{ link }}" title="View Account" class="card-link">
        <div class="card-content">
          <div class="account-info">
            <span class="account-name">{{ name }}</span>
          </div>
          <div class="amount-badge">
            <span class="currency">$</span>
            <span class="amount">{{ amount }}</span>
          </div>
        </div>
        <svg class="arrow" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 12h12"></path>
          <path d="M12 7l5 5-5 5"></path>
        </svg>
      </a>
    </div>
  `,
  styles: [
    `
      .account-card {
        width: 100%;
        background: var(--fin-white);
        border-radius: var(--fin-radius);
        border: 1px solid var(--fin-neutral-5);
        box-shadow: var(--fin-shadow-xs);
        transition: box-shadow 0.2s, transform 0.15s, border-color 0.2s;
        overflow: hidden;
      }
      .account-card:hover {
        box-shadow: var(--fin-shadow-md);
        transform: translateY(-1px);
        border-color: var(--fin-neutral-4);
      }
      .card-link {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 1.25rem;
        color: inherit;
        text-decoration: none;
      }
      .card-link:hover {
        opacity: 1;
      }
      .card-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex: 1;
        gap: 1rem;
      }
      .account-info {
        display: flex;
        align-items: center;
        gap: 0.75rem;
      }
      .account-name {
        font-size: 0.9375rem;
        font-weight: 500;
        color: var(--fin-black);
      }
      .amount-badge {
        display: flex;
        align-items: baseline;
        gap: 0.1rem;
        background: var(--fin-neutral-6);
        padding: 0.25rem 0.75rem;
        border-radius: var(--fin-radius-full);
        border: 1px solid var(--fin-neutral-5);
      }
      .currency {
        font-size: 0.75rem;
        color: var(--fin-neutral-2);
        font-weight: 500;
      }
      .amount {
        font-size: 0.9375rem;
        font-weight: 600;
        color: var(--fin-black);
      }
      .arrow {
        color: var(--fin-neutral-3);
        width: 1.0625rem;
        height: 1.0625rem;
        fill: none;
        stroke: currentColor;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 2;
        margin-left: 1rem;
        transition: color 0.15s, transform 0.15s;
        flex: 0 0 1.0625rem;
      }
      .account-card:hover .arrow {
        color: var(--fin-pink);
        transform: translateX(3px);
      }
    `,
  ],
})
export class ClickableListViewComponent {
  @Input() link!: string;
  @Input() amount!: string;
  @Input() name!: string;
}
