import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-component',
  template: `
    <div class="row hero">
      <div class="column center">
        <div class="row">
          <img src="../../assets/logo.svg" rel="icon" alt="" class="logo" />
          <h1 class="fin">{{ maintitle }}</h1>
        </div>
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
        padding: 6rem;
      }

      .fin {
        color: var(--fin-white);
        font-family: 'Courgette', cursive;
        font-size: 4rem;
        text-shadow: 0rem 0.125rem rgb(0 0 0 / 16%);
        font-weight: 300;
      }

      .tag-line {
        color: var(--fin-white);
      }

      img {
        padding-right: 1rem;
        width: 9.813rem;
        height: 5.188rem;
      }
    `,
  ],
})
export class HeaderComponent {
  @Input() maintitle: string;
  @Input() tagline: string;
}
