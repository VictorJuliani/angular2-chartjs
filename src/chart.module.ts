import { NgModule } from '@angular/core';
import { ChartComponent } from './chart.component';
import 'chart.js';

@NgModule({
  declarations: [ ChartComponent ],
  exports: [ ChartComponent ]
})
export class ChartModule {}
