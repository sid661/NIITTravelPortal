import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
declare function search():void;
declare var $: any;
declare var jQuery: any;


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
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css'],
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
export class HotelsComponent implements OnInit {

  date = new FormControl(moment());
  serializedDate = new FormControl(new Date().toISOString());

  constructor(private router:Router) { }
  searchform=new FormGroup({
    city:new FormControl("")
  })
  noOfAdults=0;
  ngOnInit(): void {
  }
  search1()
  {

   
    this.router.navigate(['viewhotel/',this.searchform.value.city])

    console.log(this.searchform.value.city!)
    

  }

  add()
  {
    this.noOfAdults=this.noOfAdults+1
  }

  sub()
  {
    this.noOfAdults=this.noOfAdults-1
  }

  f(){
  //  new  search();
  }

}
