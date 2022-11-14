import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cab } from '../model/cab';

@Injectable({
  providedIn: 'root'
})
export class CabService {

  constructor(private http:HttpClient) { }
   baseUrl="http://localhost:8080";
 // url= "http://localhost:8087/api/cab/findCab/cabType?data="
  findCab(city:any)
    {
      return this.http.get<Cab[]>(this.baseUrl+"/cab/findCab/"+city);

    }

    getFilterData(data:string)
    {
      //console.log(this.url+data);
      
      
      return this.http.get<Cab[]>(this.baseUrl+"/cab/findCab/cabType?data="+data);
    }

    saveCab(data:Cab)
    {
      return this.http.post(this.baseUrl+"/cab/save",data);
    }
}
