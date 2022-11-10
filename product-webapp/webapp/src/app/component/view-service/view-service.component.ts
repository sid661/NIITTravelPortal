import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cab } from 'src/app/model/cab';

import { Hotel } from 'src/app/model/hotel';
import { Room } from 'src/app/model/room';
import { TourPackage } from 'src/app/model/tour-package';
import { CabService } from 'src/app/service/cab.service';
import { HotelService } from 'src/app/service/hotel.service';
import { PackageService } from 'src/app/service/package.service';

@Component({
  selector: 'app-view-service',
  templateUrl: './view-service.component.html',
  styleUrls: ['./view-service.component.css']
})
export class ViewServiceComponent implements OnInit {
  constructor(private hotelservice: HotelService,private cabService:CabService,private pService:PackageService,private router:Router) { }
  hotelArray: Hotel[] = [];
  retrieveImage: any;
  getRating: any;
  sum: number = 0;
  length: number = 0
  price: Room[] = [];
  high: number = 0;
  city:any;
  result:any
  packageArray:TourPackage[]=[]
  cabArray:any=[]
  ngOnInit(): void {
    
    this.hotelservice.viewHotelByemail(localStorage.getItem("email")).subscribe(x => {
      this.hotelArray = x;
      console.log(x);
      this.result=this.hotelArray.length;

    })
    this.pService.findPackageByEmail(localStorage.getItem("email")).subscribe(x=>{
      this.packageArray=x;
      console.log(x)
    })

    this.cabService.findCab("delhi").subscribe(x => {
      console.log(x)
      this.cabArray = x;
  })
}


  update()
  {
    this.router.navigate(['edit'])
  }
}