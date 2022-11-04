import { Address } from "./address";
import { Amenties } from "./amenties";
import { Overview } from "./overview";
import { Reservation } from "./reservation";
import { Review } from "./review";
import { Room } from "./room";

export class Hotel {
     hotelName:string="";
       hotelCategory:string="";
 email:string="";
 propertyRules:string[]=[];
  overview:Overview=new Overview();
 amenities:Amenties= new Amenties();
 address:Address=new Address();
 room:Room[]=[];
 review:Review[]=[];
 reservation:Reservation=new Reservation();
}
