import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { LabelType, Options } from 'ng5-slider';
import { Cab } from 'src/app/model/cab';
import { TourPackage } from 'src/app/model/tour-package';
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
  constructor(private service:RegisterserviceService) { }
packageArray:any=[]
city:string="Delhi"
length:any
result:any
color: ThemePalette = 'warn';
mode: ProgressBarMode = 'determinate';
// value = 50;
bufferValue = 75;
  ngOnInit(): void {
    this.service.getPackage().subscribe(x=>{
 console.log(x);
 this.packageArray=x;
 this.result=this.packageArray.length;
 
//  this.city=x.forEach((element:any )=> {
//   this.city=element;
//  });
    })
  }

}
