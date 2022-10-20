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


import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import { PlacesComponent } from './component/places/places.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ServiceproviderregistercomponentComponent,
    RegistercomponentComponent,
    SidenavComponent,
    CabComponent,
    PlacesComponent,
 
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
    MatToolbarModule

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
