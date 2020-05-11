import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public innerWidth: any;
  public isMobileScreen: boolean;
  image = 'assets/img1.jpg';

  constructor(private router: Router,) { }

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
  }

}
