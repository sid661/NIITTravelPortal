import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Amenties } from 'src/app/model/amenties';
import { Bookhotel } from 'src/app/model/bookhotel';
import { HotelService } from 'src/app/service/hotel.service';
import { OrderService } from 'src/app/service/order.service';
import { MY_DATE_FORMATS, UserformComponent } from '../userform/userform.component';

@Component({
  selector: 'app-makereservationhotel',
  templateUrl: './makereservationhotel.component.html',
  styleUrls: ['./makereservationhotel.component.css'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]
})
export class MakereservationhotelComponent implements OnInit {

  constructor(private service:OrderService,private hotelservice:HotelService,private router:Router,private activate:ActivatedRoute,private d:MatDialog,private datepipe:DatePipe ) { }
result=0;
Rooms:any;
isvalid:boolean=false;
availablerooms:any[]=[];
filterrooms:any[]=[];
allhoteldetails:any;
amenities:Amenties=new Amenties();
hotelName:any;
book:Bookhotel=new Bookhotel();
value:any
bookRoom(room:any)
{
  this.value=localStorage.getItem("token");
  if(this.value==null){
        this.router.navigateByUrl("login");
    }
  
  else{
    
    this.hotelservice.getHotel(this.hotelName).subscribe((subscriber)=>{
      this.book.roomid=room.roomid;
      this.book.bookingId="1";
      this.book.hotelName=subscriber.hotelName;
      this.book.hotelCategory=subscriber.hotelCategory;
      this.book.noOfBeds=room.noOfBeds;
      this.book.price=room.price;
      this.book.roomtype=room.roomtype;
      this.book.serviceProviderEmailId=subscriber.email;
      this.book.hotelAddress=subscriber.address.city;
      // this.service.getData(this.book);
      this.d.open(UserformComponent,{
        // height:'600px',
        // width:'700px',
        backdropClass: 'backdropBackground',
        data:this.book
      })
      
    })
   
  }
  
  
  
}
// book:Bookhotel=new Bookhotel();
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
        console.log(today);
        
        const converteddate=this.datepipe.transform(newDate,'MM-dd-yyyy')
        if(newDate<=today)
      {
        console.log("pushed by checking");
        
        
        this.availablerooms.push(this.Rooms[i])
      }
      }
      console.log(this.Rooms[i]);
      
      if(this.Rooms[i].reservation==null)
      {
        this.availablerooms.push(this.Rooms[i])
        console.log("pushed");
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
