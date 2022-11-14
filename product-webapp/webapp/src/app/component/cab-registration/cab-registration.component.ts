import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Cab } from 'src/app/model/cab';
import { CabService } from 'src/app/service/cab.service';

@Component({
  selector: 'app-cab-registration',
  templateUrl: './cab-registration.component.html',
  styleUrls: ['./cab-registration.component.css']
})
export class CabRegistrationComponent implements OnInit {
cabForm=new FormGroup({
  city:new FormControl(""),
  fuelType:new FormControl(""),
  cabType:new FormControl(""),
  permit:new FormControl(""),
  pricePerKm:new FormControl(0),
  model:new FormControl("")

})

cab:Cab=new Cab();
  constructor(private service:CabService,private router:Router) { }

  ngOnInit(): void {
  }
  save()
  {
    this.cab.cabType=this.cabForm.value.cabType!;
    this.cab.city=this.cabForm.value.city!;
    this.cab.fuelType=this.cabForm.value.fuelType!;
    this.cab.model=this.cabForm.value.model!;
    this.cab.permit=this.cabForm.value.permit!;
    this.cab.pricePerKm=this.cabForm.value.pricePerKm!;

    this.service.saveCab(this.cab).subscribe((x:any)=>{
      alert("cab registered successfully");
      this.router.navigate(['view'])
    })

   
  //  this.service.saveCab() 
  

}
}