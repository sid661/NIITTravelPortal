import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cab } from 'src/app/model/cab';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { CabService } from 'src/app/service/cab.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  filterCabArray:Cab[]=[];
  cabArray:any=[]
  ;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  constructor(private breakpointObserver: BreakpointObserver,private cabService:CabService) {
    const checked = false;
  const indeterminate = false;
  const align = 'start';
  const disabled = false;
   }

   cabFilterForm=new  UntypedFormGroup({
    hatchback: new UntypedFormControl(false),
    suv:new UntypedFormControl(false),
    sedan: new UntypedFormControl(false)
  });

  ngOnInit(): void {
    // this.cabService.findCab().subscribe(x => {
    //   this.cabArray = x;
    //   console.log(x);
    // })
  }
  filterCab()
  {

  }
  reset()
  {
    
  }
}
