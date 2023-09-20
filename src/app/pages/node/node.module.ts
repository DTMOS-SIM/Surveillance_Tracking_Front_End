import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NodeComponent } from './node.component';
import { AddNodeComponent } from './add-node/add-node.component';
import { UpdateNodeComponent } from './update-node/update-node.component';
import {NodeRoutingModule} from "./node-routing.module";
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzInputModule} from "ng-zorro-antd/input";
import {ReactiveFormsModule} from "@angular/forms";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzModalModule} from "ng-zorro-antd/modal";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzInputNumberModule} from "ng-zorro-antd/input-number";
import {NzListModule} from "ng-zorro-antd/list";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzNotificationModule} from "ng-zorro-antd/notification";


@NgModule({
  declarations: [
    NodeComponent,
    AddNodeComponent,
    UpdateNodeComponent,
  ],
  imports: [
    CommonModule,
    NodeRoutingModule,
    NzDatePickerModule,
    NzFormModule,
    NzGridModule,
    NzInputModule,
    ReactiveFormsModule,
    NzSelectModule,
    NzModalModule,
    NzButtonModule,
    NzInputNumberModule,
    NzListModule,
    NzDividerModule,
    NzNotificationModule
  ]
})
export class NodeModule { }
