import {
  Component,
  ViewEncapsulation,
  ElementRef,
  HostBinding,
  Input,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
} from '@angular/core';

import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal-component',
  template: `
    <div class="modal">
      <div class="modal-body">
        <div class="modal-header">
          <h2 class="pagetitle">{{ pagetitle }}</h2>
          <app-button-component
            [label]="'✕'"
            [class]="'secondary close-btn'"
            (click)="this.close()"
            [title]="'Close Modal'"
          >
          </app-button-component>
        </div>
        <div class="modaltext">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
    <div class="modal-background"></div>
  `,
  styles: [
    `
      app-modal-component {
        display: none;
      }
      .modal {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1000;
        overflow-y: auto;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        padding: 4rem 1rem;
      }
      .modal-body {
        background: var(--fin-white);
        border-radius: var(--fin-radius-lg);
        box-shadow: 0 24px 64px rgba(0, 0, 0, 0.18), 0 4px 16px rgba(0, 0, 0, 0.08);
        width: 100%;
        max-width: 40rem;
        border: 1px solid rgba(0, 0, 0, 0.06);
        position: relative;
        z-index: 1001;
      }
      .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.5rem 2rem 1rem;
        border-bottom: 1px solid var(--fin-neutral-5);
      }
      .modal-background {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(26, 26, 26, 0.55);
        backdrop-filter: blur(2px);
        -webkit-backdrop-filter: blur(2px);
        z-index: 900;
      }
      body.modal-open {
        overflow: hidden;
      }
      .modaltext {
        padding: 1.5rem 2rem 2rem;
      }
      .pagetitle {
        background: var(--fin-gradient);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
        margin: 0;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() id!: string;
  @HostBinding('attr.id') get hostId() { return this.id; }
  @Output() click: EventEmitter<string> = new EventEmitter<string>();
  @Input() pagetitle!: string;

  private element: any;

  constructor(private modalService: ModalService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  onClick() {
    this.click.emit();
  }

  ngOnInit(): void {
    if (!this.id) {
      console.error('modal must have an id');
      return;
    }

    document.body.appendChild(this.element);

    this.element.addEventListener('click', (el) => {
      if (el.target.className === 'modal') {
        this.close();
      }
    });

    this.modalService.add(this);
  }

  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }

  open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('modal-open');
  }

  close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('modal-open');
  }
}
