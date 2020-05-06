import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
// import {MatDialog} from '@angular/material';
import { ProductModel, CategoryModel, SizeModel, ColorModel } from '../../models';
import { ProductService, AddCategoryService, SizeService, ColorService, SharedDataService } from '../../services';
import {  FileUploader } from 'ng2-file-upload';
import { MatSnackBar } from '@angular/material';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';

const uploadAPI = 'http://localhost:3000/product/uploadImage';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  public fg: FormGroup;
  public productModel: ProductModel;
  public componentLabels = ProductModel.attributesLabels;
  public categoryList: CategoryModel[];
  public sizeList: SizeModel[];
  public colorList: ColorModel[];
  response:string;
  imageURL:string;
  uploader:FileUploader = new FileUploader({url:uploadAPI});

  constructor(
    // private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private productService: ProductService,
    private categoryService: AddCategoryService,
    private sizeService: SizeService,
    private sharedDataService: SharedDataService,
    private colorService: ColorService,
    private snackBar: MatSnackBar
    // public dialog: MatDialog,
    // public matDialog: MatDialog,
    ) {


     }
  
    im = {"id":1,"name":"../../assets/im8.jpeg",
    "description":"Incidunt et magni",
    "price":"170.00","quantity":56840};
    imageLink = this.im.name;
    quantity=1;
    stockAvailability = 'IN STOCK';
    obj={};
    loaded = false;
    


    // File Uploader
    // public uploader: FileUploader = new FileUploader({ 
    //   url: uploadAPI, 
    //   itemAlias: 'file',
    //   allowedFileType: ['image']
    // });


  ngOnInit() {

    // File Upload Code
    // this.uploader.onAfterAddingFile = (file) => { file.withCredentials = true; };
    // this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
    //      console.log('FileUpload:uploaded successfully:', item, status, response);
    //      alert('Your file has been uploaded successfully');
    // };


    this.getCategoryList();
    this.getSizeList();
    this.getColorList();
    this.productModel = new ProductModel();
    this.fg = this.fb.group(new ProductModel().validationRules());
    
  }



  getCategoryList() {
    this.categoryService.findAll().subscribe(
      response => {
        this.categoryList = <any>response;
        console.log('category List -->>'+ this.categoryList);
      },
      error => console.log(error),
      () => { }
    );
  }

  getSizeList() {
    this.sizeService.findAll().subscribe(
      response => {
        this.sizeList = <any>response;
        console.log('size List -->>'+ this.sizeList);
      },
      error => console.log(error),
      () => { }
    );
  }

  getColorList() {
    this.colorService.findAll().subscribe(
      response => {
        this.colorList = <any>response;
        console.log('size List -->>'+ this.colorList);
      },
      error => console.log(error),
      () => { }
    );
  }


  addProduct(product: ProductModel) {
    
    this.productModel = product;
    // No need of url now. we will work on it if needed.
    if(this.uploader.queue.length == 0){
      this.productModel.url = null;
    }
    // No need of type now. we will work on it if needed.
    if(this.productModel.type == null){
      this.productModel.type = this.productModel.name;
    }
    this.productModel.sold = 0;

    if(this.productModel.url != null){
      this.productService.create(this.productModel).subscribe(response => {
        console.log('Response for add product '+ response)
        if(response['error']){
          this.snackBar.open('Product Already exist.','Dismiss' ,{
            duration: 3000,
          });
        }else{
          this.snackBar.open('Product Added Successfully.','Dismiss' ,{
            duration: 3000,
          });
          this.router.navigate(['home']);
        }
      },
      error =>{
        this.snackBar.open('Error Occured.','Dismiss' ,{
          duration: 3000,
        });
      },
      ()=>{}
      )
    }else{
      this.snackBar.open('Upload Image First.','Dismiss' ,{
        duration: 3000,
      });
      // alert('Your have to upload image first.');
    }
  }

  uploadImage() {
    let res = this.uploader.uploadAll();
    
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      let resp = JSON.parse(response);
      console.log('upload reponse', resp);
      if (resp['success'] == true){
        this.snackBar.openFromComponent(SnackBarComponent, {
          duration: 3 * 1000,
        });
        this.productModel.url = resp['file']['filename'];
        console.log('upload reponse', this.productModel.url);
      }
 };

  }

  checkItem(item){
    item.upload();
    // this.isReady = true;
    // console.log('item  =>>>', item)
    console.log('item  =>>>', this.uploader.queue)
  }

  cancelClick(){
    console.log('cancel  =>>>', this.uploader.queue);
  }

}