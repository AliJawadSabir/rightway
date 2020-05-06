import { Component, OnInit,ViewChild, HostListener } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {ProductService, HomeService, OrderService} from '../../../services';
import {NotifyUserModel, ProductModel} from '../../../models';
import {GLOBALS} from '../../../config';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  public fg: FormGroup;
  public notifyUser: NotifyUserModel;
  email:string;
  public innerWidth: any;
  public isMobileScreen: boolean;
  public url;
  public pageActions = GLOBALS.pageActions;
  public pageAct: string;
  public data: ProductModel[] = [new ProductModel()];
  public data1: ProductModel;

  public attrLabels = ProductModel.attributesLabels;

  displayedColumns = [
    // 'instituteTypeId',
    'Customer',
    'Price',
    'options'
  ];

  dataSource: any;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  public error: Boolean;
  imageInterval=[
    'assets/img1.jpg','assets/img2.jpg',
    'assets/img3.jpg','assets/img4.jpg',
    'assets/img5.jpg','assets/img2.jpg',
    'assets/img3.jpg','assets/img4.jpg',
    'assets/img1.jpg','assets/img5.jpg',
    'assets/img3.jpg','assets/img4.jpg'
  ];
  imageInterval1=[[
    'assets/img1.jpg','assets/img2.jpg'],[
    'assets/img3.jpg','assets/img4.jpg'],[
    'assets/img5.jpg','assets/img2.jpg'],[
    'assets/img3.jpg','assets/img4.jpg'],[
    'assets/img1.jpg','assets/img5.jpg'],[
    'assets/img3.jpg','assets/img4.jpg']
  ];
  imageInterval2=[[
    'assets/img1.jpg','assets/img2.jpg',
    'assets/img3.jpg'],['assets/img4.jpg',
    'assets/img5.jpg','assets/img2.jpg'],[
    'assets/img3.jpg','assets/img4.jpg',
    'assets/img1.jpg'],['assets/img5.jpg',
    'assets/img3.jpg','assets/img4.jpg']
  ];
  image = 'assets/img1.jpg';
  public products = [
    {"id":1,"name":"../../assets/img1.jpg",
    "description":"Incidunt et magni",
    "price":"170.00","quantity":56840},
    {"id":2,"name":"../../assets/img2.jpg",
    "description":"Incidunt et magni",
    "price":"170.00","quantity":56840},
    {"id":3,"name":"../../assets/img3.jpg",
    "description":"Sint libero mollitia",
    "price":"302.00","quantity":9358},
    {"id":4,"name":"../../assets/img4.jpg",
    "description":"In consequuntur cupiditat",
    "price":"279.00","quantity":90316},
    {"id":5,"name":"../../assets/img5.jpg",
    "description":"In consequuntur cupiditat",
    "price":"279.00","quantity":90316},
    {"id":6,"name":"../../assets/img1.jpg",
    "description":"Saepe nemo praesentium",
    "price":"760.00","quantity":5899}
];
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
      console.log('page act--->>>', this.pageAct)
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

    var imageAddress = '../../assets/im1.jpg';
    this.url = 'http://localhost:3000/uploads/img1.jpg';
    this.notifyUser = new NotifyUserModel();
    // this.fg = this.fb.group({email: new FormControl('', [<any>Validators.required, Validators.email])});
    this.fg = this.fb.group(new NotifyUserModel().validationRules());
    // this.showTimer();
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
    console.log('inner width--->>>', this.innerWidth, this.isMobileScreen);
  }

  imageClick(){
    let length = this.imageInterval.length;
    for(let i=0;i<length;i++){
      if(this.imageInterval[i] == this.image && i<length-1){
        this.image = this.imageInterval[i+1];
        break;
      }else if(this.imageInterval[i] == this.image && i==length-1){
        this.image = this.imageInterval[0];
        break;
      }
    }
  }


  getOrders(){
      this.orderService.findWithProducts(28).subscribe(response => {
        if (response) {
          console.log('response order list', response)
          // this.data = response;
          // this.dataSource = new MatTableDataSource<ProductModel>(this.data);
          // this.dataSource.paginator = this.paginator;
          // this.dataSource.sort = this.sort;
        }
      })
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
