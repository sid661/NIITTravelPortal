import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {  Router } from '@angular/router';
import * as moment from 'moment';
import * as _moment from 'moment';

//import {default as _rollupMoment} from 'moment';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { CabOrder } from 'src/app/model/cab-order';
import { OrderService } from 'src/app/service/order.service';
//import {default as _rollupMoment} from 'moment';
//const moment = _rollupMoment || moment;
export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
@Component({
  selector: 'app-cabs',
  templateUrl: './cabs.component.html',
  styleUrls: ['./cabs.component.css'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class CabsComponent implements OnInit {
  pickUpDate = new FormControl(new Date());
  dropDate=new FormControl(new Date())
  serializedDate = new FormControl(new Date().toISOString());
  constructor(private router:Router,private service:OrderService) { }
  cabsearch = new FormGroup({
    tripType:new FormControl(""),
    pickUpDate:new FormControl(new Date()),
     dropDate:new FormControl(new Date()),
    start:new FormControl(""),
    destination:new FormControl(""),
    time:new FormControl("")
    
  })

  ngOnInit(): void {
  }
  searchcabmethod(){
   
  }
  cab:CabOrder=new CabOrder();
  search()
  {
    this.cab.endDate=this.dropDate.value?.toISOString()!;
    this.cab.tourType=this.cabsearch.value.tripType!;
    this.cab.startDate=this.pickUpDate.value?.toISOString()!;
    this.cab.startPoint=this.cabsearch.value.start!;
    this.cab.endPoint=this.cabsearch.value.destination!;
    this.cab.pickUpTime=this.cabsearch.value.time!;
    this.service.getCab(this.cab);
    console.log(this.dropDate.value?.toLocaleDateString())

  
    this.router.navigate(['cab/',this.cabsearch.value.start])
    
  }
}
