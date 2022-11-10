import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { HotelService } from 'src/app/service/hotel.service';

@Component({
  selector: 'app-bookroom',
  templateUrl: './bookroom.component.html',
  styleUrls: ['./bookroom.component.css']
})
export class BookroomComponent implements OnInit {

  bookroomform:FormGroup
  constructor(private hotelservice:HotelService) { 
    this.bookroomform=new FormGroup({
      
      startDate:new FormControl('',[Validators.required,startdatevalidator]),
      endDate:new FormControl('',[Validators.required,startdatevalidator,enddatevalidator]),
     
      
  
    })
  }
  mindate:Date=new Date();
  bookroom()
  {

  }

  ngOnInit(): void 
  {
  
  }

}

export function startdatevalidator(control:AbstractControl)
{
  let today : Date = new Date();
  
  if(control.value && new Date(control.value) >= today)
  {
  
    return null;
  }
  else{
    return { myError1:false}
  }
}
export function enddatevalidator(control:AbstractControl)
{
 console.log(control.parent?.value.startDate);
  if(new Date(control.value) >= new Date(control.parent?.value.startDate))
  {
    return null;
  }
  else{
    return { myError2:false}
  }

}
