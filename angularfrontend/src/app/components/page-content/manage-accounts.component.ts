import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'manage-accounts-content-component',
  template: `
    <page-template [pagedirections]="'Click on an account to view and add information'">
      <app-emptycontent
        emptyHeader="No Accounts Yet"
        emptyPar="Click 'Add Accounts' in the navbar to add an account. "
      ></app-emptycontent>
    </page-template>
  `,
  styles: [`
  `],
})
export class ManageAccountsComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

}
