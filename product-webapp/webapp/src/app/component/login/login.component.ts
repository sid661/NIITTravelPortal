import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/model/user';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService) { }
  loginForm=new FormGroup({
    email:new FormControl(""),
    password:new FormControl("")
})
user:User=new User();

  ngOnInit(): void {
  }
login()
{
  this.user.email=this.loginForm.value.email;
  this.user.password=this.loginForm.value.password;
  this.loginService.login(this.user).subscribe((x)=>{
    console.log(x);
    this.loginForm.reset();
  },
  error=>
  {
    console.log("invalid credentails");
    
  }
  )
}

}