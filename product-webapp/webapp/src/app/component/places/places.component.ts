import { Component, Input, OnInit } from '@angular/core';
import { Place } from 'src/app/model/place';
import { PlaceService } from 'src/app/service/place.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {
  @Input() city:any
  placeArray:Place[]=[];
  place1:Place=new Place();
  result:any;
  constructor(private placeService:PlaceService) { }
  retrieveImage:any;
  ngOnInit(): void {

    this.placeService.getPlacesByCity(this.city).subscribe(x=>{
      this.placeArray=x;
      this.result=x.length;
      console.log(x)
      x.forEach(y=>{
        this.retrieveImage = 'data:image/jpg;base64,' +y.image;

      })
    })
  }

}
