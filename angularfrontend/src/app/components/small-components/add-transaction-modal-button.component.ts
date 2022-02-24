import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from './help-modal.service';

@Component({
  selector: 'app-add-transaction-button-component',
  template: `
    <button (click)="openModal('custom-modal-2')" class="primary round">
      Add Transaction
    </button>

    <app-modal-component id="custom-modal-2">
      <div class="float-right">
        <button class="secondary" (click)="closeModal('custom-modal-2')">
          X
        </button>
      </div>
      <ng-content></ng-content>
    </app-modal-component>
  `,
  styles: [
    `
      .float-right {
        float: right;
      }
    `,
  ],
})
export class AddTransactionButtonComponent implements OnInit {
  @Input() modaltext: string;
  constructor(private modalService: ModalService) {}
  ngOnInit(): void {}

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
