import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductModel } from '../../models';
import { AddProductService } from '../../services';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  public fg: FormGroup;
  public productModel: ProductModel;
  public componentLabels = ProductModel.attributesLabels;

  constructor(
    // private route: ActivatedRoute,
    private fb: FormBuilder,
    private addProductService: AddProductService
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
    this.productModel = new ProductModel();
    this.fg = this.fb.group(new ProductModel().validationRules());
  }

  addProduct(product) {
    console.log('Buton is clicked one'+ product.category);
    this.productModel = product;
    console.log('Buton is clicked '+ this.productModel.description);
    this.addProductService.create(this.productModel).subscribe(response => {
      console.log('Response for add product '+ response)
    },
    error =>{
      console.log('error in add product '+ error)
    },
    ()=>{}
    )
  }

}
