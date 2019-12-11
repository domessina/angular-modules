import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirComponent } from '@app/features/air/air.component';

const routes: Routes = [
  {
    path: '',
    component: AirComponent,
    pathMatch: 'full'
  },
  {
    path: 'ground',
    loadChildren: './features/ground/ground.module#GroundModule'
  },
  {
    path: '**',
    component: AirComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
