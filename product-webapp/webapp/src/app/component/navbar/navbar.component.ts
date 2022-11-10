import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  ngOnInit(): void {

    this.loggedIn=this.loginService.isLoggedIn();
    this.userName = localStorage.getItem("email");
    this.userRole=localStorage.getItem("role");
    
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
