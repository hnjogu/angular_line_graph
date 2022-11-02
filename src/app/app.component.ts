import { Component } from '@angular/core';
import { LineChartComponent } from './line-chart/line-chart.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less','./app.component.css']

})
export class AppComponent {
  title = 'Stock prices Dispaly';
}
