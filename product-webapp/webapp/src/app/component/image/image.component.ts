import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  constructor() { }
  @Input() image:any;
  retrieveImage:any
  ngOnInit(): void {
    this.retrieveImage='data:image/jpg;base64,'+this.image;
  }

}
