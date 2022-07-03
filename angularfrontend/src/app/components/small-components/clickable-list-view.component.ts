import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-clickable-list-view',
  template: `
    <div class="clickable-list">
      <a href="{{ link }}">
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
        width: 90%;
      }
      div {
        background: var(--fin-neutral-5);
        padding: 1rem;
        border-radius: 0.625rem;
      }

      .space-between {
        display: flex;
        justify-content: space-between;
      }
    `,
  ],
})
export class ClickableListViewComponent implements OnInit {
  @Input() link: string;
  @Input() amount: string;
  @Input() name: string;
  constructor() {}
  ngOnInit(): void {}
}
