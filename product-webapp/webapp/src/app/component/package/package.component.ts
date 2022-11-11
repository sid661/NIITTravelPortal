import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { ActivatedRoute } from '@angular/router';
import { LabelType, Options } from 'ng5-slider';
import { Cab } from 'src/app/model/cab';
import { TourPackage } from 'src/app/model/tour-package';
import { PackageService } from 'src/app/service/package.service';
import { RegisterserviceService } from 'src/app/service/registerservice.service';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {
  range:any
  minValue: number = 9000;
  maxValue: number = 150000;
  options: Options = {
    floor: 9000,
    ceil: 15000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return 'Rs. ' + value;
        case LabelType.High:
          return 'Rs' + value;
        default:
          return 'Rs.' + value;
      }
    }
  }
  minDate: number = 2;
  maxDate: number = 7;
 nights : Options = {
    floor: 2,
    ceil: 7,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return  value+'N';
        case LabelType.High:
          return  value+'N';
        default:
          return value+'N';
      }
    }
  }
  constructor(private service:PackageService,private activatedRoute:ActivatedRoute) { }
packageArray:any=[]
filterpackageArray:any=[];

city:any;
length:any
result:any
color: ThemePalette = 'warn';
mode: ProgressBarMode = 'determinate';
// value = 50;
bufferValue = 75;
  ngOnInit(): void {
    this.city = this.activatedRoute.snapshot.paramMap.get('name');
    this.service.getPackage(this.city).subscribe(x=>{
 console.log(x);
 this.packageArray=x;
 this.filterpackageArray=this.packageArray;
 this.result=this.packageArray.length;
 
//  this.city=x.forEach((element:any )=> {
//   this.city=element;
//  });
    })
  }
  
  sort(sort:any)
  {
   if(sort=="phightolow")
   {
    for(let i=0;i<this.filterpackageArray.length;i++)
    {
      for(let j=1; j < this.filterpackageArray.length-i; j++)
      {

        if(this.filterpackageArray[j-1].costPerPerson < this.filterpackageArray[j].costPerPerson){  
               
              let temp = this.filterpackageArray[j-1];  
               this.filterpackageArray[j-1] = this.filterpackageArray[j];  
               this.filterpackageArray[j] = temp;  
       }  
        
     }  
   }
    
   
  }
  if(sort=="plowtohigh")
  {
    for(let i=0;i<this.filterpackageArray.length;i++)
    {
      for(let j=1; j < this.filterpackageArray.length-i; j++)
      {

        if(this.filterpackageArray[j-1].costPerPerson > this.filterpackageArray[j].costPerPerson){  
               
              let temp = this.filterpackageArray[j-1];  
               this.filterpackageArray[j-1] = this.filterpackageArray[j];  
               this.filterpackageArray[j] = temp;  
       }  
        
     }  
   }
  }
  if(sort=="dhightolow")
  {
    for(let i=0;i<this.filterpackageArray.length;i++)
    {
      for(let j=1; j < this.filterpackageArray.length-i; j++)
      {

        if(this.filterpackageArray[j-1].noOfNights < this.filterpackageArray[j].noOfNights){  
               
              let temp = this.filterpackageArray[j-1];  
               this.filterpackageArray[j-1] = this.filterpackageArray[j];  
               this.filterpackageArray[j] = temp;  
       }  
        
     }  
   }
  }
  if(sort=="lowtohigh")
  {
    for(let i=0;i<this.filterpackageArray.length;i++)
    {
      for(let j=1; j < this.filterpackageArray.length-i; j++)
      {

        if(this.filterpackageArray[j-1].noOfNights > this.filterpackageArray[j].noOfNights){  
               
              let temp = this.filterpackageArray[j-1];  
               this.filterpackageArray[j-1] = this.filterpackageArray[j];  
               this.filterpackageArray[j] = temp;  
       }  
        
     }  
   }
  }

}
nightsa(slider:any)
{
  this.filterpackageArray=[];
  if(slider==2)
  {
    this.filterpackageArray=[];
    for(let i=0;i<this.packageArray.length;i++)
    {
      if(this.packageArray[i].noOfNights==2)
      {
        this.filterpackageArray.push(this.packageArray[i])
      }
    }
  }
  if(slider==3)
  {
    this.filterpackageArray=[];
    for(let i=0;i<this.packageArray.length;i++)
    {
      if(this.packageArray[i].noOfNights==3)
      {
        this.filterpackageArray.push(this.packageArray[i])
      }
    }
  }
  if(slider==4)
  {
    this.filterpackageArray=[];
    for(let i=0;i<this.packageArray.length;i++)
    {
      if(this.packageArray[i].noOfNights==4)
      {
        this.filterpackageArray.push(this.packageArray[i])
      }
    }
  }
  if(slider==5)
  {
    this.filterpackageArray=[];
    for(let i=0;i<this.packageArray.length;i++)
    {
      if(this.packageArray[i].noOfNights==5)
      {
        this.filterpackageArray.push(this.packageArray[i])
      }
    }
  }
  if(slider==6)
  {
    this.filterpackageArray=[];
    for(let i=0;i<this.packageArray.length;i++)
    {
      if(this.packageArray[i].noOfNights==6)
      {
        this.filterpackageArray.push(this.packageArray[i])
      }
    }
  }
  if(slider==7)
  {
    this.filterpackageArray=[];
    for(let i=0;i<this.packageArray.length;i++)
    {
      if(this.packageArray[i].noOfNights==7)
      {
        this.filterpackageArray.push(this.packageArray[i])
      }
    }
  }
console.log(slider);

this.result=this.filterpackageArray.length;
}

}
