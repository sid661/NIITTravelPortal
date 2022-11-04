import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterserviceService } from 'src/app/service/registerservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  accesstatus:boolean=true;
  registerForm:FormGroup;
  serviceregisterForm:FormGroup;
  constructor(private registerservice:RegisterserviceService,private router:Router) {
    this.registerForm=new FormGroup({
      name:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required,Validators.email]),
      phoneNo:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
      password:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(15)]),
      confirmpassword:new FormControl("",[Validators.required,confirmpasswordvalidator]),
      premiumMember:new FormControl("",[])
      
    })
    this.serviceregisterForm=new FormGroup({
      name:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required,Validators.email]),
      phoneNo:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
      password:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(15)]),
      gst:new FormControl("",[Validators.required,confirmpasswordvalidator]),
   
      
    })
   }
   

   

  ngOnInit(): void {
  }
  register()
  {
    const  regData = this.registerForm.value;
    this.registerservice.register(regData).subscribe(() => {
      alert("successfully registerd")
      this.router.navigateByUrl("login")
    
     },(error: any) => {
      this.accesstatus=false;
       console.log(error)
     });
    
  }

  serviceregister()
  {
    const  regData1 = this.serviceregisterForm.value;
    this.registerservice.serviceregister(regData1).subscribe(() => {
      alert("successfully registerd")
      this.router.navigateByUrl("login")
      
    
     },(error: any) => {
      this.accesstatus=false;
       console.log(error)
     });
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
