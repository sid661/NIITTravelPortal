import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.css']
})
export class Navbar2Component implements OnInit {

  constructor(private loginService:LoginService,private router:Router) { }
  public loggedIn=false;
  userRole:any;
  userName: any;
  ngOnInit(): void {
    this.loggedIn=this.loginService.isLoggedIn();
    this.userName = localStorage.getItem("email");
    this.userRole=localStorage.getItem("role");
  }

  hotel()
  {
    this.router.navigateByUrl('regHotel');
  }

  cab()
  {
    this.router.navigate(['cabreg'])
  }
 package()
 {
  this.router.navigate(['reg'])
 }
}
