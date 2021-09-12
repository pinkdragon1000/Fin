import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'clickable-list-view',
  template: `
    <a href="{{ link }}">
      <div class="clickable-list">
        <div class="space-between">
          <p>{{ name }}</p>
          <p>$\{{ amount }}</p>
        </div>
      </div>
    </a>
  `,
  styles: [
    `
      div {
        background: #efefef;
        width: 90%;
        padding: 1rem;
        border-radius: 10px;
      }

      .space-between {
        display: flex;
        justify-content: space-between;
      }
    `,
  ],
})
export class ClickableListView implements OnInit {
  constructor() {}
  @Input() link: string;
  @Input() amount: string;
  @Input() name: string;
  ngOnInit(): void {}
}
