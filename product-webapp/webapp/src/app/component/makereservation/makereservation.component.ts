import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/service/hotel.service';

@Component({
  selector: 'app-makereservation',
  templateUrl: './makereservation.component.html',
  styleUrls: ['./makereservation.component.css']
})
export class MakereservationComponent implements OnInit {

  constructor(private hotelservice:HotelService) { }
  result=0;
  Rooms:any;
  availablerooms:any[]=[];
  filterrooms:any[]=[];
  
    ngOnInit(): void 
    {
      let today : Date = new Date();
    this.hotelservice.getAllRooms("x").subscribe((subscriber)=>{
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

}
