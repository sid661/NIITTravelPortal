import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { OtpformComponent } from '../otpform/otpform.component';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private service:LoginService,private route:Router,private dialog:MatDialog) { }
  forgot=new FormGroup({
    email:new FormControl(""),
    role:new FormControl("USER", [Validators.required])
  })
  ngOnInit(): void {
  }

  find()
  {
    const reg=this.forgot.value;
    localStorage.setItem("email",this.forgot.value.email!)
    localStorage.setItem("role",this.forgot.value.role!)
    this.service.forgot(reg).subscribe((x:any)=>{
      if(x==true)
      {
        alert("otp is send to your emailId")
        this.service.otp(this.forgot.value.email).subscribe(x=>{
          alert(x)
            this.dialog.closeAll();
            this.dialog.open(OtpformComponent,{
              data:x
            })
        })
      }
      else{
        alert("email id is not registered")
        this.route.navigate(['login'])
      }
    })
  }

}
