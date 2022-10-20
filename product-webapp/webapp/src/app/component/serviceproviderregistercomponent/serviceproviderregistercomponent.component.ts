import { Component, OnInit, Type } from '@angular/core';
import { AbstractControl, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { RegisterserviceService } from 'src/app/service/registerservice.service';

@Component({
  selector: 'app-serviceproviderregistercomponent',
  templateUrl: './serviceproviderregistercomponent.component.html',
  styleUrls: ['./serviceproviderregistercomponent.component.css']
})
export class ServiceproviderregistercomponentComponent implements OnInit {
  Registerform:UntypedFormGroup
  

  accesstatus:boolean=true;
  static RegistercomponentComponentt: any[] | Type<any>;
  constructor(private registerservice:RegisterserviceService) {
    this.Registerform=new UntypedFormGroup({
      name:new UntypedFormControl('',[Validators.required]),
      email:new UntypedFormControl('',[Validators.required,Validators.email]),
      phoneNo:new UntypedFormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
      password:new UntypedFormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(15)]),
      confirmpassword:new UntypedFormControl("",[Validators.required,confirmpasswordvalidator]),
      gst:new UntypedFormControl("",[Validators.required,Validators.maxLength(7)]),
      accountNo:new UntypedFormControl("",[Validators.required,Validators.maxLength(10)]),
      cin:new UntypedFormControl("",[Validators.required,Validators.maxLength(6)]),
      address:new UntypedFormGroup({
        streetname:new UntypedFormControl('',[Validators.required]),
        state:new UntypedFormControl('',[Validators.required]),
        city:new UntypedFormControl('',[Validators.required]),
        pincode:new UntypedFormControl('',[Validators.required,Validators.maxLength(6)])

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
