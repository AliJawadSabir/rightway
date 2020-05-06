import { Component, OnInit } from '@angular/core';
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
  public componentLabels = CategoryModel.attributesLabels;

  constructor(
    // private route: ActivatedRoute,
    private router:Router,
    private fb: FormBuilder,
    private addCategoryService: AddCategoryService
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
    this.categoryModel = new CategoryModel();
    this.fg = this.fb.group(new CategoryModel().validationRules());
  }



  addCategory(category: CategoryModel) {
    console.log('Buton is clicked one'+ category.category);
    this.categoryModel = category;
    console.log('Buton is clicked '+ this.categoryModel.description);
    this.addCategoryService.create(this.categoryModel).subscribe(response => {
      console.log('Response for add category '+ response);
      this.router.navigate(['home']);
    },
    error =>{
      console.log('error in add category '+ error)
    },
    ()=>{}
    )
  }

}
