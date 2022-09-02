import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vertical-bar-component',
  template: `
    <ng-container *ngIf="colorScheme === 'orangePink'">
      <ngx-charts-bar-vertical
        [view]="[400, 400]"
        [scheme]="this.orangePinkScheme"
        [results]="this.plot"
        [xAxisLabel]="this.xLabel"
        [yAxisLabel]="this.yLabel"
        [showXAxisLabel]="true"
        [showYAxisLabel]="true"
        [xAxis]="true"
        [yAxis]="true"
        [gradient]="true"
        [animations]="true"
      >
      </ngx-charts-bar-vertical>
    </ng-container>
    <ng-container *ngIf="colorScheme === 'redGreen'">
      <ngx-charts-bar-vertical
        [view]="[400, 400]"
        [scheme]="this.redGreenScheme"
        [results]="this.plot"
        [xAxisLabel]="this.xLabel"
        [yAxisLabel]="this.yLabel"
        [showXAxisLabel]="true"
        [showYAxisLabel]="true"
        [xAxis]="true"
        [yAxis]="true"
        [gradient]="true"
      >
      </ngx-charts-bar-vertical>
    </ng-container>
  `,
  styles: [``],
})
export class VerticalBarComponent implements OnInit {
  @Input() plot: any;
  @Input() yLabel: string;
  @Input() xLabel: string;
  @Input() colorScheme: string;

  redGreenScheme = {
    domain: ['green', '#a10a28'],
  };

  orangePinkScheme = {
    domain: ['var(--fin-pink)', 'var(--fin-orange)'],
  };

  ngOnInit() {}
}
