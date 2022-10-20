import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Place } from '../model/place';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(private http:HttpClient) { }

  getPlacesByCity()
  {
    return this.http.get<Place[]>("http://localhost:8089/findPlaces/Jaipur")
  }
}
