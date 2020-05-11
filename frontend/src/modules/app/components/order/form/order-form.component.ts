import { Component, OnInit,ViewChild, HostListener } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {ProductService, HomeService, OrderService} from '../../../services';
import {NotifyUserModel, ProductModel, OrderModel, CustomerModel} from '../../../models';
import {GLOBALS} from '../../../config';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  public fg: FormGroup;
  public orderModel: OrderModel;
  email:string;
  public innerWidth: any;
  public isMobileScreen: boolean;
  public url;
  public pageActions = GLOBALS.pageActions;
  public loaded: boolean = false;
  public pageAct: string;
  public data1: any[] = [];
  public orderLabels = OrderModel.attributesLabels;
  public productLabels = ProductModel.attributesLabels;
  public customerLabels = CustomerModel.attributesLabels;


  public error: Boolean;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private orderService: OrderService,
    // private homeService: HomeService,
    // private productService: ProductService
    ) { 
      // setInterval(()=> { this.imageClick() }, 3000);
      this.pageAct = route.snapshot.data['act'];
  }
  // email = new FormControl('', [<any>Validators.required, Validators.email]);
  
  ngOnInit() {

    // if (this.pageAct == GLOBALS.pageActions.home){
    //   this.orderService.findWithProducts(28).subscribe(response => {
    //     console.log('response in home', response);
    //   })
    // }
    this.initializePage();
    this.innerWidth = window.innerWidth;
    if(this.innerWidth > 600){
      this.isMobileScreen = false;
    }else{
      this.isMobileScreen = true;
    }

    this.orderModel = new OrderModel();
    this.fg = this.fb.group(new OrderModel().validationRules());
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
    console.log(this.isMobileScreen, this.innerWidth);
  }


  /**
   * Initialize page
   */
  private initializePage() {
    this.fg = this.fb.group(new OrderModel().validationRules());
    this.getData();
  }


  /**
   * Get record
   */
  private getData() {
    this.route.params.subscribe(params => {
      this.orderService.findWithProducts(params['id']).subscribe(
        response => {
          if (response) {
            this.orderModel = <OrderModel>response;
            console.log('order model', this.orderModel)

            // this.fg.patchValue(this.orderModel);

            //TODO:low need to check why we are dowing this after fetching data
            // if (this.pageAct == this.pageActions.view) {
            //   this.initViewPage();
            // } else if (this.pageAct == this.pageActions.update) {
            //   this.initUpdatePage();
            // }
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


}
