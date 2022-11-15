import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bookhotel } from '../model/bookhotel';
import { Hotel } from '../model/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http: HttpClient) { }

  baseUrl = "http://localhost:8080";
  username = "harry";



  bookhotel: boolean = false;

  hotelName: any;
  roomid = 0;



  saveREview(data: any) {
    console.log(data);
    return this.http.post(this.baseUrl + "/hotel/addreview/" + this.hotelName, data);

  }


  saveHotel(data: any, email: any) {
    console.log(data);
    console.log(email);

    return this.http.post(this.baseUrl + "/hotel/registerhotel/" + email, data);
  }
  getHotelByCity(city: any) {
    return this.http.get<Hotel[]>(this.baseUrl + "/hotel/hotelbycity/" + city)
  }
  saveRoom(room: any) {
    console.log("dhjfgjhsdgfhjdsg");
    
    console.log("hotel name "+ this.hotelName);
    
    return this.http.post(this.baseUrl + "/hotel/addroom/" + this.hotelName, room)
  }
  updateHotel(data: any) {
    return this.http.put(this.baseUrl + "/hotel/updatehoteldetails/" + this.hotelName, data)
  }
  getHotel(name: any) {
    return this.http.get<Hotel>(this.baseUrl + "/hotel/gethotelbyname/" + name)
  }
  getAllRooms(name: any) {
    return this.http.get(this.baseUrl + "/hotel/getallrooms/" + name)
  }
  bookroom(data: any) {
    return this.http.post(this.baseUrl + "/hotel/makereservation/" + this.hotelName + "/" + this.roomid, data)
  }

  viewHotelByemail(email: any) {
    return this.http.get<Hotel[]>(this.baseUrl + "/hotel/gethotels/" + email)

  }
  hotelValue: Hotel = new Hotel();
  getValueOfHotel(name: any) {
    return this.http.get<Hotel>(this.baseUrl + "/hotel/gethotelbyname/" + name);
  }

  getBook(email:any)
  {
    return this.http.get<Bookhotel[]>(this.baseUrl + "/book/getroombookings/" + email);
  }
}