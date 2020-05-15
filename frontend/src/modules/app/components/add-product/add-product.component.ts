import { Component, OnInit, HostListener } from '@angular/core';
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
  public seasonList = ['Summer', 'Winter', 'Autum', 'Spring'];
  public innerWidth: number;
  public isMobileScreen: boolean;
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

    this.innerWidth = window.innerWidth;
    if(this.innerWidth > 600){
      this.isMobileScreen = false;
    }else{
      this.isMobileScreen = true;
    }
    this.getCategoryList();
    this.getSizeList();
    this.getColorList();
    this.productModel = new ProductModel();
    this.fg = this.fb.group(new ProductModel().validationRules());
    
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
      },
      error => console.log(error),
      () => { }
    );
  }

  getColorList() {
    this.colorService.findAll().subscribe(
      response => {
        this.colorList = <any>response;
      },
      error => console.log(error),
      () => { }
    );
  }


  addProduct(product: ProductModel) {
    this.productModel = product;
    this.productModel.url = this.imageURL;
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
      if (resp['success'] == true){
        this.snackBar.openFromComponent(SnackBarComponent, {
          duration: 3 * 1000,
        });
        this.imageURL = resp['file']['filename'];
      }
 };

  }

  checkItem(item){
    item.upload();
    // this.isReady = true;
    // console.log('item  =>>>', item)
  }

  cancelClick(){
  }

}