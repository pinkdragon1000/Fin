import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from './help-modal.service';

@Component({
  selector: 'app-help-modal-button-component',
  template: `
    <button class="btn-help" (click)="openModal('custom-modal-1')">?</button>

    <app-modal-component id="custom-modal-1">
      <div class="float-right">
        <button class="secondary" (click)="closeModal('custom-modal-1')">
          X
        </button>
      </div>
      <p class="modaltext">{{ modaltext }}</p>
      <ng-content></ng-content>
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

      #custom-modal-1{
        display: none;
      }
    `,
  ],
})
export class HelpModalButtonComponent implements OnInit {
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
