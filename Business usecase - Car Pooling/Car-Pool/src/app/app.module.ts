import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ImgComponent } from './img/img.component';
import { ReactiveFormsModule } from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LoginComponent } from './login/login.component';
import { CarOfferComponent } from './car-offer/car-offer.component';
import { MapComponent } from './map/map.component';
import { RegisterorofferComponent } from './registeroroffer/registeroroffer.component';
import { CabregisterComponent } from './cabregister/cabregister.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CabdetailsComponent } from './cabdetails/cabdetails.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ImgComponent,
      RegistrationFormComponent,
      LoginComponent,
      CarOfferComponent,
      MapComponent,
      RegisterorofferComponent,
      CabregisterComponent,
      CabdetailsComponent,
      UserDashboardComponent,
      
     
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({apiKey:'AIzaSyB2K78_-wb82Q-f5WBhl33rC9jW4CTj_nc'}),
    NgbModule,
           
       
   
    
    BrowserAnimationsModule
  ],
  providers: [ GoogleMapsAPIWrapper],
  bootstrap: [AppComponent]
})
export class AppModule { }
