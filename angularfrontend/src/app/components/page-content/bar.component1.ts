import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
//import { single } from './data';

@Component({
  selector: 'bar-1-component',
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
export class Bar1Component implements OnInit {
  //single: any[];
  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  yAxisLabel = 'Account Amount Type';
  showYAxisLabel = true;
  xAxisLabel = 'Dollars';

  colorScheme = {
    domain: ['#C7B42C', '#AAAAAA'],
  };

  constructor() {
    const single = [
      {
        name: 'Account Starting Amount',
        value: 500,
      },
      {
        name: 'Account Current Amount',
        value: 1990,
      },
    ];
    Object.assign(this, { single });
  }

  ngOnInit(): void {}
}
