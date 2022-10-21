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
import {MatFormFieldModule} from '@angular/material/form-field';
import { PlacesComponent } from './component/places/places.component';
import { AbsComponent } from './component/abs/abs.component'; 
import { PackageComponent } from './component/package/package.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ServiceproviderregistercomponentComponent,
    RegistercomponentComponent,
    SidenavComponent,
    CabComponent,
    PlacesComponent,
    HotelComponent,
    PackageComponent,
    AbsComponent
 
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
    FlexLayoutModule

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
