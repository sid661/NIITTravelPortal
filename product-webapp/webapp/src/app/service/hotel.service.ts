import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hotel } from '../model/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService 
{

  saveHotelUrl="http://localhost:8084/hotelservice/registerhotel/joelraj97@gmail.com";

  saveHotel(data: any)
  {
    console.log(data);
    return this.http.post(this.saveHotelUrl,data);
  }
  getHotelByCity(city:any)
  {
    return this.http.get<Hotel[]>("http://localhost:8084/hotelservice/hotelbycity/"+city)
  }

  constructor(private http:HttpClient) { }
}
