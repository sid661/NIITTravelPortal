import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Place } from '../model/place';
import { Resturant } from '../model/resturant';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(private http:HttpClient) { }

  getPlacesByCity(city:any)
  {
    return this.http.get<Place[]>("http://localhost:9000/information/findPlaces/"+city)
  }
  getResturantByCity(city:any)
  {
    return this.http.get<Resturant[]>("http://localhost:9000/information/findRestaurants/"+city)
  }
}
