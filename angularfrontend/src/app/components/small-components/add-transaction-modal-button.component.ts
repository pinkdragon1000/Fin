import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from './help-modal.service';

@Component({
  selector: 'add-transaction-button-component',
  template: `
  <button (click)="openModal('custom-modal-2')" class="primary round">
  Add Transaction
</button>

    <modal id="custom-modal-2">
      <div class="float-right">
        <button class="secondary" (click)="closeModal('custom-modal-2')">
          X
        </button>
      </div>
      <ng-content></ng-content>
    </modal>
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
  constructor(private modalService: ModalService) {}

  @Input() modaltext: string;
  ngOnInit(): void {}

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}