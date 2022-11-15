import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '@coreui/angular';
import { BookroomComponent } from './component/bookroom/bookroom.component';

import { CabRegistrationComponent } from './component/cab-registration/cab-registration.component';


import { CabComponent } from './component/cab/cab.component';
import { CabpaymentComponent } from './component/cabpayment/cabpayment.component';
import { CabsComponent } from './component/cabs/cabs.component';
import { EdithotelComponent } from './component/edithotel/edithotel.component';
import { ExploreComponent } from './component/explore/explore.component';
import { HolidaypackagesComponent } from './component/holidaypackages/holidaypackages.component';
import { HotelDetailComponent } from './component/hotel-detail/hotel-detail.component';
import { HotelComponent } from './component/hotel/hotel.component';
import { HotelsComponent } from './component/hotels/hotels.component';
import { InformationComponent } from './component/information/information.component';
import { LandingpageComponent } from './component/landingpage/landingpage.component';
import { LoginComponent } from './component/login/login.component';
import { MakereservationhotelComponent } from './component/makereservationhotel/makereservationhotel.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { PackageRegistrationComponent } from './component/package-registration/package-registration.component';
import { PackageComponent } from './component/package/package.component';
import { PaymentComponent } from './component/payment/payment.component';
import { PlacesComponent } from './component/places/places.component';
import { RegisterComponent } from './component/register/register.component';
import { RollerComponent } from './component/roller/roller.component';
import { Roller2Component } from './component/roller2/roller2.component';
import { RoomRegistrationComponent } from './component/room-registration/room-registration.component';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { ViewServiceComponent } from './component/view-service/view-service.component';
import { ViewhotelComponent } from './component/viewhotel/viewhotel.component';
import { LoginGuard } from './guard/login.guard';



const routes: Routes = [
  


//   {path:'',component:LandingpageComponent,children:[
//      {path:'',component:RoomRegistrationComponent},
    
//   {path:'navbar',component:NavbarComponent},
//   {path:'hotels',component:HotelsComponent},
//   {path:'cabs',component:CabsComponent},
//   {path:'cab/:name',component:CabComponent},
//   {path:'explore',component:ExploreComponent},
//   {path:'holidaypackage',component:HolidaypackagesComponent
//   },
//   {path:'hotel1',component:HotelComponent},
//   {path:'places',component:PlacesComponent},
//   {path:'package/:name',component:PackageComponent},
//   {path:'viewhotel/:name',component:ViewhotelComponent},
//   {path:"view",component:ViewServiceComponent},
//   {path:"detail/:name",component:HotelDetailComponent},
//   {path:"reg",component:PackageRegistrationComponent},
//   {path:'cabreg',component:CabRegistrationComponent},
//   {
//     path:'hotel',component:HotelComponent},
//     {path:'information/:name',component:InformationComponent}
// ]},
  
//   {path:'login',component:LoginComponent},
//   {path:"register",component:RegisterComponent},

// ]

  {
    path:'',
    component:LandingpageComponent,
    children:[
      
      {
        path:'',
        component:HotelsComponent
      },
      {
        path:'viewhotel/:name',
        component:ViewhotelComponent
      },
      {
        path:'hotel1',
        component:HotelComponent
      },
      {
        path:'navbar',
        component:NavbarComponent
      },
      {
        path:'hotels',
        component:HotelsComponent
      },
      {
        path:'cabs',
       component:CabsComponent
      },
      {
        path:'cab/:name',
        component:CabComponent
      },
      {
        path:"allbookings",
        component:SidenavComponent
      },
      {
        path:'explore',
        component:ExploreComponent
      },
     
      {
        path:'holidaypackage',
        component:HolidaypackagesComponent
      },
      {
        path:'places',
        component:PlacesComponent
      },
      {
        path:'package/:name',
        component:PackageComponent
      },
      {
        path:'information/:name',
      component:InformationComponent
      },
      {
        path:'viewhotel',
        component:ViewhotelComponent
      },
      {
        path:'viewroom/:name',
        component:MakereservationhotelComponent,
        
      },
      {
        path:'bookroom',
        component:BookroomComponent,
        canActivate:[LoginGuard]
      },
     
      {path:"view",component:ViewServiceComponent,canActivate:[LoginGuard]},
      
   {path:"detail/:name",component:HotelDetailComponent},
   {path:"reg",component:PackageRegistrationComponent},
   {path:'cabreg',component:CabRegistrationComponent},
  
   
  {path:'edit/:hotelName',component:EdithotelComponent},
  {path:"reg",component:PackageRegistrationComponent,canActivate:[LoginGuard]},
  {path:'cabreg',component:CabRegistrationComponent,canActivate:[LoginGuard]},
  
 {path:'regHotel',component:HotelComponent,canActivate:[LoginGuard]}
]},

{path:'header',component:PaymentComponent},
{path:'cabpayment',component:CabpaymentComponent},
  
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:"register",
    component:RegisterComponent
  }
 

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }

