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
import {MatButtonToggleModule} from '@angular/material/button-toggle';

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
import {MatSnackBarModule} from '@angular/material/snack-bar';
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

import { RoomRegistrationComponent } from './component/room-registration/room-registration.component';

import { ViewServiceComponent } from './component/view-service/view-service.component';
import { HotelDetailComponent } from './component/hotel-detail/hotel-detail.component';
import { InformationComponent } from './component/information/information.component';
import { ResturantComponent } from './component/resturant/resturant.component';
import { CabRegistrationComponent } from './component/cab-registration/cab-registration.component';
import { BookroomComponent } from './component/bookroom/bookroom.component';
import { EdithotelComponent } from './component/edithotel/edithotel.component';

import { LayoutModule } from '@angular/cdk/layout';
import { MakereservationComponent } from './component/makereservation/makereservation.component';
import { ReviewComponent } from './component/review/review.component';
import { Navbar3Component } from './navbar3/navbar3.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';

import { RoomComponent } from './component/room/room.component';

import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider,FacebookLoginProvider
  
} from '@abacritt/angularx-social-login';
import { MakereservationhotelComponent } from './component/makereservationhotel/makereservationhotel.component';
import { OtpformComponent } from './component/otpform/otpform.component';
import { ResetpasswordComponent } from './component/resetpassword/resetpassword.component';
import { UserformComponent } from './component/userform/userform.component';
import { CabreservationComponent } from './component/cabreservation/cabreservation.component';
import { HeaderComponent } from './component/header/header.component';
import { PaymentComponent } from './component/payment/payment.component';
import { DatePipe } from '@angular/common';
import { CabpaymentComponent } from './component/cabpayment/cabpayment.component';
import { PackageformComponent } from './component/packageform/packageform.component';
import { BookingComponent } from './component/booking/booking.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    HotelsComponent,
    CabsComponent,
    RoomComponent,
    ExploreComponent,
    MakereservationhotelComponent,
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
    PackageRegistrationComponent,

    RoomRegistrationComponent,
  
    ViewServiceComponent,
        HotelDetailComponent,
        InformationComponent,
        ResturantComponent,
        CabRegistrationComponent,
        BookroomComponent,
        EdithotelComponent,
        MakereservationComponent,
        ReviewComponent,
        Navbar3Component,
        ForgotPasswordComponent,
        OtpformComponent,
        ResetpasswordComponent,
        UserformComponent,
        CabreservationComponent,
        HeaderComponent,
        PaymentComponent,
        CabpaymentComponent,
        PackageformComponent,
        BookingComponent,
    
    


 
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
    MatSnackBarModule,
    Ng5SliderModule,
    NgxMaterialTimepickerModule,
    MatRadioModule,
    MatSelectModule,
    MatButtonToggleModule,
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
    MatMenuModule,
    LayoutModule,
    SocialLoginModule,
    MatTableModule
  

   

   
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '589672450302-k0fi0figmt04vntkob8d4ng6t63ki0hr.apps.googleusercontent.com'
            )
          },
         
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    },
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
