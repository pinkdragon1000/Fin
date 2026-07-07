import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-emptycontent-component',
  template: `
    <div class="wrapper">
      <div class="icon-wrap">
        <img src="../../assets/empty.svg" rel="icon" alt="" class="emptyicon" />
      </div>
      <h3 class="empty-header">{{ emptyHeader }}</h3>
      <p class="empty-par">{{ emptyPar }}</p>
    </div>
  `,
  styles: [
    `
      .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 3rem 1rem;
        text-align: center;
      }
      .icon-wrap {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1.25rem;
        margin-left: 1.25rem;
      }
      .emptyicon {
        width: 8rem;
        height: 8rem;
      }
      .empty-header {
        color: var(--fin-black);
        font-size: 1.0625rem;
        font-weight: 600;
        margin: 0 0 0.5rem;
      }
      .empty-par {
        color: var(--fin-neutral-2);
        font-size: 0.9rem;
        max-width: 20rem;
        line-height: 1.5;
        margin: 0;
      }
    `,
  ],
})
export class EmptyContentComponent {
  @Input() emptyHeader!: string;
  @Input() emptyPar!: string;
}
