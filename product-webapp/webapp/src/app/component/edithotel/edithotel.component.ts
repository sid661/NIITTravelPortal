import { Component, OnInit } from '@angular/core';

import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Filehandle } from 'src/app/model/filehandle';
import { HotelService } from 'src/app/service/hotel.service';


@Component({
  selector: 'app-edithotel',
  templateUrl: './edithotel.component.html',
  styleUrls: ['./edithotel.component.css']
})
export class EdithotelComponent implements OnInit {


  RegisterformHotel:FormGroup

  constructor(private hotelservice:HotelService,private fb:FormBuilder,private activatedRoute: ActivatedRoute,private router:Router) { 
    this.RegisterformHotel=new FormGroup({
      email:new FormControl('',[]),
      hotelName:new FormControl('',[Validators.required]),
      hotelCategory:new FormControl('',[Validators.required]),
        propertyRules:new  FormControl('',[]),
      overview:new FormGroup({
        description:new FormControl('',),
         image:new FormControl('',[])

      }),
      amenities:new FormGroup({
        safetyandhygiene:new FormControl('',[]),
        basicfacilities:new FormControl('',[]),
        familyandkids:new FormControl('',[]),
        foodanddrinks:new FormControl('',[])

      }),
      address:new FormGroup({
        streetname:new FormControl('',[]),
        landmark:new FormControl('',[]),
        city:new FormControl('',[]),
        state:new FormControl('',[])

      }),
       room:new FormControl('',[]),
       review:new FormControl('',[]),
       

    })

  }
  addReview()
  {
    const control=new FormControl('',[Validators.required]);
   (<FormArray>this.RegisterformHotel.get('review')).push(control)
  }
  addRoom()
  {
    const control=new FormControl('',[Validators.required]);
    (<FormArray>this.RegisterformHotel.get('room')).push(control)
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
allhoteldetails:any;
nameofhotel:any;

  ngOnInit(): void 
  {
    this.nameofhotel = this.activatedRoute.snapshot.paramMap.get('hotelName');
    console.log(this.nameofhotel);
    
  
  this.hotelservice.getHotel(this.nameofhotel).subscribe((subscriber)=>{
    this.allhoteldetails=subscriber;
    this.initializeForm();
    console.log(this.RegisterformHotel.value)
  })
  
  }
  initializeForm()
  {
    console.log(this.allhoteldetails.propertyRules)
   
    this.RegisterformHotel.setValue({
      email: this.allhoteldetails.email,
      hotelName: this.allhoteldetails.hotelName,
      hotelCategory:this.allhoteldetails.hotelCategory,
       propertyRules:this.allhoteldetails.propertyRules,
      overview:{
        description:this.allhoteldetails.overview.description,
         image:this.allhoteldetails.overview.image
      }
        ,
        amenities:{
          safetyandhygiene:this.allhoteldetails.amenities.safetyandhygiene,
          basicfacilities:this.allhoteldetails.amenities.basicfacilities,
          familyandkids:this.allhoteldetails.amenities.familyandkids,
          foodanddrinks:this.allhoteldetails.amenities.foodanddrinks,
        },
        address:{
          streetname:this.allhoteldetails.address.streetname,
          landmark:this.allhoteldetails.address.landmark,
          city:this.allhoteldetails.address.city,
          state:this.allhoteldetails.address.state
        },
        room:this.allhoteldetails.room,
        review:this.allhoteldetails.review
     

    
    



  })
  
  }
  imageName:any;
  saveHotel()
  {
    const  regData = this.RegisterformHotel.value;
    var formData = new FormData();
    formData.append('details', JSON.stringify(regData));
    formData.append('file', this.userFile);
    this.hotelservice.updateHotel(regData).subscribe(() => {
      alert("successfully Changed")
      this.router.navigate(['view'])
      
    
     },(error: any) => {
      
       console.log(error)
     });
  }
  file:any;
  
  onSelectFile(event: any) {
    const f = event.target.files[0];
    this.imageName=f.name;
    console.log("image", f.name);
    this.userFile = f;
  }

  data0: any;
  
  
  Removeitem(index: any) {
    this.items = this.RegisterformHotel.get("propertyRules") as FormArray;
    this.items.removeAt(index)
  }

  imageData: Filehandle[] = [];
  image: Filehandle[] = [];
  public userFile: any = File;

  items!: FormArray;

}
