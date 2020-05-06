import { Component, OnInit, HostListener } from '@angular/core';
import {FooterComponent} from '../index';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  public innerWidth: any;
  public isMobileScreen: boolean;
  image = 'assets/img1.jpg';
  

  constructor() { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    if(this.innerWidth > 600){
      this.isMobileScreen = false;
    }else{
      this.isMobileScreen = true;
    }
  }

  // code for checking size of screen
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    if(this.innerWidth > 600){
      this.isMobileScreen = false;
    }else{
      this.isMobileScreen = true;
    }
    console.log('inner width--->>>', this.innerWidth, this.isMobileScreen);
  }

}
