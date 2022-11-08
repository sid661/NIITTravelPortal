import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { HotelService } from 'src/app/service/hotel.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  RegisterRoom:FormGroup
  constructor(private hotelservice:HotelService,private formbuilder: FormBuilder) 
  {
       
    this.RegisterRoom=this.formbuilder.group({
      roomtype:new FormControl('',[Validators.required]),
      noOfBeds:new FormControl('',[Validators.required]),
      price:new FormControl('',[Validators.required]),
      
      roomid:new FormControl('',[])
        

    })

   }
   imageName:any;
  //  imageData: FileHandle[] = [];
  //  image: FileHandle[] = [];
 public userFile: any = File;

   onSelectFile(event: any) {
    const f = event.target.files[0];
    this.imageName=f.name;
    console.log("image", f.name);
    this.userFile = f;
  }

  saveData() 
  {
    

    let totalrooms=this.allhoteldetails.room.length;
    let data={
      "roomid":totalrooms+1,
      "roomtype":this.RegisterRoom.value.roomtype,
      "noOfBeds":this.RegisterRoom.value.noOfBeds,
      "price":this.RegisterRoom.value.price
     }
    
    
    var formData = new FormData();
    formData.append('details', JSON.stringify(data));
    formData.append('file', this.userFile);
    this.hotelservice.saveRoom(formData).subscribe((response: any) => {
      console.log(response);
    })
  }
 allhoteldetails:any;
  ngOnInit(): void 
  {
    this.hotelservice.getHotel().subscribe((subscriber)=>{
      this.allhoteldetails=subscriber;
  })
}

}
