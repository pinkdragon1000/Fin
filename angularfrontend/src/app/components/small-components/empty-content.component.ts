import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-emptycontent-component',
  template: `
    <div class="wrapper">
      <img src="../../assets/empty.svg" rel="icon" alt="" class="emptyicon" />
      <br />

      <div class="row">
        <h3>{{ emptyHeader }}</h3>
      </div>
      <br />
      <p class="space">{{ emptyPar }}</p>
    </div>
  `,
  styles: [
    `
      .emptyicon {
        padding-left: 3rem;
      }
      .wrapper {
        display: flex;
        flex-direction: column;
        padding: 0.3rem;
        align-items: center;
      }
    `,
  ],
})
export class EmptyContentComponent {
  @Input() emptyHeader: string;
  @Input() emptyPar: string;
}
