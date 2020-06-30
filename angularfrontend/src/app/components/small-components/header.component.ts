import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'header-component',
  template: `
    <div class="row hero">
      <div class="column center">
        <img src="../../assets/logo.svg" rel="icon" alt="" class="logo" />
        <h1 class="fin">{{ maintitle }}</h1>
        <p class="tag-line">{{ tagline }}</p>
      </div>
    </div>
  `,
  styles: [
    `
      .hero {
        align-items: center;
        background: var(--fin-gradient);
        border-radius: 0rem 0rem 2rem 2rem;
        justify-content: center;
      }

      .fin {
        color: var(--fin-white);
        font-family: 'Courgette', cursive;
        font-size: 6rem;
        text-shadow: 0.07rem 0.07rem var(--fin-neutral-1);
      }

      .tag-line {
        color: var(--fin-white);
      }

      img {
        padding-right: 2rem;
      }
    `,
  ],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  @Input() maintitle: string;
  @Input() tagline: string;

  ngOnInit(): void {}
}
