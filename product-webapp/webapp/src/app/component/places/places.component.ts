import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/model/place';
import { PlaceService } from 'src/app/service/place.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  placeArray:Place[]=[];
  place1:Place=new Place();
  reach:string[]=[]
  near:string[]=[];
  constructor(private placeService:PlaceService) { }
  retrieveImage:any;
  ngOnInit(): void {

    this.placeService.getPlacesByCity().subscribe(x=>{
      this.placeArray=x;
      
      x.forEach(y=>{
        this.retrieveImage = 'data:image/jpg;base64,' +y.image;
        this.reach=y.howToReach;
        this.near=y.nearByPlaces
        

      })
    })
  }

}
