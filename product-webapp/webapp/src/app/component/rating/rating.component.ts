import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  constructor() { }
  @Input() rating:any//each hotel
  hotel:any;
  high:any;
  ngOnInit(): void {
    console.log("high value of x: " , this.rating);
    this.hotel = this.rating.room.sort((a:any, b:any) => (a.price < b.price) ? -1 : 1);
    // this.rate=this.rating;
    this.high = this.rating.room[this.rating.room.length - 1].price;
    //     console.log("high value of x: " , this.rate);

        // this.rating.forEach((x:any) => {
        //   this.rate = x.price;
        //   console.log("high value of x: " , this.rate);
        // })
  }

       

}
