import { Component, OnInit,ViewChild, HostListener } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService} from '../../../services';
import { ProductModel} from '../../../models';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public productModel: ProductModel;
  public innerWidth: any;
  public isMobileScreen: boolean;
  public data1: any[] = [];

  displayedColumns = [
    'name',
    'available',
    'price',
    'discount',
    'options'
  ];

  displayedMobileColumns = [
    'name',
    'available',
    'options'
  ];
  attrLabels = {
    name: 'Name',
    price: 'Price',
    available: 'Available',
    discount: 'Discount(%)'
    };

  dataSource: any;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  public error: Boolean;
  constructor(
    private productService: ProductService,
    ) { 
  }
  
  ngOnInit() {

    this.getProducts();
    this.innerWidth = window.innerWidth;
    if(this.innerWidth > 600){
      this.isMobileScreen = false;
    }else{
      this.isMobileScreen = true;
    }

    this.productModel = new ProductModel();
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

  getProducts(){
      this.productService.findAll().subscribe(response => {
        if (response) {
          for(let i=0;i<response['length'];i++){
            let obj = {id:response[i].id, name:response[i].name, price:response[i].price,
            discount:response[i].discount, available:response[i].available};
            this.data1.push(obj);
          }
          this.dataSource = new MatTableDataSource(this.data1);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
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
