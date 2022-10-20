import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cab } from '../model/cab';

@Injectable({
  providedIn: 'root'
})
export class CabService {

  constructor(private http:HttpClient) { }

  url= "http://localhost:8087/api/cab/findCab/cabType?data="
  findCab()
    {
      return this.http.get<Cab[]>("http://localhost:8087/api/cab/findCab/Delhi");

    }

    getFilterData(data:string)
    {
      console.log(this.url+data);
      
      
      return this.http.get<Cab[]>("http://localhost:8087/api/cab/findCab/cabType?data="+data);
    }
}
