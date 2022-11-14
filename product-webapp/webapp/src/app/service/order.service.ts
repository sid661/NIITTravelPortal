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
  
  createOrder(order: Order): Observable<any> {
		return this.http.post("http://localhost:8989/payment/createOrder", order);
		
	}
  book:Bookhotel=new Bookhotel();
  caborder:CabOrder=new CabOrder();

  getCab(cab:CabOrder)
  {
    return this.caborder=cab;
  }

  savecaborder(cab:CabOrder)
  {
      return this.http.post("http://localhost:8091/book/booking/cab",cab);
  }

  saveorder(b:Bookhotel)
  {
	return this.http.post("http://localhost:8091/book/booking/hotel",b)
  }
  getData(b:Bookhotel)
  {
return	this.book=b;
  }
}
