import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HotelService 
{

  saveHotelUrl="http://localhost:8082/hotelservice/registerhotel/joelraj97@gmail.com";

  saveHotel(data: any)
  {
    console.log(data);
    return this.http.post(this.saveHotelUrl,data);
  }
  

  constructor(private http:HttpClient) { }
}
