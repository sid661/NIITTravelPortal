import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/model/place';
import { Resturant } from 'src/app/model/resturant';
import { LoginService } from 'src/app/service/login.service';
import { PlaceService } from 'src/app/service/place.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  constructor(private service:PlaceService,private loginService:LoginService) { }
  public loggedIn=false;
  userRole:any;
  userName: any;
  placeArray:Place[]=[];
  resturantArray:Resturant[]=[];
  ngOnInit(): void {
    this.loggedIn=this.loginService.isLoggedIn();
    this.userName = localStorage.getItem("email");
    this.userRole=localStorage.getItem("role");
    this.service.getPlacesByCity("Jaipur").subscribe(x=>{
        this.placeArray=x;
        console.log(x);
        
    })
    this.service.getResturantByCity("Delhi").subscribe(x=>{
      this.resturantArray=x;
    })
  }

}
