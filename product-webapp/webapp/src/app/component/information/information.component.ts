import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }
  city:any
  ngOnInit(): void {
    this.city = this.activatedRoute.snapshot.paramMap.get('name');
  }

}
