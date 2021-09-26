import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
//import { single } from './data';

@Component({
  selector: 'BarComponent1',
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
export class BarComponent1 implements OnInit {
  //single: any[];
  view: any[] = [700, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Account Amount Type';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Dollars';

  colorScheme = {
    domain: ['#C7B42C', '#AAAAAA'],
  };

  constructor() {
    var single = [
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
