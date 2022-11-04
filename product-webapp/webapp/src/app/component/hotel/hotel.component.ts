import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, UntypedFormGroup, Validators,FormArray, FormBuilder } from '@angular/forms';
import { group } from 'console';
import { Filehandle } from 'src/app/model/filehandle';
import { HotelService } from 'src/app/service/hotel.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
 
 
  RegisterformHotel:FormGroup;
  constructor(private hotelservice:HotelService,private formbuilder: FormBuilder) 
  { 
    this.RegisterformHotel=this.formbuilder.group({
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
   (<FormArray>this.RegisterformHotel.get('propertyRules')).push(control)
  }
  get add() {
    return this.RegisterformHotel.get('propertyRules') as FormArray;
  }

  get propertyRulesControls()
  {
    return (<FormArray>this.RegisterformHotel.get('propertyRules')).controls
  }

  

  
file:any;

  Removeitem(index: any) {
    this.items = this.RegisterformHotel.get("propertyRules") as FormArray;
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

  data0: any;
  saveData() {
    console.log(this.RegisterformHotel.get('propertyRules'));
    const u = this.RegisterformHotel.value;
    console.log("Value of u ", u);
    var formData = new FormData();
    formData.append('details', JSON.stringify(u));
    formData.append('file', this.userFile);
    this.hotelservice.saveHotel(formData).subscribe((response: any) => {
      console.log(response);
    })
  }
  

 

  ngOnInit(): void {
  }

}
