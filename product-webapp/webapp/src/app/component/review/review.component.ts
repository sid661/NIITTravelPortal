import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HotelService } from 'src/app/service/hotel.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  ReviewForm:FormGroup
  constructor(private hotelservice:HotelService,private formbuilder: FormBuilder) { 
    this.ReviewForm=this.formbuilder.group({
      subject:new FormControl('',[Validators.required]),
      rating:new FormControl('',[Validators.required]),
      username:new FormControl('',[]),
      date:new FormControl('',[Validators.required]),
      description:new FormControl('',[Validators.required])
        

    })

  }
  saveData() {
    
    const u = this.ReviewForm.value;
    u.username=this.hotelservice.username;
    console.log("Value of u ", u);   
    this.hotelservice.saveREview(u).subscribe((response: any) => {
      console.log(response);
    })
  }

  ngOnInit(): void {
  }

}
