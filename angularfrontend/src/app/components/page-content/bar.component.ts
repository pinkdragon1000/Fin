import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
//import { single } from './data';

@Component({
  selector: 'BarComponent',
  template: `
    <ngx-charts-bar-horizontal
      class="border"
      [view]="view"
      [scheme]="colorScheme"
      [gradient]="gradient"
      [xAxis]="showXAxis"
      [yAxis]="showYAxis"
      [results]="single"
      [showXAxisLabel]="showXAxisLabel"
      [showYAxisLabel]="showYAxisLabel"
      [xAxisLabel]="xAxisLabel"
      [yAxisLabel]="yAxisLabel"
      (select)="onSelect($event)"
      (activate)="onActivate($event)"
      (deactivate)="onDeactivate($event)"
    >
    </ngx-charts-bar-horizontal>
  `,
  styles: [
    `
      .border {
        border: 0.063rem solid #dddddd;
      }
    `,
  ],
})
export class BarComponent implements OnInit {
  //single: any[];
  view: any[] = [700, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Transaction Type';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Dollars';

  colorScheme = {
    domain: ['#5AA454', '#A10A28'],
  };

  constructor() {
    var single = [
      {
        name: 'Deposits',
        value: 1500,
      },
      {
        name: 'Withdraws',
        value: 10,
      },
    ];
    Object.assign(this, { single });
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  ngOnInit(): void {}
}
