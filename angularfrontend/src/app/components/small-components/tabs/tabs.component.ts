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
    <div class="tabs-container">
      <ul class="navTabs">
        <li
          *ngFor="let tab of tabs"
          (click)="selectTab(tab)"
          [class.active]="tab.active"
        >
          <a class="navTabTitle" title="{{ tab.title }}">{{ tab.title }}</a>
        </li>
      </ul>
    </div>
    <ng-content></ng-content>
  `,
  styles: [
    `
      .tabs-container {
        background: var(--fin-white);
        border-radius: var(--fin-radius) var(--fin-radius) 0 0;
        border: 1px solid var(--fin-neutral-5);
        border-bottom: none;
      }
      .navTabs {
        list-style: none;
        padding: 0 1rem;
        margin: 0;
        display: flex;
        gap: 0.25rem;
      }
      li {
        cursor: pointer;
        padding: 0.875rem 0.25rem;
        position: relative;
      }
      li::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 2px;
        border-radius: 2px 2px 0 0;
        background: transparent;
        transition: background 0.2s;
      }
      li.active::after {
        background: var(--fin-gradient);
      }
      .navTabTitle {
        color: var(--fin-neutral-2);
        font-size: 0.9375rem;
        font-weight: 500;
        padding: 0.25rem 0.875rem;
        border-radius: var(--fin-radius-sm);
        transition: color 0.15s, background 0.15s;
        display: block;
      }
      li:hover .navTabTitle {
        color: var(--fin-black);
        background: var(--fin-neutral-6);
      }
      li.active .navTabTitle {
        color: var(--fin-black);
        font-weight: 600;
      }
    `,
  ],
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

  ngAfterContentInit() {
    const activeTabs = this.tabs.filter((tab) => tab.active);
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: TabComponent) {
    this.tabs.toArray().forEach((tab) => (tab.active = false));
    tab.active = true;
  }
}
