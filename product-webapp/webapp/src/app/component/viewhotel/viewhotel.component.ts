import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/model/hotel';
import { Room } from 'src/app/model/room';
import { HotelService } from 'src/app/service/hotel.service';

@Component({
  selector: 'app-viewhotel',
  templateUrl: './viewhotel.component.html',
  styleUrls: ['./viewhotel.component.css']
})
export class ViewhotelComponent implements OnInit {

  constructor(private hotelservice: HotelService) { }
  hotelArray: Hotel[] = [];
  retrieveImage: any;
  getRating: any;
  sum: number = 0;
  length: number = 0
  price: Room[] = [];
  high: number = 0;
  city:any;
  result:any
  ngOnInit(): void {
    this.city=localStorage.getItem("city");
    this.hotelservice.getHotelByCity(localStorage.getItem("city")).subscribe(x => {
      this.hotelArray = x;
      console.log(x);
      this.result=this.hotelArray.length;
      x.forEach(y => {
        this.sum=0;
        this.retrieveImage = y.overview.image;
        y.review.forEach(x => {
          this.sum = this.sum + x.rating
         
        })
        console.log(this.sum)
        this.length = y.review.length;

        this.getRating = this.sum / y.review.length;
        this.price = y.room.sort((a, b) => (a.price < b.price) ? -1 : 1);
        console.log(this.price);
        this.high = this.price[this.price.length - 1].price;
        console.log("high value of x: " , this.high);
        // this.price.forEach(x => {
        //   this.high = x.price;
        //   console.log("high value of x: " , this.high);
        // })


      })


    })

  }
}


