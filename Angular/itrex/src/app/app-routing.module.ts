import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlyComponent } from './fly/fly.component';
import { HotelComponent } from './hotel/hotel.component';
import { CarComponent } from './car/car.component';

const routes: Routes = [
  {
    path: 'fly',
    component: FlyComponent
  },
  {
    path: 'hotel',
    component: HotelComponent
  },
  {
    path: 'car',
    component: CarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
