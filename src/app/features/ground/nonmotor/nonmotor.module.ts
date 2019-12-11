import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NonmotorRoutingModule } from './/nonmotor-routing.module';
import { BikeComponent } from './bike/bike.component';

@NgModule({
  imports: [
    CommonModule,
    NonmotorRoutingModule
  ],
  declarations: [BikeComponent]
})
export class NonmotorModule { }
