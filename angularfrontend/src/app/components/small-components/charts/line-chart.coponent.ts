import { Component, Input, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-line-chart-component',
  template: `
    <ngx-charts-line-chart
      [view]="[containerWidth, chartHeight]"
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
      [xAxisTickFormatting]="formatDate"
      [timeline]="false"
      [tooltipDisabled]="false"
    >
    </ngx-charts-line-chart>
  `,
  styles: [
    `
      :host {
        display: block;
        width: 100%;
        min-width: 0;
      }
    `,
  ],
})
export class LineChartComponent implements AfterViewInit {
  @Input() plot: any;
  @Input() yLabel!: string;
  @Input() xLabel!: string;
  @Input() colorScheme!: string;

  containerWidth = 320;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.updateContainerWidth();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateContainerWidth();
  }

  private updateContainerWidth() {
    this.containerWidth = Math.max(260, this.el.nativeElement.offsetWidth || 260);
  }

  get chartHeight(): number {
    return Math.max(260, Math.min(360, Math.round(this.containerWidth * 0.78)));
  }

  formatDate = (date: Date): string =>
    new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

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
