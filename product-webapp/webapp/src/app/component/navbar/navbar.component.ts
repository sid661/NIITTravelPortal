import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { LoginService } from 'src/app/service/login.service';
declare var FB:any
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private loginService:LoginService,private route:Router) { }
  public loggedIn=false;
  userRole:any;
  userName: any;
  user:User=new User();
  name:any
  ngOnInit(): void {

    this.loggedIn=this.loginService.isLoggedIn();
    this.userName = localStorage.getItem("email");
    this.userRole=localStorage.getItem("role");
    this.user.email=localStorage.getItem("email")!;
    this.user.role=localStorage.getItem("role")!;
    if(this.user.role=="USER")
    {
      this.loginService.getUser(this.user.email).subscribe((x:any)=>{
        console.log(x)
        this.name=x.name;
    })
    }
    else{
      this.loginService.getProvider(this.user.email).subscribe((x:any)=>{
        this.name=x.name;
      })
    }
    
    
  }

  f()
  {
    new FB();
  }

  logoutUser(){
    this.loginService.logout();
    this.route.navigateByUrl("");
    location.reload();
  }

}
