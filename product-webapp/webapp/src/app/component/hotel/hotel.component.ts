import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, UntypedFormGroup, Validators,FormArray } from '@angular/forms';
import { group } from 'console';
import { HotelService } from 'src/app/service/hotel.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  RegisterformHotel:UntypedFormGroup
  constructor(private hotelservice:HotelService) 
  { 
    this.RegisterformHotel=new FormGroup({
      hotelName:new FormControl('',[Validators.required]),
      hotelCategory:new FormControl('',[Validators.required]),
      propertyRules:new FormArray([]),
      overview:new FormGroup({
        description:new FormControl('',Validators.required),
        image:new FormArray([])

      }),
      amenities:new FormGroup({
        safetyandhygiene:new FormControl('',[Validators.required]),
        basicfacilities:new FormControl('',[Validators.required]),
        familyandkids:new FormControl('',[Validators.required]),
        foodanddrinks:new FormControl('',[Validators.required])

      }),
      address:new FormGroup({
        streetname:new FormControl('',[Validators.required]),
        landmark:new FormControl('',[Validators.required]),
        city:new FormControl('',[Validators.required]),
        state:new FormControl('',[Validators.required])

      }),
      room:new FormArray([])

    })
  }
 
  addRules()
  {
   const control=new FormControl('',[Validators.required]);
   (<FormArray>this.RegisterformHotel.get('propertyRules')).push(control)
  }
  addImages()
  {
    const control=new FormControl('',[Validators.required]);
    (<FormArray>this.RegisterformHotel.get('overview')?.get('image')).push(control)
  }
  get imageControls()
  {
    return (<FormArray>this.RegisterformHotel.get('overview')?.get('image')).controls
  }
  get propertyRulesControls()
  {
    return (<FormArray>this.RegisterformHotel.get('propertyRules')).controls
  }

  saveHotel()
  {
    const  regData = this.RegisterformHotel.value;
    this.hotelservice.saveHotel(regData).subscribe(() => {
      alert("successfully registerd")
      
    
     },(error: any) => {
      
       console.log(error)
     });
  }

  ngOnInit(): void {
  }

}
