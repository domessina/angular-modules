import { NgModule } from '@angular/core';
import { RouterModule, Routes, NoPreloading } from '@angular/router';
import { AirComponent } from '@app/features/air/air.component';
import { RightsGuard } from '@app/guards/rights.guard';

const routes: Routes = [
  {
    path: '',
    component: AirComponent,
    pathMatch: 'full'
  },
  {
    path: 'ground',
    loadChildren: './features/ground/ground.module#GroundModule',
    canActivate: [RightsGuard],
    data: {rights: ['ADMINISTRATOR']}
  },
  {
    path: '**',
    component: AirComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      preloadingStrategy: NoPreloading,
      enableTracing: true
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
