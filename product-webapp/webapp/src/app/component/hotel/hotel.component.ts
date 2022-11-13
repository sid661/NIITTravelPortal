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
      propertyRules:this.formbuilder.array([]),
      overview:new FormGroup({
        description:new FormControl('',[]),
       
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
      

    })
  }
  imageName:any;

  addRules()
  {
   const control=new FormControl('',[]);
   (<FormArray>this.registerformHotel.get('propertyRules')).push(control)
  }
  
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
    const u = this.registerformHotel.value;
    console.log("Value of u ", u);
    var formData = new FormData();
    formData.append('details', JSON.stringify(u));
    formData.append('file', this.userFile);
    console.log(localStorage.getItem("email"));
    
    this.hotelservice.saveHotel(formData,localStorage.getItem("email")).subscribe((response: any) => 
    {
      console.log(response);
      this.router.navigate(['view'])
    })
  }
  

 

  ngOnInit(): void {
  }

}
