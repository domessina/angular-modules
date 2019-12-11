import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroundComponent } from './ground/ground.component';
import { GroundRoutingModule } from './/ground-routing.module';

@NgModule({
  imports: [
    CommonModule,
    GroundRoutingModule
  ],
  declarations: [GroundComponent]
})
export class GroundModule { }
