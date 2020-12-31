import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from '../small-components/help-modal.service';

@Component({
  selector: 'help-modal-button-component',
  template: `
  <button class="btn-help" (click)="openModal('custom-modal-1')">?</button>
  
  <modal id="custom-modal-1">
  <div class="float-right">
  <button class="secondary" (click)="closeModal('custom-modal-1');"> X</button>
  </div>
    <p>{{modaltext}}</p>
    
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
export class HelpModalButtonComponent implements OnInit {
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
