import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private service:LoginService) { }
  forgot=new FormGroup({
    email:new FormControl(""),
    userRole:new FormControl("USER", [Validators.required])
  })
  ngOnInit(): void {
  }

  find()
  {
    const reg=this.forgot.value;
    this.service.forgot(reg).subscribe(x=>{
      alert("x");
    })
  }

}
