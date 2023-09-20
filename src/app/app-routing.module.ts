import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/graph' },
  { path: 'graph', loadChildren: () => import('./pages/graph/graph.module').then(m => m.GraphModule) },
  { path: 'edge', loadChildren: () => import('./pages/edge/edge.module').then(m => m.EdgeModule) },
  { path: 'node', loadChildren: () => import('./pages/node/node.module').then(m => m.NodeModule) },
  { path: 'motion', loadChildren: () => import('./pages/motion-replay/motion-replay.module').then(m => m.MotionReplayModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
