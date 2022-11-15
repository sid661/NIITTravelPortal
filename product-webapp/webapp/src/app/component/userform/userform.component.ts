import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/service/order.service';
export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  },
};
@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css'],
providers: [
  { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
]
})
export class UserformComponent implements OnInit {
  mindate:Date=new Date();

  constructor(public dailog: MatDialogRef<UserformComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private r:Router,private d:MatDialog,private service:OrderService,private datepipe:DatePipe) { }
  userForm=new FormGroup({
    title:new FormControl(""),
    firstName:new FormControl(""),
    lastName:new FormControl(""),
    email:new FormControl(""),
    phoneNo:new FormControl(""),
    startDate:new FormControl('',[Validators.required,startdatevalidator,Validators.nullValidator]),
      endDate:new FormControl('',[Validators.required,startdatevalidator,enddatevalidator]),
     
  })
  ngOnInit(): void {
    this.userForm.get("email")?.setValue(localStorage.getItem("email"));
  }

 
value:any
date1?:Date=new Date();
date2?:Date=new Date("01/11/2022")
time:any;
da:any;
  pay()
  {

  //   this.date1=this.datepipe.transform(this.userForm.value.startDate,'MM-dd-yyyy')?
  //   this.date2=this.datepipe.transform(this.userForm.value.endDate,'MM-dd-yyyy')?
  //   this.time=this.date2!.getTime()-this.date1!.getTime()?
    
  //  this.da=Math.round(this.time/(1000*3600*24))
    console.log(this.userForm.value.startDate)
    console.log(this.date1)
    console.log(this.userForm.value.endDate);
    this.time=new Date(this.userForm.value.endDate!).getTime()-new Date(this.userForm.value.startDate!).getTime()
    this.da=Math.round(this.time/(1000*3600*24))
    console.log("days" + this.da);
    
    
    console.log("days",this.da)
    //console.log(this.userForm.value)
    this.data.userEmailId=this.userForm.value.email;
    this.data.startDate=this.userForm.value.startDate;
    this.data.endDate=this.userForm.value.endDate;
    this.data.phoneNumber=this.userForm.value.phoneNo;
    // this.data.title=this.userForm.value.title;
    this.data.firstName=this.userForm.value.firstName;
    this.data.lastName=this.userForm.value.lastName;
   this.data.price=this.data.price*this.da

    console.log(this.data)
    this.service.getData(this.data);
    this.d.closeAll();
    this.r.navigateByUrl('header')
    
    
    // this.value=localStorage.getItem("token");
    // if(this.value==null){
    //       this.r.navigateByUrl("login");
    //   }
    
    // else{
      
     
    // }
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
