import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/service/order.service';
export interface Booking {
  bookingId: string;
  hotelName: number;
  hotelAddress: number;
  
}




@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
 
 
  dataSource:any;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  email:any;
  cancel(Bookingid:any)
  {
   this.orderservice.cancelroom(Bookingid).subscribe((x)=>{
    //this.router.navigateByUrl('allbookings')
    alert("Cancelled")
    location.reload();
   })
  }

  constructor(private orderservice:OrderService,private router:Router) {
 

  
 
}
data:any
  ngOnInit(): void 
  {
  this.email= localStorage.getItem("email");
  console.log(this.email);
  this.orderservice.getbookedhotels(this.email).subscribe((x)=>{
    this.dataSource=x;
    console.log(this.dataSource);
    
  })
  this.orderservice.getbookedCabs(localStorage.getItem("email")).subscribe(x=>{
    this.data=x;
    console.log(this.data);
    
  })
  }
}
