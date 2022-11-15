import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Place } from '../model/place';
import { Resturant } from '../model/resturant';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(private http:HttpClient) { }
  baseUrl="http://localhost:8080";
  getPlacesByCity(city:any)
  {
    return this.http.get<Place[]>(this.baseUrl+"/information/findPlaces/"+city)
  }
  getResturantByCity(city:any)
  {
    return this.http.get<Resturant[]>(this.baseUrl+"/information/findRestaurants/"+city)
  }
}
