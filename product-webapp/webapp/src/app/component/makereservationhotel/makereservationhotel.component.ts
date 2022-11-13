import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Amenties } from 'src/app/model/amenties';
import { Bookhotel } from 'src/app/model/bookhotel';
import { HotelService } from 'src/app/service/hotel.service';
import { BookroomComponent } from '../bookroom/bookroom.component';
import { UserformComponent } from '../userform/userform.component';

@Component({
  selector: 'app-makereservationhotel',
  templateUrl: './makereservationhotel.component.html',
  styleUrls: ['./makereservationhotel.component.css']
})
export class MakereservationhotelComponent implements OnInit {

  constructor(private hotelservice:HotelService,private router:Router,private activate:ActivatedRoute,private d:MatDialog ) { }
result=0;
Rooms:any;
isvalid:boolean=false;
availablerooms:any[]=[];
filterrooms:any[]=[];
allhoteldetails:any;
amenities:Amenties=new Amenties();
hotelName:any;
bookRoom(room:any)
{
  this.hotelservice.getHotel(this.hotelName).subscribe((subscriber)=>{
    this.book.hotelAddress=subscriber.address.city;
    this.book.hotelCategory=subscriber.hotelCategory;
    this.book.hotelName=subscriber.hotelName;
    this.book.noOfBeds=room.noOfBeds;
    this.book.price=room.price;
    this.book.roomtype=room.roomtype;
    this.book.serviceProviderEmailId=subscriber.email;
    this.book.roomid=room.roomid;
    
  })
  this.hotelservice.roomid=room.roomid;
  this.d.open(UserformComponent,{
    height:'600px',
    width:'700px',
    data:this.book
  })
}
book:Bookhotel=new Bookhotel();
  ngOnInit(): void 
  {
    this.hotelName=this.activate.snapshot.paramMap.get('name')
    let today : Date = new Date();
  this.hotelservice.getAllRooms(this.hotelName).subscribe((subscriber)=>{
    this.Rooms=subscriber
    console.log(this.Rooms);
    
   
    for(let i=0;i<this.Rooms.length;i++)
    {
      if(this.Rooms[i].reservation!=null)
      {
        let newDate=new Date(this.Rooms[i].reservation.endDate);
        console.log(newDate);
        
        if(newDate<=today)
      {
        
        this.availablerooms.push(this.Rooms[i])
      }
      }
      console.log(this.Rooms[i]);
      
      if(this.Rooms[i].reservation==null)
      {
        this.availablerooms.push(this.Rooms[i])
      }
       
    }

    this.filterrooms=this.availablerooms;
    this.result=this.availablerooms.length;
  })
  this.hotelservice.getHotel(this.hotelName).subscribe((subscriber)=>{
    this.allhoteldetails=subscriber
    console.log(this.allhoteldetails)
    
    
    this.amenities=this.allhoteldetails.amenities;
    console.log(this.amenities)
  })
  }
  checked1k:boolean=false;
  checked2k:boolean=false;
  checked3k:boolean=false;
  checked4k:boolean=false;
  alreadyfiltered:boolean=false;
  applyfilter()
  {
    this.alreadyfiltered=false;
   this.filterrooms=[];
   if(this.checked1k)
   {

    for(let i=0;i<this.availablerooms.length;i++)
    {
      if(this.availablerooms[i].price>0 && this.availablerooms[i].price<=1500)
      {
      this.filterrooms.push(this.availablerooms[i])
      this.alreadyfiltered=true;
      }
    }
   }
   if(this.checked2k)
   {
    
      for(let i=0;i<this.availablerooms.length;i++)
    {
      if(this.availablerooms[i].price>1500 && this.availablerooms[i].price<=2500)
      {
      this.filterrooms.push(this.availablerooms[i])
      this.alreadyfiltered=true;
      }
    }
    
   }
   if(this.checked3k)
   {
    
    for(let i=0;i<this.availablerooms.length;i++)
    {
      if(this.availablerooms[i].price>2500 && this.availablerooms[i].price<=4000)
      {
      this.filterrooms.push(this.availablerooms[i])
      this.alreadyfiltered=true;
      }
    }
   }
   if(this.checked4k)
   {
    for(let i=0;i<this.availablerooms.length;i++)
    {
      if(this.availablerooms[i].price>4000)
      {
      this.filterrooms.push(this.availablerooms[i])
      this.alreadyfiltered=true;
      }
    }
   }
   if(!(this.checked1k||this.checked2k||this.checked3k||this.checked4k))
   {
    this.filterrooms=this.availablerooms;
   } 
   this.result=this.filterrooms.length;
  }




  // tiles = [
  //   {text: 'One', cols: 1, rows: 1, color: '#142A5C'}
   
  // ];

}
