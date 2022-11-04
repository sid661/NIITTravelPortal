import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-holidaypackages',
  templateUrl: './holidaypackages.component.html',
  styleUrls: ['./holidaypackages.component.css']
})
export class HolidaypackagesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  search()
  {
    this.router.navigate(['package'])

  }

}
