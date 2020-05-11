import { Component, OnInit } from '@angular/core';
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
  public componentLabels = ColorModel.attributesLabels;

  constructor(
    // private route: ActivatedRoute,
    private router:Router,
    private fb: FormBuilder,
    private colorService: ColorService
    ) { }
  
    im = {"id":1,"name":"../../assets/im8.jpeg",
    "description":"Incidunt et magni",
    "price":"170.00","quantity":56840};
    imageLink = this.im.name;
    quantity=1;
    stockAvailability = 'IN STOCK';
    obj={};
    loaded = false;
  ngOnInit() {
    this.colorModel = new ColorModel();
    this.fg = this.fb.group(new ColorModel().validationRules());
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
