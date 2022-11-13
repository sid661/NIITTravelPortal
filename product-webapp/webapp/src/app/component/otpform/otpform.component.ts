import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ResetpasswordComponent } from '../resetpassword/resetpassword.component';

@Component({
  selector: 'app-otpform',
  templateUrl: './otpform.component.html',
  styleUrls: ['./otpform.component.css']
})
export class OtpformComponent implements OnInit {

  constructor(public dailog: MatDialogRef<OtpformComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private d:MatDialog) { }
  otpform=new FormGroup({
    otp:new FormControl("")
  })
  ngOnInit(): void {
  }

  verify()
  {
    if(this.otpform.value.otp==this.data)
    {
      this.d.closeAll();
      this.d.open(ResetpasswordComponent)
    }
    else{
      alert("otp not match")
      location.reload();
    }
  }

}
