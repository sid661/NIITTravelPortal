import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { RegisterserviceService } from 'src/app/service/registerservice.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  constructor(private service:RegisterserviceService,private r:Router) { }
  resetform=new FormGroup({
    password:new FormControl(""),
    cnf:new FormControl("")

  })
user:User=new User();
  ngOnInit(): void {
  }
  reset()
  {
    this.user.email=localStorage.getItem("email")!;
    this.user.role=localStorage.getItem("role")!;
    this.user.password=this.resetform.value.password!;
    this.service.update(this.user).subscribe(x=>{
      alert("password update succesfully")
      localStorage.removeItem("email");
      localStorage.removeItem("role");
        this.r.navigate(['login'])
    }) 
  }

}
