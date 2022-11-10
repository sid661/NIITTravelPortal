import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar3',
  templateUrl: './navbar3.component.html',
  styleUrls: ['./navbar3.component.css']
})
export class Navbar3Component {

  
  constructor(private loginService:LoginService,private r:Router) { }
  public loggedIn=false;
  userRole:any;
  userName: any;
  ngOnInit(): void {

    this.loggedIn=this.loginService.isLoggedIn();
    this.userName = localStorage.getItem("email");
    this.userRole=localStorage.getItem("role");
    
  }

  logoutUser(){
    this.loginService.logout();
    this.r.navigateByUrl("");
    location.reload();
  }
  route()
  { console.log("clicked");
  
      this.r.navigate(['login'])
  }
}
