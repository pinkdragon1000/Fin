import { Component, Input } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';

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

  redGreenScheme: Color = {
    name: 'redGreen',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['var(--fin-green)', 'var(--fin-red)'],
  };

  orangePinkScheme: Color = {
    name: 'orangePink',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['var(--fin-pink)', 'var(--fin-orange)'],
  };
}
