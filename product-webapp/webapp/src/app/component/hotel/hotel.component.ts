import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, UntypedFormGroup, Validators,FormArray, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { group } from 'console';

import { Filehandle } from 'src/app/model/filehandle';
import { Hotel } from 'src/app/model/hotel';
import { HotelService } from 'src/app/service/hotel.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
 
 
  registerformHotel:FormGroup;
  constructor(private hotelservice:HotelService,private formbuilder: FormBuilder,private router:Router) 
  { 
    this.registerformHotel=this.formbuilder.group({
      hotelName:new FormControl('',[Validators.required]),
      hotelCategory:new FormControl('',[Validators.required]),
      propertyRules:this.formbuilder.array([
        this.formbuilder.group({
          rule: new FormControl('', [Validators.required]),
        })
      ]),
      description:new FormControl('',[]),
      safetyandhygiene:new FormControl('',[]),
        basicfacilities:new FormControl('',[]),
        familyandkids:new FormControl('',[]),
        foodanddrinks:new FormControl('',[]),
        streetname:new FormControl('',[]),
        landmark:new FormControl('',[]),
        city:new FormControl('',[]),
        state:new FormControl('',[])
    })
  }
  imageName:any;
  
  get add() {
    return this.registerformHotel.get('propertyRules') as FormArray;
  }

  get propertyRulesControls()
  {
    return (<FormArray>this.registerformHotel.get('propertyRules')).controls
  }
  addNewRow() {
    const ruleList = this.registerformHotel.get("propertyRules") as FormArray;
    ruleList.push(this.Genrow())
  }

  Genrow(): FormGroup {
    return new FormGroup({
      rule: new FormControl('', Validators.required),

    });
  }
  

  
file:any;

  Removeitem(index: any) {
    this.items = this.registerformHotel.get("propertyRules") as FormArray;
    this.items.removeAt(index)
  }

  imageData: Filehandle[] = [];
  image: Filehandle[] = [];
  public userFile: any = File;

  items!: FormArray;


  onSelectFile(event: any) {
    const f = event.target.files[0];
    this.imageName=f.name;
    console.log("image", f.name);
    this.userFile = f;
  }
  hotel:Hotel=new Hotel();
  data0: any;
  saveData() {
    this.hotel.hotelName=this.registerformHotel.value.hotelName;
    this.hotel.hotelCategory=this.registerformHotel.value.hotelCategory;
    this.hotel.email="service@gmail.com";
    this.hotel.overview.description=this.registerformHotel.value.description;
    this.hotel.address.streetname=this.registerformHotel.value.streetname;
    this.hotel.address.landmark=this.registerformHotel.value.landmark;
   
    this.hotel.address.city=this.registerformHotel.value.city;
    this.hotel.address.state=this.registerformHotel.value.state;
    this.hotel.amenities.basicfacilities=this.registerformHotel.value.basicfacilities;
    this.hotel.amenities.familyandkids=this.registerformHotel.value.familyandkids;
    this.hotel.amenities.foodanddrinks=this.registerformHotel.value.foodanddrinks;
    this.hotel.amenities.safetyandhygiene=this.registerformHotel.value.safetyandhygiene;
    this.registerformHotel.value.propertyRules.forEach((element:any) => {
      this.hotel.propertyRules.push(element.rule)
    });
    console.log(this.registerformHotel.get('propertyRules'));
    const u = this.registerformHotel.value;
    console.log("Value of u ", u);
    var formData = new FormData();
    formData.append('details', JSON.stringify(this.hotel));
    formData.append('file', this.userFile);
    this.hotelservice.saveHotel(formData).subscribe((response: any) => {
      console.log(response);
      this.router.navigate([''])
    })
  }
  

 

  ngOnInit(): void {
  }

}
