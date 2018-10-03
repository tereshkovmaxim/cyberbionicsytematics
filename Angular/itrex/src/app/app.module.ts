import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatModule } from './mat.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { HotelComponent } from './hotel/hotel.component';
import { FlyComponent } from './fly/fly.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    HotelComponent,
    FlyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
