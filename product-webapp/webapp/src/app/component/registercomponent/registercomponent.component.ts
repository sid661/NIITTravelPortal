import { Component, OnInit } from '@angular/core';
import { AbstractControl, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { RegisterserviceService } from 'src/app/service/registerservice.service';

@Component({
  selector: 'app-registercomponent',
  templateUrl: './registercomponent.component.html',
  styleUrls: ['./registercomponent.component.css']
})
export class RegistercomponentComponent implements OnInit {

  accesstatus:boolean=true;

  Registerform:UntypedFormGroup
  constructor(private registerservice:RegisterserviceService) { 
    this.Registerform=new UntypedFormGroup({
      name:new UntypedFormControl('',[Validators.required]),
      email:new UntypedFormControl('',[Validators.required,Validators.email]),
      phoneNo:new UntypedFormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
      password:new UntypedFormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(15)]),
      confirmpassword:new UntypedFormControl("",[Validators.required,confirmpasswordvalidator]),
      premiumMember:new UntypedFormControl("",[])
      
    })
  }
  fun1()
    {
     const  regData = this.Registerform.value;
      this.registerservice.register(regData).subscribe(() => {
        alert("successfully registerd")
        
      
       },(error: any) => {
        this.accesstatus=false;
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
