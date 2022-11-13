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


  

 hotelName:string="";
 roomid=0;



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
  saveRoom(room:any)
  {
    return this.http.post("http://localhost:9000/hotel/addroom/"+this.hotelName,room)
  }
  updateHotel(data:any)
  {
    return this.http.put("http://localhost:9000/hotel/updatehoteldetails/"+this.hotelName,data)
  }
  getHotel(name:any)
  {
    return this.http.get<Hotel>("http://localhost:9000/hotel/gethotelbyname/"+name)
  }
  getAllRooms(name:any)
  {
    return this.http.get("http://localhost:9000/hotel/getallrooms/"+name)
  }
  bookroom(data:any)
  {
   return this.http.post("http://localhost:9000/hotel/makereservation/"+this.hotelName+"/"+this.roomid,data)
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
  
  
}
