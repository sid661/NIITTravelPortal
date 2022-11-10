import { Component, Input, OnInit } from '@angular/core';
import { Resturant } from 'src/app/model/resturant';
import { PlaceService } from 'src/app/service/place.service';

@Component({
  selector: 'app-resturant',
  templateUrl: './resturant.component.html',
  styleUrls: ['./resturant.component.css']
})
export class ResturantComponent implements OnInit {
  @Input() city:any
  retrieveImage: any;
  resturantArray: Resturant[] = [];

  public loggedIn=false;
  

  constructor(private service: PlaceService) {

  }
  value:any

  

  ngOnInit(): void {
    
    
    this.service.getResturantByCity(this.city).subscribe(x=>{
        this.resturantArray=x;
    })
      
      
      
   
  }


}
