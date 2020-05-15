import { Component, OnInit, HostListener } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import {AddCategoryService} from '../../services';
import {CategoryModel} from '../../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {


  public fg: FormGroup;
  public categoryModel: CategoryModel;
  public innerWidth: number;
  public isMobileScreen: boolean;
  public componentLabels = CategoryModel.attributesLabels;

  constructor(
    // private route: ActivatedRoute,
    private router:Router,
    private fb: FormBuilder,
    private addCategoryService: AddCategoryService
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
    this.categoryModel = new CategoryModel();
    this.fg = this.fb.group(new CategoryModel().validationRules());
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


  addCategory(category: CategoryModel) {
    this.categoryModel = category;
    this.addCategoryService.create(this.categoryModel).subscribe(response => {
      this.router.navigate(['home']);
    },
    error =>{
      console.log('error in add category '+ error)
    },
    ()=>{}
    )
  }

}
