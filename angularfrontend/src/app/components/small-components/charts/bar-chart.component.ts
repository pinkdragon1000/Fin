import { Component, Input, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-bar-chart-component',
  template: `
    <ngx-charts-bar-horizontal
      [view]="[containerWidth, barHeight]"
      [scheme]="colorScheme === 'green' ? greenScheme : redScheme"
      [results]="plot"
      [xAxis]="true"
      [yAxis]="true"
      [showXAxisLabel]="true"
      [xAxisLabel]="xAxisLabel"
      [tooltipDisabled]="false"
      [showDataLabel]="true"
      [dataLabelFormatting]="formatLabel"
    >
    </ngx-charts-bar-horizontal>
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
export class BarChartComponent implements AfterViewInit {
  @Input() plot: any[] = [];
  @Input() xAxisLabel: string = 'Amount ($)';
  @Input() colorScheme: 'green' | 'red' = 'red';

  containerWidth = 460;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.updateContainerWidth();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateContainerWidth();
  }

  private updateContainerWidth() {
    this.containerWidth = Math.max(240, this.el.nativeElement.offsetWidth || 240);
  }

  formatLabel = (value: number) => `$${value.toLocaleString()}`;

  get barHeight(): number {
    return Math.max(160, (this.plot?.length || 0) * 50 + 60);
  }

  greenScheme: Color = {
    name: 'finGreen',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: [
      'rgb(16, 140, 60)',
      'rgb(34, 170, 80)',
      'rgb(52, 200, 100)',
      'rgb(74, 222, 128)',
      'rgb(100, 235, 150)',
      'rgb(134, 239, 172)',
      'rgb(160, 245, 190)',
      'rgb(187, 250, 207)',
      'rgb(210, 252, 225)',
      'rgb(230, 255, 240)',
    ],
  };

  redScheme: Color = {
    name: 'finRed',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: [
      'rgba(180, 20, 45, 1)',
      'rgba(200, 45, 70, 1)',
      'rgba(220, 70, 90, 1)',
      'rgba(233, 64, 87, 1)',
      'rgba(240, 100, 120, 1)',
      'rgba(245, 130, 148, 1)',
      'rgba(249, 160, 173, 1)',
      'rgba(252, 190, 200, 1)',
      'rgba(254, 215, 220, 1)',
      'rgba(255, 235, 238, 1)',
    ],
  };
}
