import { NgModule } from '@angular/core';
import { GraphRoutingModule } from './graph-routing.module';
import { GraphComponent } from './graph.component';
import {NgxEchartsModule} from "ngx-echarts";
import { NzModalModule } from 'ng-zorro-antd/modal';
import {
  SurveillanceGraphChartComponent
} from "../../widgets/surveillance-graph-chart/surveillance-graph-chart.component";
import {
  SurveillanceNodeDetailsComponent
} from "../../widgets/surveillance-node-details/surveillance-node-details.component";
import {HttpClientModule} from "@angular/common/http";
import {GraphService} from "./graph.service";


@NgModule({
  imports: [
    GraphRoutingModule,
    NgxEchartsModule,
    NzModalModule,
    HttpClientModule,
    SurveillanceGraphChartComponent,
    SurveillanceNodeDetailsComponent,
  ],
  declarations: [GraphComponent],
  exports: [GraphComponent]
})

export class GraphModule { }
