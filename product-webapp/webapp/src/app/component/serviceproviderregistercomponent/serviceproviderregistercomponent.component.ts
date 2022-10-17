import { Component, OnInit, Type } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterserviceService } from 'src/app/service/registerservice.service';

@Component({
  selector: 'app-serviceproviderregistercomponent',
  templateUrl: './serviceproviderregistercomponent.component.html',
  styleUrls: ['./serviceproviderregistercomponent.component.css']
})
export class ServiceproviderregistercomponentComponent implements OnInit {
  Registerform:FormGroup
  

  accesstatus:boolean=true;
  static RegistercomponentComponentt: any[] | Type<any>;
  constructor(private registerservice:RegisterserviceService) {
    this.Registerform=new FormGroup({
      name:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required,Validators.email]),
      phoneNo:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
      password:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(15)]),
      confirmpassword:new FormControl("",[Validators.required,confirmpasswordvalidator]),
      gst:new FormControl("",[Validators.required,Validators.maxLength(7)]),
      accountNo:new FormControl("",[Validators.required,Validators.maxLength(10)]),
      cin:new FormControl("",[Validators.required,Validators.maxLength(6)]),
      address:new FormGroup({
        streetname:new FormControl('',[Validators.required]),
        state:new FormControl('',[Validators.required]),
        city:new FormControl('',[Validators.required]),
        pincode:new FormControl('',[Validators.required,Validators.maxLength(6)])

      })

      
      
    })
   }
   fun1()
    {
     const  regData = this.Registerform.value;
      this.registerservice.registerServiceProvider(regData).subscribe((x:any) => {
        alert("successfully registerd")
        
      
       },(error: any) => {
       
         console.log(error)
       });
      
   
    }

  ngOnInit(): void {
  }

}

export function confirmpasswordvalidator(control:AbstractControl)
{
  
  if(control.value === control.parent?.value.password)
  {
  
    return null;
  }
  else{
    return { myError1:false}
  }

 

}
