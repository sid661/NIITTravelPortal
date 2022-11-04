import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Rounded } from '@coreui/angular/lib/utilities/rounded.type';
import { User } from 'src/app/model/user';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService,private router:Router) { }
  loginForm=new FormGroup({
    email:new FormControl(""),
    password:new FormControl(""),
    userRole:new FormControl("USER", [Validators.required]),
})
user:User=new User();

  ngOnInit(): void {
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
    console.log("invalid credentails");
    
  }
  )
}

}
