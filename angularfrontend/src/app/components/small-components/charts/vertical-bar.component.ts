import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vertical-bar-component',
  template: `
    <ng-container *ngIf="colorScheme === 'orangePink'">
      <ngx-charts-bar-vertical
        [view]="[400, 400]"
        [scheme]="this.orangePinkScheme"
        [results]="this.plot"
        [yAxisLabel]="this.yLabel"
        [xAxis]="true"
        [yAxis]="true"
        [showYAxisLabel]="true"
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
        [yAxisLabel]="this.yLabel"
        [xAxis]="true"
        [yAxis]="true"
        [showYAxisLabel]="true"
        [gradient]="true"
      >
      </ngx-charts-bar-vertical>
    </ng-container>
  `,
})
export class VerticalBarComponent {
  @Input() plot: any;
  @Input() yLabel: string;
  @Input() xLabel: string;
  @Input() colorScheme: string;

  redGreenScheme = {
    domain: ['var(--fin-green)', 'var(--fin-red)'],
  };

  orangePinkScheme = {
    domain: ['var(--fin-pink)', 'var(--fin-orange)'],
  };
}
