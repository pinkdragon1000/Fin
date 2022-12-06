import {
  Component,
  ViewEncapsulation,
  ElementRef,
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
        <div class="spacebetween">
          <h2 class="pagetitle">{{ pagetitle }}</h2>
          <app-button-component
            [label]="'X'"
            [class]="'secondary'"
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
        overflow: hidden;
      }
      .modal .modal-body {
        padding: 1.25rem;
        background: #fff;
        margin: 10rem;
        border-radius: 0.625rem;
        min-height: 20rem;
        max-width: 80rem;
      }
      .modal-background {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: var(--fin-black-transparent);
        opacity: 0.75;
        z-index: 900;
      }
      body.modal-open {
        overflow: hidden;
      }
      .modaltext {
        padding: 1rem 4rem 4rem 4rem;
      }
      .spacebetween {
        display: flex;
        justify-content: space-between;
        padding-left: 4rem;
      }
      .pagetitle {
        background: var(--fin-gradient);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() id: string;
  @Output() click: EventEmitter<string> = new EventEmitter<string>();
  @Input() pagetitle: string;

  private element: any;

  constructor(private modalService: ModalService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  onClick() {
    this.click.emit();
  }

  ngOnInit(): void {
    // ensure id attribute exists
    if (!this.id) {
      console.error('modal must have an id');
      return;
    }

    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    document.body.appendChild(this.element);

    // close modal on background click
    this.element.addEventListener('click', (el) => {
      if (el.target.className === 'modal') {
        this.close();
      }
    });

    // add self (this modal instance) to the modal service so it's accessible from controllers
    this.modalService.add(this);
  }

  // remove self from modal service when component is destroyed
  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }

  // open modal
  open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('modal-open');
  }

  // close modal
  close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('modal-open');
  }
}
