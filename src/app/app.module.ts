import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { AirComponent } from './features/air/air.component';
import { RightsGuard } from './guards/rights.guard';


@NgModule({
  declarations: [
    AppComponent,
    AirComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    RightsGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
