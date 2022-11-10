import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Place } from 'src/app/model/place';
import { Resturant } from 'src/app/model/resturant';
import { Room } from 'src/app/model/room';
import { HotelService } from 'src/app/service/hotel.service';
import { LoginService } from 'src/app/service/login.service';
import { PlaceService } from 'src/app/service/place.service';
import { RegisterserviceService } from 'src/app/service/registerservice.service';


@Component({
  selector: 'app-room-registration',
  templateUrl: './room-registration.component.html',
  styleUrls: ['./room-registration.component.css']
})
export class RoomRegistrationComponent implements OnInit {
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
