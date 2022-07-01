import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-add-transaction-button-component',
  template: `
    <app-button-component
      [label]="'Add Transaction'"
      [class]="'primary'"
      (click)="openModal('custom-modal-2')"
    >
      Add Transaction
    </app-button-component>

    <app-modal-component id="custom-modal-2">
      <div class="float-right">
        <app-button-component
          [label]="'X'"
          [class]="'secondary'"
          (click)="closeModal('custom-modal-2')"
        >
        </app-button-component>
      </div>
      <div class="modaltext">
        <ng-content></ng-content>
      </div>
    </app-modal-component>
  `,
  styles: [
    `
      .float-right {
        float: right;
      }
      .modaltext {
        padding: 4rem;
      }
      #custom-modal-2 {
        display: none;
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
