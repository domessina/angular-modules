import { NgModule } from '@angular/core';
import { GroundComponent } from './ground/ground.component';
import { Routes, RouterModule } from '@angular/router';

const operationMenuRoutes: Routes = [
  {
    path: '',
    component: GroundComponent
  },{
        path: 'nonmotor',
        loadChildren: './nonmotor/nonmotor.module#NonmotorModule'
      }
];

@NgModule({
  imports: [RouterModule.forChild(operationMenuRoutes)],
  exports: [RouterModule]
})
export class GroundRoutingModule { }
