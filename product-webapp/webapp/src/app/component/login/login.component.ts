import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { User } from 'src/app/model/user';
import { LoginService } from 'src/app/service/login.service';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
declare var FB:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService,private router:Router,private dialog:MatDialog) { }
  loginForm=new FormGroup({
    email:new FormControl(""),
    password:new FormControl(""),
    userRole:new FormControl("USER", [Validators.required]),
})
user:User=new User();

  ngOnInit(): void {
  }

  f()
  {
    new FB();
  }

  route(){
    this.router.navigate(['']);
  }
  signInWithGoogle()
  {
    //this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  
login()
{
  console.log("value ", this.loginForm);

  
  this.user.role=this.loginForm.value.userRole!;
  this.user.email=this.loginForm.value.email!;
  this.user.password=this.loginForm.value.password!;
  this.loginService.generateToken(this.user).subscribe((x:any)=>{
    console.log("token login ",x.token);
    console.log("role",x.role)
          this.loginService.loginUser(x.token, this.user.email,x.role);
          this.router.navigate(['']);
  },
  ()=>
  {
    alert("invalid credentails");
    
  }
  )
}

open()
{ 
  this.dialog.open(ForgotPasswordComponent,{
    width: '500px',
    height: '300px'
  });

}


}
