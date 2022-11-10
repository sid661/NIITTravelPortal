import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hotel } from '../model/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService 
{
  constructor(private http:HttpClient) { }
  saveHotelUrl="http://localhost:9000/hotel/registerhotel/joelraj97@gmail.com";
  saveReviewUrl="http://localhost:8082/hotelservice/addreview/Palace";
  ​
    username="harry";
  ​
    saveREview(data:any)
    {
      console.log(data);
      return this.http.post(this.saveReviewUrl,data);
  ​
    }
  ​

  saveHotel(data: any)
  {
    console.log(data);
    return this.http.post(this.saveHotelUrl,data);
  }
  getHotelByCity(city:any)
  {
    return this.http.get<Hotel[]>("http://localhost:9000/hotel/hotelbycity/"+city)
  }

  viewHotelByemail(email:any)
  {
    return this.http.get<Hotel[]>("http://localhost:9000/hotel/gethotels/"+email)

  }
  hotelValue:Hotel=new Hotel();
  getValueOfHotel(name:any)
  {
    return this.http.get<Hotel>("http://localhost:9000/hotel/gethotelbyname/"+name)
  }
  saveRoom(room:any)
  {
    return this.http.post("http://localhost:8084/hotelservice/addroom/HotelHarry",room)
  }
  updateHotel(data:any)
  {
    return this.http.put("http://localhost:8084/hotelservice/updatehoteldetails/HotelHArry",data)
  }
  getHotel()
  {
    return this.http.get("http://localhost:8084/hotelservice/gethotelbyname/HotelHarry")
  }
  getAllRooms()
  {
    return this.http.get("http://localhost:8084/hotelservice/getallrooms/HotelHarry")
  }
  
}
