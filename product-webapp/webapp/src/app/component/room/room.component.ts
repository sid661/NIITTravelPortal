import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { HotelService } from 'src/app/service/hotel.service';
import { OtpformComponent } from '../otpform/otpform.component';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  RegisterRoom:FormGroup

 
  constructor(private hotelservice:HotelService,private formbuilder: FormBuilder,private d:MatDialog,public dailog: MatDialogRef<RoomComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) 
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
    console.log("Saving");
    
    let totalrooms=0;
    if(this.allhoteldetails.room==null)
    {
      console.log("ROom length"+ 0);
      
       totalrooms=0;
    }
    else
    {
      totalrooms=this.allhoteldetails.room.length;
    }

   
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
      alert("succesfully Added")
      this.dailog.close()
    })
  }
 allhoteldetails:any;
  ngOnInit(): void 
  {
    console.log(this.hotelservice.hotelName);
    
    this.hotelservice.getHotel(this.hotelservice.hotelName).subscribe((subscriber)=>{
      this.allhoteldetails=subscriber;
      console.log(this.allhoteldetails);
      
  })
}

}
