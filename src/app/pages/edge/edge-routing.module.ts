import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AddNodeComponent} from "../node/add-node/add-node.component";
import {UpdateNodeComponent} from "../node/update-node/update-node.component";
import {AddEdgeComponent} from "./add-edge/add-edge.component";
import {DeleteEdgeComponent} from "./delete-edge/delete-edge.component";



const routes: Routes = [
  { path: '', redirectTo: 'add', pathMatch: 'full' },
  { path: 'add', component: AddEdgeComponent },
  { path: 'delete', component: DeleteEdgeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EdgeRoutingModule { }
