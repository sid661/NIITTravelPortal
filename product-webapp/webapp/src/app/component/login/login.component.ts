import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';

import { User } from 'src/app/model/user';
import { LoginService } from 'src/app/service/login.service';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { HotelService } from 'src/app/service/hotel.service';
declare var FB:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user1 :any;
loggedIn :any;
name:any
  constructor(private loginService:LoginService,private router:Router,private dialog:MatDialog,private authservice:SocialAuthService,private hotelservice:HotelService) { }
  loginForm=new FormGroup({
    email:new FormControl(""),
    password:new FormControl(""),
    userRole:new FormControl("USER", [Validators.required]),
})
user:User=new User();

  ngOnInit(): void {
    this.authservice.authState.subscribe((user1: any) => {
      this.user1 = user1 ;
      this.loggedIn = (user1 != null);
      console.log(this.user);
  
    })
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
    console.log(this.loginForm.value.email);
    
          this.loginService.loginUser(x.token, this.user.email,x.role);
          if(x.role=="SERVICEPROVIDER")
          {
            this.router.navigate(['view'])
            
          }
          else
          {
            
            
                this.router.navigate([''])
          }
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
