import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-holidaypackages',
  templateUrl: './holidaypackages.component.html',
  styleUrls: ['./holidaypackages.component.css']
})
export class HolidaypackagesComponent implements OnInit {

  constructor(private router:Router) { }
  packagesearch=new FormGroup({
    package:new FormControl("")
  })
  ngOnInit(): void {
  }

  search()
  {
    console.log("package",this.packagesearch.value.package);
    
    this.router.navigate(['package/',this.packagesearch.value.package])

  }

}
