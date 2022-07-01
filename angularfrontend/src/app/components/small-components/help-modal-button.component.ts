import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-help-modal-button-component',
  template: `
    <app-button-component
      [label]="'?'"
      [class]="'btn-help'"
      (click)="openModal('custom-modal-1')"
    >
    </app-button-component>

    <app-modal-component id="custom-modal-1">
      <div class="float-right">
        <app-button-component
          [label]="'X'"
          [class]="'secondary'"
          (click)="closeModal('custom-modal-1')"
        >
        </app-button-component>
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

      #custom-modal-1 {
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
