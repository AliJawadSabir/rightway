import { Component, OnInit,ViewChild, HostListener } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { MatPaginator, MatTableDataSource, MatSort, MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService, ProductService, AddCategoryService, SizeService, ColorService} from '../../../services';
import {NotifyUserModel, ProductModel, CustomerModel, CategoryModel, SizeModel, ColorModel} from '../../../models';
import {GLOBALS} from '../../../config';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  public fg: FormGroup;
  public productModel: ProductModel;
  public innerWidth: any;
  public isMobileScreen: boolean;
  public pageActions = GLOBALS.pageActions;
  public loaded: boolean = false;
  public pageAct: string;
  public data: any[] = [];
  public page: string;
  public productId: number;
  public categoryList: CategoryModel[];
  public sizeList: SizeModel[];
  public colorList: ColorModel[];
  public seasonList = ['Summer', 'Winter', 'Autum', 'Spring'];
  public componentLabels = ProductModel.attributesLabels;


  public error: Boolean;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private productService: ProductService,
    private categoryService: AddCategoryService,
    private sizeService: SizeService,
    private colorService: ColorService,
    private snackBar: MatSnackBar 
    ) { 
      this.pageAct = route.snapshot.data['act'];
  }
  
  ngOnInit() {

    this.initializePage();
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



  /**
   * Initialize page
   */
  private initializePage() {
    this.fg = this.fb.group(new ProductModel().validationRules());
    // this.getData();
    if (this.pageAct === this.pageActions.create) {
      this.page = 'Create';
      // this.initCreatePage();
    } else {
      this.getData();
    }
  }


  /**
   * Get record
   */
  private getData() {
    this.route.params.subscribe(params => {
      this.productId = params['id'];
      this.productService.find(params['id']).subscribe(
        response => {
          if (response) {
            this.productModel = <ProductModel>response;
            console.log('product model', this.productModel)

            this.fg.patchValue(this.productModel);

            //TODO:low need to check why we are dowing this after fetching data
            if (this.pageAct == this.pageActions.view) {
              this.page = 'View';
              this.initViewPage();
            } else if (this.pageAct == this.pageActions.update) {
              this.page = 'Update';
              this.initUpdatePage();
            }
          }
        },
        error => {
          console.log(error);
          this.loaded = true;
        },
        () => {
          this.loaded = true;
        }
      );
    });
  }


  /**
   * Initialize the update page
   */
  private initUpdatePage() {
    this.fg.enable();
  }


  /**
   * Initialize the view page
   */
  private initViewPage() {
    this.fg.disable();
  }


  saveData(product: ProductModel){
    console.log('save data called', product)
    // this.loaded = false;
    // if (this.pageAct === this.pageActions.create) {
    //   this.productService.create(product).subscribe(
    //     response => {
    //       this.snackBar.open('Product is created successfully','Dismiss' ,{
    //         duration: 3000,
    //       });          
    //       this.router.navigate([`/products`]);
    //     },
    //     error => {
    //       console.log(error);
    //       this.snackBar.open('Product creation failed.','Dismiss' ,{
    //         duration: 3000,
    //       });         },
    //     () => {
    //       // this.boxLoaded = true;
    //     }
    //   );
    // } else 
    if (this.pageAct === this.pageActions.update) {
      this.productService.update(this.productId, product).subscribe(
        response => {
          this.snackBar.open('Product is updated successfully','Dismiss' ,{
            duration: 3000,
          });            
          this.router.navigate([`/products`]);
        },
        error => {
          console.log(error);
          this.snackBar.open('Something went wrong, please try again.','Dismiss' ,{
            duration: 3000,
          }); 
        },
        () => {
          // this.boxLoaded = true;
        }
      );
    }
  }

  public delete (id: number) {

  }

}
