import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EdgeComponent } from './edge.component';
import {EdgeRoutingModule} from "./edge-routing.module";
import { AddEdgeComponent } from './add-edge/add-edge.component';
import { DeleteEdgeComponent } from './delete-edge/delete-edge.component';
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzInputNumberModule} from "ng-zorro-antd/input-number";
import {NzListModule} from "ng-zorro-antd/list";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzWaveModule} from "ng-zorro-antd/core/wave";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    EdgeComponent,
    AddEdgeComponent,
    DeleteEdgeComponent,
  ],
  imports: [
    CommonModule,
    EdgeRoutingModule,
    NzButtonModule,
    NzDatePickerModule,
    NzDividerModule,
    NzFormModule,
    NzInputModule,
    NzInputNumberModule,
    NzListModule,
    NzSelectModule,
    NzWaveModule,
    ReactiveFormsModule
  ]
})
export class EdgeModule { }
