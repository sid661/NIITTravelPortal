import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  search()
  {
    this.router.navigate(['places'])
  }

}
