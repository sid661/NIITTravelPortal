import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cab } from 'src/app/model/cab';
import { CabOrder } from 'src/app/model/cab-order';
import { Cabuserform } from 'src/app/model/cabuserform';
import { CabService } from 'src/app/service/cab.service';
import { OrderService } from 'src/app/service/order.service';
import { CabreservationComponent } from '../cabreservation/cabreservation.component';

@Component({
  selector: 'app-cab',
  templateUrl: './cab.component.html',
  styleUrls: ['./cab.component.css']
})

export class CabComponent implements OnInit {
 

  checksuv:boolean=false;
  checksedan:boolean=false;
  checkhatchback:boolean=false;
  checkpetrol:boolean=false;
  checkdiesel:boolean=false;
  checkcng:boolean=false;
  checkertiga:boolean=false;
  checkxylo:boolean=false;
  checkindica:boolean=false;
  cabtyprchecked:boolean=false;
  fueltypechecked:boolean=false;
  modelchecked:boolean=false;



  filter()
  {
   
  
  this.cabtyprchecked=false;
  this.fueltypechecked=false;
  this.modelchecked=false;
    this.filtercabArray=[];
    if(this.checksuv)
    {
      for(let i=0;i<this.cabArray.length;i++)
      {
        if(this.cabArray[i].cabType=="SUV")
        {
         this.filtercabArray.push(this.cabArray[i])
         this.cabtyprchecked=true;
        }
      }
    }
    if(this.checksedan)
    {
      
        for(let i=0;i<this.cabArray.length;i++)
        {
          if(this.cabArray[i].cabType=="SEDAN")
          {
            this.filtercabArray.push(this.cabArray[i])
            this.cabtyprchecked=true;
          }
        }
      
    }
    if(this.checkhatchback)
    {
      for(let i=0;i<this.cabArray.length;i++)
      {
        if(this.cabArray[i].cabType=="HATCHBACK")
        {
          this.filtercabArray.push(this.cabArray[i])
          this.cabtyprchecked=true;
        }
      }
    }
    if(this.checkpetrol)
    {
      if(this.cabtyprchecked)
      {
        let tempfuelcheck:Cab[]=[];
        for(let i=0;i<this.filtercabArray.length;i++)
        {
          if(this.filtercabArray[i].fuelType=="PETROL")
          {
            tempfuelcheck.push(this.filtercabArray[i])
            this.fueltypechecked=true;
          }
        }
        this.filtercabArray=tempfuelcheck;
      }
      else
    {
      for(let k=0;k<this.cabArray.length;k++)
        {
          if(this.cabArray[k].fuelType=="PETROL")
          {
            this.filtercabArray.push(this.cabArray[k])
            this.fueltypechecked=true;
          }
        }
    }
    }
    if(this.checkdiesel)
    {
      if(this.cabtyprchecked)
      {
        let tempfuelcheck:Cab[]=[];
        if(this.fueltypechecked)
        {
           
        }
        else
        {
        for(let i=0;i<this.filtercabArray.length;i++)
        {
          if(this.filtercabArray[i].fuelType=="DIESEL")
          {
            tempfuelcheck.push(this.filtercabArray[i])
            this.fueltypechecked=true;
          }
        }

        this.filtercabArray=tempfuelcheck;
      }
      }
      else
      {
        for(let k=0;k<this.cabArray.length;k++)
        {
          if(this.cabArray[k].fuelType=="DIESEL")
          {
            this.filtercabArray.push(this.cabArray[k])
            this.fueltypechecked=true;
          }
        }

      }
    }
    if(this.checkcng)
    {
      if(this.cabtyprchecked)
      {
        let tempfuelcheck:Cab[]=[];
        if(this.fueltypechecked)
        {
           
        }
        else
        {
        for(let i=0;i<this.filtercabArray.length;i++)
        {
          if(this.filtercabArray[i].fuelType=="CNG")
          {
            tempfuelcheck.push(this.filtercabArray[i])
            this.fueltypechecked=true;
          }
        }

        this.filtercabArray=tempfuelcheck;
      }
      }
      else
      {
        for(let k=0;k<this.cabArray.length;k++)
        {
          if(this.cabArray[k].fuelType=="CNG")
          {
            this.filtercabArray.push(this.cabArray[k])
            this.fueltypechecked=true;
          }
        }

      }
    }
    if(this.checkertiga)
    {
      if(this.cabtyprchecked || this.fueltypechecked)
      {
       let tempmodelcheck:Cab[]=[];
       if(this.modelchecked)
       {

       }
       else
       {
        for(let i=0;i<this.filtercabArray.length;i++)
        {
          if(this.filtercabArray[i].model=="ERTIGA")
          {
            tempmodelcheck.push(this.filtercabArray[i])
            this.modelchecked=true;
          }
        }

        this.filtercabArray=tempmodelcheck;
       }
      }
      else
      {
        for(let k=0;k<this.cabArray.length;k++)
        {
          if(this.cabArray[k].model=="ERTIGA")
          {
            this.filtercabArray.push(this.cabArray[k])
            this.modelchecked=true;
          }
        }
      }
    }
    if(this.checkxylo)
    {
      if(this.cabtyprchecked || this.fueltypechecked)
      {
       let tempmodelcheck:Cab[]=[];
       if(this.modelchecked)
       {

       }
       else
       {
        for(let i=0;i<this.filtercabArray.length;i++)
        {
          if(this.filtercabArray[i].model=="XYLO")
          {
            tempmodelcheck.push(this.filtercabArray[i])
            this.modelchecked=true;
          }
        }

        this.filtercabArray=tempmodelcheck;
       }
      }
      else
      {
        for(let k=0;k<this.cabArray.length;k++)
        {
          if(this.cabArray[k].model=="XYLO")
          {
            this.filtercabArray.push(this.cabArray[k])
            this.modelchecked=true;
          }
        }
      }
    }
    if(this.checkindica)
    {
      if(this.cabtyprchecked || this.fueltypechecked)
      {
       let tempmodelcheck:Cab[]=[];
       if(this.modelchecked)
       {

       }
       else
       {
        for(let i=0;i<this.filtercabArray.length;i++)
        {
          if(this.filtercabArray[i].model=="INDICA")
          {
            tempmodelcheck.push(this.filtercabArray[i])
            this.modelchecked=true;
          }
        }

        this.filtercabArray=tempmodelcheck;
       }
      }
      else
      {
        for(let k=0;k<this.cabArray.length;k++)
        {
          if(this.cabArray[k].model=="INDICA")
          {
            this.filtercabArray.push(this.cabArray[k])
            this.modelchecked=true;
          }
        }
      }
    }
    if( !(this.checkdiesel || this.checkpetrol || this.checkcng || this.checkhatchback || this.checksedan||this.checksuv|| this.checkertiga||this.checkindica||this.checkxylo ))
    {
      this.filtercabArray=this.cabArray;
    }
    
    this.result=this.filtercabArray.length;

  }



  cabArray:Cab[]=[];
 city:any
 result:any
 filtercabArray:Cab[]=[];
  constructor(private cabService:CabService,private service:OrderService,private activatedRoute:ActivatedRoute,private d:MatDialog) { }


  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  ngOnInit(): void {
    this.city = this.activatedRoute.snapshot.paramMap.get('name');
    this.cabService.findCab(this.city).subscribe(x => {
      console.log(x)
      this.cabArray = x;
      this.filtercabArray=this.cabArray;
      this.result=this.cabArray.length;
      console.log(x);
      x.forEach(y=>{
        this.city=y.city;
      })
    })
  }
cabuser:CabOrder=new CabOrder();
  pay(cab:any)
  {
   this.cabuser=this.service.caborder;
    this.cabuser.cabType=cab.cabType;
    this.cabuser.cabmodel=cab.model;
    this.cabuser.registrationNo=cab.registrationNo;
    this.cabuser.pricePerKm=cab.pricePerKm*200;
    //this.service.getCab(this.cabuser);
    this.d.open(CabreservationComponent,{
      height:'700px',
      width:'700px',
      data:this.cabuser
    })
  }
}
