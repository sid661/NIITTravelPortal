import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bookhotel } from '../model/bookhotel';
import { CabOrder } from '../model/cab-order';
import { Order } from '../model/order';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) {

	}
  baseUrl="http://localhost:8080";
  
  createOrder(order: Order): Observable<any> {
		return this.http.post(this.baseUrl+"/payment/createOrder", order);
		
	}
  book:Bookhotel=new Bookhotel();
  caborder:CabOrder=new CabOrder();

  getCab(cab:CabOrder)
  {
    return this.caborder=cab;
  }

  savecaborder(cab:CabOrder)
  {
    console.log(cab);
    
      return this.http.post(this.baseUrl+"/book/booking/cab",cab);
  }

  saveorder(b:Bookhotel)
  {
	return this.http.post(this.baseUrl+"/book/booking/hotel",b)
  }
  getData(b:Bookhotel)
  {
return	this.book=b;
  }
  getallbookingsRoom()
  {
    return this.http.get(this.baseUrl+"/book/getallbookings/room")
  }
  getbookedhotels(emailid:any)
  {
    return this.http.get(this.baseUrl+"/book/getroombookings/"+emailid)
  }
  cancelroom(bookingid:any)
  {
    return this.http.delete(this.baseUrl+"/book/cancelbookingroom/"+bookingid)
  }
  getbookedCabs(emailid:any)
  {
    return this.http.get(this.baseUrl+"/book/getcabbookings/"+emailid)
  }
  getallbookingsCab()
  {
    return this.http.get(this.baseUrl+"/book/getallbookings/cab")
  }
}
