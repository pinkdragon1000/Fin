import {
  Component,
  ContentChildren,
  QueryList,
  AfterContentInit,
} from '@angular/core';
import { TabComponent } from './tab.component';

@Component({
  selector: 'app-tabs-component',
  template: `
    <ul class="navTabs">
      <li
        *ngFor="let tab of tabs"
        (click)="selectTab(tab)"
        [class.active]="tab.active"
      >
        <a class="navTabTitle" title="{{ tab.title }}">{{ tab.title }}</a>
      </li>
    </ul>
    <ng-content></ng-content>
  `,
  styles: [
    `
      .navTabs {
        display: inline-block;
        list-style: none;
        padding: 0.14rem;
        display: flex;
        border-bottom: 0.1rem solid #dddddd;
        justify-content: center;
      }

      li {
        cursor: pointer;
      }

      .navTabTitle {
        color: var(--fin-neutral-2);
        font-size: 1.125rem;
        padding-left: 2rem;
        padding-right: 2rem;
      }

      .navTabs > li.active > a {
        color: var(--fin-black);
        border-bottom: 0.14rem solid var(--fin-pink);
      }
    `,
  ],
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  // contentChildren are set
  ngAfterContentInit() {
    // get all active tabs
    const activeTabs = this.tabs.filter((tab) => tab.active);

    // if there is no active tab set, activate the first
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: TabComponent) {
    // deactivate all tabs
    this.tabs.toArray().forEach((tab) => (tab.active = false));

    // activate the tab the user has clicked on.
    tab.active = true;
  }
}
