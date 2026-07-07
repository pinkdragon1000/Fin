import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-component',
  template: `
    <div class="row hero">
      <div class="column center">
        <div class="row center">
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
        border-radius: 0 0 2rem 2rem;
        justify-content: center;
        padding: 1.75rem 2rem;
        box-shadow: 0 4px 20px rgba(233, 64, 87, 0.2);
      }

      .fin {
        color: var(--fin-white);
        font-family: 'Courgette', cursive;
        font-size: 3.5rem;
        text-shadow: 0 0.125rem rgb(0 0 0 / 14%);
        font-weight: 400;
        margin-left: 0.75rem;
      }

      .tag-line {
        color: rgba(255, 255, 255, 0.88);
        font-size: 1rem;
        margin: 0;
      }

      img {
        width: 7rem;
        height: 7rem;
      }
    `,
  ],
})
export class HeaderComponent {
  @Input() maintitle!: string;
  @Input() tagline!: string;
}
