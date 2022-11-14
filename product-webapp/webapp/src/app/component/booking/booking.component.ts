import { Component, OnInit } from '@angular/core';
import { Bookhotel } from 'src/app/model/bookhotel';
import { Hotel } from 'src/app/model/hotel';
import { HotelService } from 'src/app/service/hotel.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor(private service:HotelService) { }
  hotel:Hotel=new Hotel();
  ngOnInit(): void {
    this.service.getBook(localStorage.getItem("email")).subscribe(x=>{
      this.book1=x;
      x.forEach(y=>{
        this.service.getHotel(y.hotelName).subscribe(x=>{
          this.hotel=x;
        })
      })
      
    })
    
  }
book1:Bookhotel[]=[];
  book(x:any)
  {

  }

}
