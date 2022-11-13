import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Filehandle } from 'src/app/model/filehandle';
import { TourPackage } from 'src/app/model/tour-package';
import { PackageService } from 'src/app/service/package.service';
import { RegisterserviceService } from 'src/app/service/registerservice.service';

@Component({
  selector: 'app-package-registration',
  templateUrl: './package-registration.component.html',
  styleUrls: ['./package-registration.component.css']
})
export class PackageRegistrationComponent implements OnInit {
  packageRegistrationForm: FormGroup;
  items!: FormArray;
  imageData: Filehandle[] = [];
  image: Filehandle[] = [];
  public userFile: any = File;
  tourPackage: TourPackage = new TourPackage();
  constructor(private link: PackageService, private formbuilder: FormBuilder, private sanitizer: DomSanitizer,private router:Router
  ) {
    this.packageRegistrationForm = this.formbuilder.group({
      agencyName: new FormControl('', [Validators.required]),
      destination: new FormControl('', [Validators.required]),
      noOfNights: new FormControl('', [Validators.required]),
      costPerPerson: new FormControl('', [Validators.required]),
      tourType:new FormControl("",[Validators.required]),
      pickPoint:new FormControl("",[Validators.required]),
      dropPoint:new FormControl("",[Validators.required]),
      food:new FormControl("",[Validators.required]),
      noOfTravellers:new FormControl("",[Validators.required]),
      tourGuide:new FormControl("",[Validators.required]),
      citiesAddedInPackage: this.formbuilder.array([
        this.formbuilder.group({
          city: new FormControl('', [Validators.required]),

        })
      ]),
      transferHotel:this.formbuilder.array([
        this.formbuilder.group({
          hotel:new FormControl('',[Validators.required])
        })
      ]),
      placesToVisit:this.formbuilder.array([
        this.formbuilder.group({
          place:new FormControl("",[Validators.required])
        })
      ]),
      activities:this.formbuilder.array([
        this.formbuilder.group({
          activity:new FormControl("",[Validators.required])
        })
      ]),
      transport:this.formbuilder.array([
        this.formbuilder.group({
          mode:new FormControl("",[Validators.required])
        })
      ])
    })
  }
  e: any = '';
  ngOnInit(): void {
  }
  get add() {
    return this.packageRegistrationForm.get('citiesAddedInPackage') as FormArray;
  }
  get add1() {
    return this.packageRegistrationForm.get('transferHotel') as FormArray;
  }
  get add2() {
    return this.packageRegistrationForm.get('placesToVisit') as FormArray;
  }
  get add3() {
    return this.packageRegistrationForm.get('activities') as FormArray;
  }
  get add4() {
    return this.packageRegistrationForm.get('transport') as FormArray;
  }
  imageName:any;
  onSelectFile(event: any) {
    const f = event.target.files[0];
    this.imageName=f.name;
    console.log("image", f.name);
    this.userFile = f;
  }
  data0: any;
  saveData() {
    console.log(this.packageRegistrationForm.get('citiesAddedInPackage'));
    const u = this.packageRegistrationForm.value;
    console.log("Value of u ", u);
    this.tourPackage.agencyName = this.packageRegistrationForm.value.agencyName;
    this.tourPackage.destination = this.packageRegistrationForm.value.destination;
    this.tourPackage.noOfNights = this.packageRegistrationForm.value.noOfNights;
    this.tourPackage.costPerPerson = this.packageRegistrationForm.value.costPerPerson;
    this.tourPackage.tourGuide=this.packageRegistrationForm.value.tourGuide;
    this.packageRegistrationForm.value.citiesAddedInPackage.forEach((element:any) => {
      this.tourPackage.citiesAddedInPackage.push(element.city);
    });
    this.packageRegistrationForm.value.activities.forEach((x:any)=>{
      this.tourPackage.activities.push(x.activity);
    })
    this.packageRegistrationForm.value.placesToVisit.forEach((x:any)=>
      {
        this.tourPackage.placesToVisit.push(x.place);
      })
      this.packageRegistrationForm.value.transferHotel.forEach((x:any)=>{
        this.tourPackage.transferHotel.push(x.hotel);
      })
      this.packageRegistrationForm.value.transport.forEach((element:any) => {
        this.tourPackage.transport.push(element.mode)
      });
      this.tourPackage.email="service@gmail.com"
      this.tourPackage.tourType=this.packageRegistrationForm.value.tourType;
      this.tourPackage.food=this.packageRegistrationForm.value.food;
      this.tourPackage.pickPoint=this.packageRegistrationForm.value.pickPoint;
      this.tourPackage.dropPoint=this.packageRegistrationForm.value.dropPoint;
      this.tourPackage.tourGuide=this.packageRegistrationForm.value.tourGuide;
      console.log(this.tourPackage)
    var formData = new FormData();
    formData.append('details', JSON.stringify(this.tourPackage));
    formData.append('file', this.userFile);
    this.link.savePackage(formData).subscribe((response: any) => {
      console.log(response);
      this.router.navigate(['view'])
    })
  }
  // cancelation(): void {
  //   this.dialogRef.close();
  // }
  addNewRow() {
    const cityList = this.packageRegistrationForm.get("citiesAddedInPackage") as FormArray;
    cityList.push(this.Genrow())
  }
  addNewRow1() {
    const hotelList = this.packageRegistrationForm.get("transferHotel") as FormArray;
    hotelList.push(this.Genrow1())
  }
  addNewRow2() {
    const placeList = this.packageRegistrationForm.get("placesToVisit") as FormArray;
    placeList.push(this.Genrow2())
  }
  addNewRow3() {
    const activityList = this.packageRegistrationForm.get("activities") as FormArray;
    activityList.push(this.Genrow3())
  }
  addNewRow4() {
    const transportList = this.packageRegistrationForm.get("transport") as FormArray;
    transportList.push(this.Genrow4())
  }
  Genrow(): FormGroup {
    return new FormGroup({
      city: new FormControl('', Validators.required),

    });
  }
  Genrow1(): FormGroup {
    return new FormGroup({
      hotel: new FormControl('', Validators.required),

    });
  }
  Genrow2(): FormGroup {
    return new FormGroup({
      place: new FormControl('', Validators.required),

    });
  }
  Genrow3(): FormGroup {
    return new FormGroup({
      activity: new FormControl('', Validators.required),

    });
  }
  Genrow4(): FormGroup {
    return new FormGroup({
      mode: new FormControl('', Validators.required),

    });
  }
  Removeitem(index: any) {
    this.items = this.packageRegistrationForm.get("citiesAddedInPackage") as FormArray;
    this.items.removeAt(index)
  }
  isLinear = false;

  Removeitem1(index: any) {
    this.items = this.packageRegistrationForm.get("transferHotel") as FormArray;
    this.items.removeAt(index)
  }
  Removeitem2(index: any) {
    this.items = this.packageRegistrationForm.get("placesToVisit") as FormArray;
    this.items.removeAt(index)
  }
  Removeitem3(index: any) {
    this.items = this.packageRegistrationForm.get("activities") as FormArray;
    this.items.removeAt(index)
  }
  Removeitem4(index: any) {
    this.items = this.packageRegistrationForm.get("transport") as FormArray;
    this.items.removeAt(index)
  }
}