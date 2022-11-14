import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CabOrder } from 'src/app/model/cab-order';
import { Order } from 'src/app/model/order';
import { OrderService } from 'src/app/service/order.service';
declare var Razorpay: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  payment = new FormGroup({
    customerName: new FormControl(""),
    email: new FormControl(""),
    phoneNumber: new FormControl(0),
    amount: new FormControl(0)
  })

  title = 'paymentRazorPay';


  form: any = {};
  constructor(private http: HttpClient,
    private orderService: OrderService, private r: Router) {
  }
  b: CabOrder = new CabOrder()
  ngOnInit() {

    this.b = this.orderService.caborder;
    console.log(this.b)
    this.payment.get("customerName")?.setValue(this.b.firstName);
    this.payment.get("email")?.setValue(this.b.userEmailId);
    this.payment.get("phoneNumber")?.setValue(this.b.phoneNumber);
    // this.payment.get("amount")?.setValue(this.b.)
  }

  sayHello() {
    alert("Hello DK");
  }

  paymentId: string | undefined;
  error: string | undefined;

  options = {
    "key": "",
    "amount": "",
    "name": "NIIT Travell Portal",
    "description": "Web Development",
    "image": "./assets/niit.png",
    "order_id": "",
    "handler": function (response: any) {
      var event = new CustomEvent("payment.success",
        {
          detail: response,
          bubbles: true,
          cancelable: true
        }
      );
      window.dispatchEvent(event);
    }
    ,
    "prefill": {
      "name": "",
      "email": "",
      "contact": ""
    },
    "notes": {
      "address": ""
    },
    "theme": {
      "color": "#3399cc"
    }
  };
  order: Order = new Order();
  pay() {
    this.paymentId = '';
    this.error = '';
    this.order.customerName = this.payment.value.customerName!;
    this.order.email = this.payment.value.email!;
    this.order.phoneNumber = this.payment.value.phoneNumber!;
    this.order.amount = this.payment.value.amount!;
    this.orderService.createOrder(this.order).subscribe(
      data => {
        console.log(data)
       
        this.options.key = data.secretId;
        this.options.order_id = data.razorpayOrderId;
        this.options.amount = data.applicationFee; //paise
        this.options.prefill.name = "NIIT Travel Portal";
        this.options.prefill.email = "niittravelportel@gmail.com";
        this.options.prefill.contact = "9106198825";

        if (data.pgName === 'razor2') {
          this.options.image = "";
          var rzp1 = new Razorpay(this.options);
          rzp1.open();
        } else {
          var rzp2 = new Razorpay(this.options);
          rzp2.open();
        }


        rzp1.on('payment.failed', (response: { error: { code: any; description: any; source: any; step: any; reason: any; metadata: { order_id: any; payment_id: any; }; }; }) => {
          // Todo - store this information in the server
          console.log(response);
          console.log(response.error.code);
          console.log(response.error.description);
          console.log(response.error.source);
          console.log(response.error.step);
          console.log(response.error.reason);
          console.log(response.error.metadata.order_id);
          console.log(response.error.metadata.payment_id);
          this.error = response.error.reason;
        }
        );
      }
      ,
      err => {
        this.error = err.error.message;
      }
    );
  }

  @HostListener('window:payment.success', ['$event'])
  onPaymentSuccess(event: { detail: any; }): void {
    console.log(event.detail);
    this.b.razorpayOrderId = event.detail.razorpayOrderId;
    this.b.bookingId = "1";
    this.orderService.savecaborder(this.b).subscribe(x => {
      alert("order success")
      this.r.navigate([''])
    })

  }
}



function ngOnInit() {
  throw new Error('Function not implemented.');
}


