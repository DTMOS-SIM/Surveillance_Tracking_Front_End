import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {GraphComponent} from "../graph/graph.component";
import {AddNodeComponent} from "./add-node/add-node.component";
import {UpdateNodeComponent} from "./update-node/update-node.component";



const routes: Routes = [
  { path: '', redirectTo: 'add', pathMatch: 'full' },
  { path: 'add', component: AddNodeComponent },
  { path: 'update', component: UpdateNodeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NodeRoutingModule { }
