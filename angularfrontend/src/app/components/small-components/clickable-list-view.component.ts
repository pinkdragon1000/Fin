import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-clickable-list-view-component',
  template: `
    <div class="clickable-list">
      <a href="{{ link }}" title="View Account">
        <div class="space-between">
          <p>{{ name }}</p>
          <p>\${{ amount }}</p>
        </div>
      </a>
    </div>
  `,
  styles: [
    `
      .clickable-list {
        width: 85%;
      }
      div {
        background: var(--fin-neutral-6);
        padding: 0.7rem;
        border-radius: 0.625rem;
      }
      .space-between {
        display: flex;
        justify-content: space-between;
      }
    `,
  ],
})
export class ClickableListViewComponent {
  @Input() link: string;
  @Input() amount: string;
  @Input() name: string;
}
