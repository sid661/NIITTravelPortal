import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import {HttpClientModule} from '@angular/common/http'
import { ServiceproviderregistercomponentComponent } from './component/serviceproviderregistercomponent/serviceproviderregistercomponent.component';
import { RegistercomponentComponent } from './component/registercomponent/registercomponent.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { CabComponent } from './component/cab/cab.component';
import {MatCardModule} from '@angular/material/card';
import { HotelComponent } from './component/hotel/hotel.component';

import {MatCheckboxModule} from '@angular/material/checkbox';

import { PlacesComponent } from './component/places/places.component';

import { MatDialogModule } from '@angular/material/dialog';


import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { Navbar2Component } from './component/navbar2/navbar2.component';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { RollerComponent } from './component/roller/roller.component';
import { Roller2Component } from './component/roller2/roller2.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LandingpageComponent } from './component/landingpage/landingpage.component';
import { HolidaypackagesComponent } from './component/holidaypackages/holidaypackages.component';
import { CabsComponent } from './component/cabs/cabs.component';
import { ExploreComponent } from './component/explore/explore.component';
import { HotelsComponent } from './component/hotels/hotels.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelsComponent,
    CabsComponent,
    ExploreComponent,
    HolidaypackagesComponent,
    LoginComponent,
    ServiceproviderregistercomponentComponent,
    RegistercomponentComponent,
    SidenavComponent,
    CabComponent,
    PlacesComponent,
    Navbar2Component,
    RollerComponent,
    Roller2Component,
    FooterComponent,
    NavbarComponent,
    HotelComponent,
    LandingpageComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatListModule ,
    MatIconModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
    FormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
   

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
