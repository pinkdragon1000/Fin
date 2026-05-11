import { Component, Input } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-vertical-bar-component',
  template: `
    <ngx-charts-bar-vertical
      [view]="[400, 400]"
      [scheme]="
        this.colorScheme === 'redGreenScheme'
          ? this.redGreenScheme
          : this.orangePinkScheme
      "
      [results]="this.plot"
      [yAxisLabel]="this.yLabel"
      [xAxis]="true"
      [yAxis]="true"
      [showYAxisLabel]="true"
      [gradient]="true"
    >
    </ngx-charts-bar-vertical>
  `,
})
export class VerticalBarComponent {
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
