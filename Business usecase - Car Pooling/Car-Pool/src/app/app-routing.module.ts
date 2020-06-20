import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImgComponent } from './img/img.component';

import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LoginComponent } from './login/login.component';

import { CarOfferComponent } from './car-offer/car-offer.component';
import { MapComponent } from './map/map.component';
import { RegisterorofferComponent } from './registeroroffer/registeroroffer.component';
import { CabregisterComponent } from './cabregister/cabregister.component';
import { CabdetailsComponent } from './cabdetails/cabdetails.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
const routes: Routes = [{ path: '', redirectTo: 'img', pathMatch: 'full' },
{ path: 'img', component: ImgComponent },
{ path: 'register', component: RegistrationFormComponent},
{ path: 'login', component: LoginComponent},
{ path: 'offer', component: CarOfferComponent},
{ path: 'map', component: MapComponent},
{ path: 'registeroroffer', component: RegisterorofferComponent},
{ path: 'cabregister', component: CabregisterComponent},
{path: 'userDashboard', component: UserDashboardComponent},
{ path: 'cabdetails', component: CabdetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
