import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CabsComponent } from './component/cabs/cabs.component';
import { ExploreComponent } from './component/explore/explore.component';
import { HolidaypackagesComponent } from './component/holidaypackages/holidaypackages.component';
import { HotelsComponent } from './component/hotels/hotels.component';
import { LandingpageComponent } from './component/landingpage/landingpage.component';
import { LoginComponent } from './component/login/login.component';
import { NavbarComponent } from './component/navbar/navbar.component';

const routes: Routes = [
  {path:'',component:HotelsComponent},
  {path:'landingPage',component:LandingpageComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'hotels',component:HotelsComponent},
  {path:'cabs',component:CabsComponent},
  {path:'explore',component:ExploreComponent},
  {path:'holidaypackage',component:HolidaypackagesComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

