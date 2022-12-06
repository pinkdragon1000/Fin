import { Component, Input } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal-button-component',
  template: `
    <p class="hidden">{{ type }}</p>
    <app-button-component
      label="{{ this.label }}"
      class="{{ this.class }}"
      title="{{ this.title }}"
      (click)="openModal(this.type)"
    >
    </app-button-component>
    <app-modal-component id="{{ this.type }}" pagetitle="{{ this.pagetitle }}">
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
export class ModalButtonComponent {
  @Input() type: string;
  @Input() label: string;
  @Input() class: string;
  @Input() title: string;
  @Input() pagetitle: string;
  constructor(private modalService: ModalService) {}

  openModal(id: string) {
    this.modalService.open(id);
  }
}
