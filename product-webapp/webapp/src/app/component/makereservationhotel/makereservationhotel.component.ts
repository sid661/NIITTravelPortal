import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelService } from 'src/app/service/hotel.service';

@Component({
  selector: 'app-makereservationhotel',
  templateUrl: './makereservationhotel.component.html',
  styleUrls: ['./makereservationhotel.component.css']
})
export class MakereservationhotelComponent implements OnInit {

  constructor(private hotelservice:HotelService,private router:Router ) { }
result=0;
Rooms:any;
isvalid:boolean=false;
availablerooms:any[]=[];
filterrooms:any[]=[];
allhoteldetails:any;
amenities:any;
bookRoom(roomid:any)
{
  this.hotelservice.roomid=roomid;
  this.router.navigate(['bookroom'])
}
  ngOnInit(): void 
  {
    let today : Date = new Date();
  this.hotelservice.getAllRooms().subscribe((subscriber)=>{
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
  this.hotelservice.getHotel().subscribe((subscriber)=>{
    this.allhoteldetails=subscriber
    this.amenities=this.allhoteldetails.amenities;
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
