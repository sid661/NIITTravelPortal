import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cabs',
  templateUrl: './cabs.component.html',
  styleUrls: ['./cabs.component.css']
})
export class CabsComponent implements OnInit {

  constructor() { }
  cabsearch = new FormGroup({
    
  })

  ngOnInit(): void {
  }
  searchcabmethod(){

  }
}
