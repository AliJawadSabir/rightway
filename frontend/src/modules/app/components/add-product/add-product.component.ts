import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductModel, CategoryModel } from '../../models';
import { ProductService, AddCategoryService } from '../../services';
import {  FileUploader } from 'ng2-file-upload';

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
  response:string;
  uploader:FileUploader = new FileUploader({url:uploadAPI});

  constructor(
    // private route: ActivatedRoute,
    private fb: FormBuilder,
    private productService: ProductService,
    private categoryService: AddCategoryService
    ) {


      // this.uploader = new FileUploader({
      //   url: uploadAPI,
      //   itemAlias: 'file',
      //   allowedFileType: ['image'],
      //   disableMultipart: true, // 'DisableMultipart' must be 'true' for formatDataFunction to be called.
      //   formatDataFunctionIsAsync: true,
      //   formatDataFunction: async (item) => {
      //     return new Promise( (resolve, reject) => {
      //       resolve({
      //         name: item._file.name,
      //         length: item._file.size,
      //         contentType: item._file.type,
      //         date: new Date()
      //       });
      //     });
      //   }
      // });
      // this.response = '';
      // this.uploader.response.subscribe( res => this.response = res );

      
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


  addProduct(product) {
    
    console.log('Buton is clicked one'+ product.category);
    this.productModel = product;
    this.productService.create(this.productModel).subscribe(response => {
      console.log('Response for add product '+ response)
    },
    error =>{
      console.log('error in add product '+ error)
    },
    ()=>{}
    )
  }

  uploadImage(image) {
    console.log('image target=>>>', image.target.files)

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
