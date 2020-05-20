import { Component, OnInit,ViewChild, HostListener } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {ProductService, HomeService, OrderService} from '../../../services';
import {NotifyUserModel, ProductModel, OrderModel} from '../../../models';
import {GLOBALS} from '../../../config';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  public fg: FormGroup;
  public orderModel: OrderModel;
  public innerWidth: any;
  public loaded = false;
  public isMobileScreen: boolean;
  public pageActions = GLOBALS.pageActions;
  public pageAct: string;
  public data: ProductModel[] = [new ProductModel()];
  public data1: any[] = [];

  displayedColumns = [
    'name',
    'mobileNumber',
    'amount',
    'status',
    'options'
  ];

  displayedMobileColumns = [
    'name',
    'amount',
    'options'
  ];
  attrLabels = {
    name: 'Name',
    amount: 'Amount',
    status: 'Status',
    mobileNumber: 'Mobile Number'
    };

  dataSource: any;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

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
    this.getOrders();
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
  }

  // imageClick(){
  //   let length = this.imageInterval.length;
  //   for(let i=0;i<length;i++){
  //     if(this.imageInterval[i] == this.image && i<length-1){
  //       this.image = this.imageInterval[i+1];
  //       break;
  //     }else if(this.imageInterval[i] == this.image && i==length-1){
  //       this.image = this.imageInterval[0];
  //       break;
  //     }
  //   }
  // }


  getOrders(){
      this.orderService.findAllWithProducts().subscribe(response => {
        if (response) {
          for(let i=0;i<response['length'];i++){
            this.data[i] = response[i];
            let name = response[i].customer.fname + ' ' + response[i].customer.lname;
            let obj = {id:response[i].id, name:name, mobileNumber:response[i].customer.mobileNumber,
            amount:response[i].amount, status:response[i].status};
            this.data1.push(obj);
          }
          this.dataSource = new MatTableDataSource(this.data1);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      },
      error => {
        console.log(error);
        this.loaded = true;
      },
      () => {
        this.loaded = true;
      }
      )
    }


  /**
   * Apply filter and search in data grid
   */
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase(); // TODO: need to check what it do.
    this.dataSource.filter = filterValue;
  }

  sortData() {
    this.dataSource.sort = this.sort;
  }
}
