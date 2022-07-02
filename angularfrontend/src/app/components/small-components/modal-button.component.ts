import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal-button-component',
  template: `
    <p class="hidden">{{ type }}</p>
    <div *ngIf="this.type === 'help'">
      <app-button-component
        [label]="'?'"
        [class]="'btn-help'"
        (click)="openModal('help')"
      >
      </app-button-component>
    </div>

    <div *ngIf="this.type === 'transaction'">
      <app-button-component
        [label]="'Add Transaction'"
        [class]="'primary'"
        (click)="openModal('transaction')"
      >
      </app-button-component>
    </div>
    <app-modal-component id="{{ type }}" (click)="closeModal(this.type)">
      <ng-content></ng-content>
    </app-modal-component>
  `,
  styles: [
    `
      #help {
        display: none;
      }
      #transaction {
        display: none;
      }

      .hidden {
        display: none;
      }
    `,
  ],
})
export class ModalButtonComponent implements OnInit {
  @Input() type: string;
  constructor(private modalService: ModalService) {}
  ngOnInit(): void {}

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
