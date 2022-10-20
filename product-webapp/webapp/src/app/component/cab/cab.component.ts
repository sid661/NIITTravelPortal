import { Component, Input, OnInit } from '@angular/core';
import { Cab } from 'src/app/model/cab';
import { CabService } from 'src/app/service/cab.service';

@Component({
  selector: 'app-cab',
  templateUrl: './cab.component.html',
  styleUrls: ['./cab.component.css']
})
export class CabComponent implements OnInit {
 @Input() cabArray:Cab[]=[];
  constructor(private cabService:CabService) { }
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  ngOnInit(): void {
    this.cabService.findCab().subscribe(x => {
      this.cabArray = x;
      console.log(x);
    })
  }

}