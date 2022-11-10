import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
  place=new FormGroup({
    city:new FormControl("")
  })
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  search()
  {
    this.router.navigate(['information/',this.place.value.city])
  }

}
