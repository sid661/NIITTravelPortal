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
import { FlexLayoutModule } from '@angular/flex-layout';
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
import {MatRadioModule} from '@angular/material/radio';

import {MatStepperModule} from '@angular/material/stepper';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTabsModule} from '@angular/material/tabs';
import { RegisterComponent } from './component/register/register.component';
import { PackageComponent } from './component/package/package.component';
import { ViewhotelComponent } from './component/viewhotel/viewhotel.component';
import { ImageComponent } from './component/image/image.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { RatingComponent } from './component/rating/rating.component';
import { PackageRegistrationComponent } from './component/package-registration/package-registration.component';
import { Ng5SliderModule } from 'ng5-slider';
import { MatMomentDateModule, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {MatMenuModule} from '@angular/material/menu';
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
    LandingpageComponent,
    RegisterComponent,
    PackageComponent,
    ViewhotelComponent,
    ImageComponent,
    RatingComponent,
    PackageRegistrationComponent
 
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
    MatExpansionModule,
    MatIconModule,
    MatTabsModule,
    MatCheckboxModule,
    Ng5SliderModule,
    NgxMaterialTimepickerModule,
    MatRadioModule,
    MatSelectModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatStepperModule,
    MatDialogModule,
    MatMomentDateModule,
    FormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    FlexLayoutModule,
    MatMenuModule

   

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
