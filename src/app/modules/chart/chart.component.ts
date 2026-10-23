import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';
import { MyLineChartComponent } from './my-line-chart/my-line-chart.component';
import { MyRadarChartComponent } from './my-radar-chart/my-radar-chart.component';
import { MyPieChartComponent } from './my-pie-chart/my-pie-chart.component';
import { MyDoughnutChartComponent } from './my-doughnut-chart/my-doughnut-chart.component';

@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.scss'],
    imports: [
      TabsModule,
      MyBarChartComponent,
      MyLineChartComponent,
      MyRadarChartComponent,
      MyPieChartComponent,
      MyDoughnutChartComponent
    ],
    providers: [provideCharts(withDefaultRegisterables())],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: true
})
export class ChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
