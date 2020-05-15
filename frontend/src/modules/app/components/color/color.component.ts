import { Component, OnInit, HostListener } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import {ColorService} from '../../services';
import {ColorModel} from '../../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {


  public fg: FormGroup;
  public colorModel: ColorModel;
  public innerWidth: number;
  public isMobileScreen: boolean;
  public componentLabels = ColorModel.attributesLabels;

  constructor(
    // private route: ActivatedRoute,
    private router:Router,
    private fb: FormBuilder,
    private colorService: ColorService
    ) { }
  
    im = {"id":1,"name":"../../assets/img4.jpg",
    "description":"Incidunt et magni",
    "price":"170.00","quantity":56840};
    imageLink = this.im.name;
    quantity=1;
    stockAvailability = 'IN STOCK';
    obj={};
    loaded = false;
  ngOnInit() {

    this.innerWidth = window.innerWidth;
    if(this.innerWidth > 600){
      this.isMobileScreen = false;
    }else{
      this.isMobileScreen = true;
    }
    this.colorModel = new ColorModel();
    this.fg = this.fb.group(new ColorModel().validationRules());
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



  addColor(color: ColorModel) {
    this.colorModel = color;
    this.colorService.create(this.colorModel).subscribe(response => {
      this.router.navigate(['home']);
    },
    error =>{
      console.log('error in add color '+ error)
    },
    ()=>{}
    )
  }

}
