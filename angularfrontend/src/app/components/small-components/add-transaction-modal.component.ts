import {
  Component,
  ViewEncapsulation,
  ElementRef,
  Input,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { AddTransactionModalService } from './add-transaction-modal.service';

@Component({
  selector: 'app-add-transaction-modal',
  template: `
    <div class="modal">
      <div class="modal-body">
        <ng-content></ng-content>
      </div>
    </div>
    <div class="modal-background"></div>
  `,
  styles: [
    `
      modal {
        display: none;
      }
      .modal {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1000;
        overflow: auto;
      }
      .modal .modal-body {
        padding: 1.25rem;
        background: #fff;
        margin: 16rem;
        border-radius: 2rem;
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
      body.modal-open-2 {
        overflow: hidden;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class AddTransactionModalComponent implements OnInit, OnDestroy {
  @Input() id: string;
  private element: any;

  constructor(
    private addTransactionModalService: AddTransactionModalService,
    private el: ElementRef
  ) {
    this.element = el.nativeElement;
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
    this.addTransactionModalService.add(this);
  }

  // remove self from modal service when component is destroyed
  ngOnDestroy(): void {
    this.addTransactionModalService.remove(this.id);
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
