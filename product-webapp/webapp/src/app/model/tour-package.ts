export class TourPackage {
     email:string="";
     agencyName:string="";                      //input field
     destination:string="";                      //input field
     citiesAddedInPackage:string[]=[];
     pickPoint:string="";                        //pickPoint
     dropPoint:string="";                        //Drop point
     transferHotel:string[]=[];   
     images:any=[];                           //Images
    noOfNights:number=0;                          //Total no of nights
     costPerPerson:number=0;                    //Per person cost
    food:string="";                             //breakfast or dinner included or excluded
     tourType:string="";                         //honeymoon-religious-family-solo-business
    activities:string[]=[];                //the places in packages
     placesToVisit:string[]=[];             //included in packages to visit
     transport:string[]=[];  
     tourGuide:string="" 
}
