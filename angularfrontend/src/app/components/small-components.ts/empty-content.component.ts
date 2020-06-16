import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-emptycontent',
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
        align-items: center;
        flex-direction: column;
        padding-top: 2rem;
        width: 100%;
      }
    `,
  ],
})
export class EmptyContentComponent implements OnInit {
  constructor() {}
  @Input() emptyHeader: string;
  @Input() emptyPar: string;

  ngOnInit(): void {}
}
