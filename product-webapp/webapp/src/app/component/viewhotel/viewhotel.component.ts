import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { Hotel } from 'src/app/model/hotel';
import { Room } from 'src/app/model/room';
import { HotelService } from 'src/app/service/hotel.service';

@Component({
  selector: 'app-viewhotel',
  templateUrl: './viewhotel.component.html',
  styleUrls: ['./viewhotel.component.css']
})
export class ViewhotelComponent implements OnInit {


  constructor(private hotelservice: HotelService,private route:Router,private activatedRoute:ActivatedRoute) { }


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
    this.city = this.activatedRoute.snapshot.paramMap.get('name');
    
    this.hotelservice.getHotelByCity(this.city).subscribe(x => {
      this.hotelArray = x;
      this.filterHotel=this.hotelArray;
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
  // bookhotel(hotelName:any)
  // {
  //   this.hotelservice.hotelName=hotelName;
  //   console.log("dsds");
    
  
  //  // this.route.navigate(['viewrooms']);

  // }
  price1k:any;
  filterHotel:Hotel[]=[];
 
 
  star5checked:boolean=false;
  star4checked:boolean=false;
  star3checked:boolean=false;
  star2checked:boolean=false;
  star1checked:boolean=false;
  villachecked:boolean=false;
  cottagechecked:boolean=false;
  checked1k:boolean=false;
  checked2k:boolean=false;
  checked3k:boolean=false;
  checked4k:boolean=false;

  checked5rating:boolean=false;
  checked4rating:boolean=false;
  checked3rating:boolean=false;

filtered:boolean=false;
pricefiltered:boolean=false;
ratingfilterd:boolean=false;


  applyfilter()
  {
    let temphotelsfilter=[];
    this.filtered=false;
    this.filterHotel=this.hotelArray;
    this.pricefiltered=false;
    this.ratingfilterd=false;
    
    
    if(this.star5checked)
    {
      console.log("yes");
      
      for(let i=0;i<this.hotelArray.length;i++)
      {
        console.log(this.hotelArray[i].hotelCategory);
        
        if(this.hotelArray[i].hotelCategory=="5star")
        {
          this.filterHotel=[];
          
          this.filterHotel.push(this.hotelArray[i]);
          this.filtered=true;
        }
        else
        {
          if(this.filtered)
          {

          }
          else
          {
            this.filtered=true;
          this.filterHotel=[];
          }
        }
      }

    }
    if(this.star4checked)
    {
      for(let i=0;i<this.hotelArray.length;i++)
      {
        if(this.hotelArray[i].hotelCategory=="4star")
        {
          if(this.filtered)
          {
            this.filterHotel.push(this.hotelArray[i]);
            this.filtered=true;
          }
          else
          {
            this.filterHotel=[];
            this.filterHotel.push(this.hotelArray[i]);
            this.filtered=true;
          }
          
        }
        else
        {
          if(this.filtered)
          {

          }
          else
          {
          this.filterHotel=[];
          }
        }
      }

    }
    if(this.star3checked)
    {
      for(let i=0;i<this.hotelArray.length;i++)
      {
        if(this.hotelArray[i].hotelCategory=="3star")
        {
          if(this.filtered)
          {
            this.filterHotel.push(this.hotelArray[i]);
            this.filtered=true;
          }
          else
          {
            this.filterHotel=[];
            this.filterHotel.push(this.hotelArray[i]);
            this.filtered=true;
          }
          
        }
        else
        {
          if(this.filtered)
          {
            
          }
          else
          {
          this.filterHotel=[];
          }
        }
      }
    }
    if(this.star2checked)
    {
      for(let i=0;i<this.hotelArray.length;i++)
      {
        if(this.hotelArray[i].hotelCategory=="2star")
        {
          if(this.filtered)
          {
            this.filterHotel.push(this.hotelArray[i]);
            this.filtered=true;
          }
          else
          {
            this.filterHotel=[];
            this.filterHotel.push(this.hotelArray[i]);
            this.filtered=true;
          }
          
        }
        else
        {
          if(this.filtered)
          {
            
          }
          else
          {
          this.filterHotel=[];
          }
        }
      }
    }
    if(this.star1checked)
    {
      for(let i=0;i<this.hotelArray.length;i++)
      {
        if(this.hotelArray[i].hotelCategory=="1star")
        {
          if(this.filtered)
          {
            this.filterHotel.push(this.hotelArray[i]);
            this.filtered=true;
          }
          else
          {
            this.filterHotel=[];
            this.filterHotel.push(this.hotelArray[i]);
            this.filtered=true;
          }
          
        }
        else
        {
          if(this.filtered)
          {
            
          }
          else
          {
          this.filterHotel=[];
          }
        }
      }
    }
    if(this.villachecked)
    {
      for(let i=0;i<this.hotelArray.length;i++)
      {
        if(this.hotelArray[i].hotelCategory=="Villa")
        {
          if(this.filtered)
          {
            this.filterHotel.push(this.hotelArray[i]);
            this.filtered=true;
          }
          else
          {
            this.filterHotel=[];
            this.filterHotel.push(this.hotelArray[i]);
            this.filtered=true;
          }
          
        }
        else
        {
          if(this.filtered)
          {
            
          }
          else
          {
          this.filterHotel=[];
          }
        }
      }
    }
    if(this.cottagechecked)
    {
      for(let i=0;i<this.hotelArray.length;i++)
      {
        if(this.hotelArray[i].hotelCategory=="Cottage")
        {
          if(this.filtered)
          {
            this.filterHotel.push(this.hotelArray[i]);
            this.filtered=true;
          }
          else
          {
            this.filterHotel=[];
            this.filterHotel.push(this.hotelArray[i]);
            this.filtered=true;
          }
          
        }
        else
        {
          if(this.filtered)
          {
            
          }
          else
          {
          this.filterHotel=[];
          }
        }
      }
    }
    if(this.checked1k)
    {
      
      if(this.filtered)
      {
        let temppricefileter=[];
        for(let i=0;i<this.filterHotel.length;i++)
        {
          for(let j=0;j<this.filterHotel[i].room.length;j++)
          {
            if(this.filterHotel[i].room[j].price>=0 && this.filterHotel[i].room[j].price<=1500 )
            {
             
              temppricefileter.push(this.filterHotel[i]);
              this.pricefiltered=true;
              temphotelsfilter.push(this.filterHotel[i])
              break;
            }
          }
        }
        this.filterHotel=temppricefileter;
       
        
      }
      else
      {
        this.filterHotel=[];
      for(let i=0;i<this.hotelArray.length;i++)
      {
        for(let j=0;j<this.hotelArray[i].room.length;j++)
          {
            if(this.hotelArray[i].room[j].price>=0 && this.hotelArray[i].room[j].price<=1500 )
            {
              
             this.filterHotel.push(this.hotelArray[i]);
             this.pricefiltered=true;
             temphotelsfilter.push(this.filterHotel[i])
              break;
            }
          }
      }
    }
    }



    if(this.checked2k)
    {
      if(this.filtered)
      {
        let temppricefileter=[];
        for(let i=0;i<this.filterHotel.length;i++)
        {
          for(let j=0;j<this.filterHotel[i].room.length;j++)
          {
            if(this.filterHotel[i].room[j].price>=1500 && this.filterHotel[i].room[j].price<=2500 )
            {
             if(this.pricefiltered)
             {

             }
             else
             {

             }
              temppricefileter.push(this.filterHotel[i]);
              this.pricefiltered=true;
              break;
            }
          }
        }
        this.filterHotel=temppricefileter;
       
        
      }
      else
      {
        this.filterHotel=[];
      for(let i=0;i<this.hotelArray.length;i++)
      {
        for(let j=0;j<this.hotelArray[i].room.length;j++)
          {
            if(this.hotelArray[i].room[j].price>=1500 && this.hotelArray[i].room[j].price<=2500 )
            {
              if(this.pricefiltered)
              {

              }
              else
              {

              }
              
             this.filterHotel.push(this.hotelArray[i]);
             this.pricefiltered=true;
              break;
            }
          }
      }
    }
      
    }
    if(this.checked3k)
    {
      if(this.filtered)
      {
        let temppricefileter=[];
        for(let i=0;i<this.filterHotel.length;i++)
        {
          for(let j=0;j<this.filterHotel[i].room.length;j++)
          {
            if(this.filterHotel[i].room[j].price>=2500 && this.filterHotel[i].room[j].price<=4000 )
            {
              if(this.pricefiltered)
              {

              }
              else
              {
                
              }
             
              temppricefileter.push(this.filterHotel[i]);
              this.pricefiltered=true;
              break;
            }
          }
        }
        this.filterHotel=temppricefileter;
       
        
      }
      else
      {
        this.filterHotel=[];
      for(let i=0;i<this.hotelArray.length;i++)
      {
        for(let j=0;j<this.hotelArray[i].room.length;j++)
          {
            if(this.hotelArray[i].room[j].price>=2500 && this.hotelArray[i].room[j].price<=4000 )
            {
              if(this.pricefiltered)
              {

              }
              else
              {
                
              }
             this.filterHotel.push(this.hotelArray[i]);
             this.pricefiltered=true;
              break;
            }
          }
      }
    }
    }
    if(this.checked4k)
    {
      if(this.filtered)
      {
        let temppricefileter=[];
        for(let i=0;i<this.filterHotel.length;i++)
        {
          for(let j=0;j<this.filterHotel[i].room.length;j++)
          {
            if(this.filterHotel[i].room[j].price>=4000 )
            {
              if(this.pricefiltered)
              {

              }
              else
              {
                
              }
             
              temppricefileter.push(this.filterHotel[i]);
              this.pricefiltered=true;
              break;
            }
          }
        }
        this.filterHotel=temppricefileter;
       
        
      }
      else
      {
        this.filterHotel=[];
      for(let i=0;i<this.hotelArray.length;i++)
      {
        for(let j=0;j<this.hotelArray[i].room.length;j++)
          {
            if(this.hotelArray[i].room[j].price>=4000)
            {
              if(this.pricefiltered)
              {

              }
              else
              {
                
              }
              
             this.filterHotel.push(this.hotelArray[i]);
             this.pricefiltered=true;
              break;
            }
          }
      }
    }
    }
    if(this.checked5rating)
    {
      console.log("inisde another method");
        
      let tempratingfileter=[];
      if(this.pricefiltered || this.filterHotel)
      {
        
      }
     
      for(let i=0;i<this.filterHotel.length;i++)
      {
       
        
        let totalrating=0;
        let avgrating=0;
        for(let j=0;j<this.filterHotel[i].review.length;j++)
        {
          totalrating=totalrating+this.filterHotel[i].review[j].rating;
        }
       avgrating= totalrating/this.filterHotel[i].review.length;
       if(avgrating>=5)
       {
         tempratingfileter.push(this.filterHotel[i])
         this.ratingfilterd=true;

       }
      
      }
      this.filterHotel=tempratingfileter;
    }
    if(this.checked4rating)
    {
   
     
      let tempratingfileter:Hotel[]=[];
      if(this.ratingfilterd)
      {
        tempratingfileter=this.filterHotel;
      }
        
     
      for(let i=0;i<this.filterHotel.length;i++)
      {
      
        
        let totalrating=0;
        let avgrating=0;
        for(let j=0;j<this.filterHotel[i].review.length;j++)
        {
          totalrating=totalrating+this.filterHotel[i].review[j].rating;
        }
       avgrating= totalrating/this.filterHotel[i].review.length;
       if(avgrating>=4 && avgrating<5)
       {
         tempratingfileter.push(this.filterHotel[i])
         this.ratingfilterd=true;

       }
      
      }
      this.filterHotel=tempratingfileter;
    }
    if(this.checked3rating)
    {
     
        
      let tempratingfileter:Hotel[]=[];
      if(this.ratingfilterd)
      {
        tempratingfileter=this.filterHotel;
      }
      
      
     
      for(let i=0;i<this.filterHotel.length;i++)
      {
        
        
        let totalrating=0;
        let avgrating=0;
        for(let j=0;j<this.filterHotel[i].review.length;j++)
        {
          totalrating=totalrating+this.filterHotel[i].review[j].rating;
        }
       avgrating= totalrating/this.filterHotel[i].review.length;
       if(avgrating<=3)
       {
         tempratingfileter.push(this.filterHotel[i])
         this.ratingfilterd=true;

       }
      
      }
      console.log(tempratingfileter);
      
      this.filterHotel=tempratingfileter;
    }
    this.result=this.filterHotel.length
    if(!(this.star5checked||this.star4checked||this.star3checked||this.star2checked||this.star1checked||this.villachecked||this.cottagechecked ||this.checked1k ||this.checked2k|| this.checked3k||this.checked4k||this.checked5rating||this.checked4rating||this.checked3rating))
    {
      this.filterHotel=this.hotelArray;
    }

  } 

  book(hotelName:any)
  {
    
    this.hotelservice.hotelName=hotelName;
  
    
    this.route.navigate(['viewroom/',hotelName])
      
  }

}


