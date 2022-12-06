import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-line-chart-component',
  template: `
    <ngx-charts-line-chart
      [view]="[400, 400]"
      [scheme]="
        this.colorScheme === 'redGreenScheme'
          ? this.redGreenScheme
          : this.orangePinkScheme
      "
      [results]="this.plot"
      [xAxis]="true"
      [yAxis]="true"
      [showXAxisLabel]="true"
      [showYAxisLabel]="true"
      [xAxisLabel]="this.xLabel"
      [yAxisLabel]="this.yLabel"
      [timeline]="true"
    >
    </ngx-charts-line-chart>
  `,
})
export class LineChartComponent {
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
