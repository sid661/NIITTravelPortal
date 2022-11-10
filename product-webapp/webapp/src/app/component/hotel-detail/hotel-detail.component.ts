import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';
import { Hotel } from 'src/app/model/hotel';
import { Room } from 'src/app/model/room';
import { TourPackage } from 'src/app/model/tour-package';
import { HotelService } from 'src/app/service/hotel.service';
import { PackageService } from 'src/app/service/package.service';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit {

  constructor(private hotelservice: HotelService, private activatedRoute: ActivatedRoute) { }
  
  hotel:Hotel=new Hotel();
  image:any
  hotelName:any;
  rating:any;
  sum:number=0;
  ngOnInit(): void {
    this.hotelName = this.activatedRoute.snapshot.paramMap.get('name');
    console.log("name is ", this.hotelName);
this.hotelservice.getValueOfHotel(this.hotelName).subscribe(x=>{
  console.log(this.hotel);  
  this.hotel=x;
  
  this.image='data:image/jpg;base64,'+this.hotel.overview.image;
  x.review.forEach(y => {
    this.sum=0;
   
   
      this.sum = this.sum + y.rating
     
    })
    console.log(this.sum)
    

    this.rating = this.sum / x.review.length;
});  
  
    
  }

  
}
