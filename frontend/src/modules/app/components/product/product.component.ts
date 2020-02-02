import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public products = [
    [
    {"id":1,"name":"../../assets/im8.jpeg",
    "description":"Incidunt et magni",
    "price":"170.00","quantity":56840},
    {"id":2,"name":"../../assets/im8.jpeg",
    "description":"Incidunt et magni",
    "price":"170.00","quantity":56840},
    {"id":3,"name":"../../assets/im6.jpeg",
    "description":"Sint libero mollitia",
    "price":"302.00","quantity":9358}],[
    {"id":4,"name":"../../assets/im8.jpeg",
    "description":"In consequuntur cupiditat",
    "price":"279.00","quantity":90316},
    {"id":5,"name":"../../assets/im8.jpeg",
    "description":"In consequuntur cupiditat",
    "price":"279.00","quantity":90316},
    {"id":6,"name":"../../assets/im8.jpeg",
    "description":"Saepe nemo praesentium",
    "price":"760.00","quantity":5899}]
  ];

  constructor(
    private route: ActivatedRoute
    ) { }
  
    imageLink;
    quantity=1;
    stockAvailability = 'IN STOCK';
    obj={};
    loaded = false;
  ngOnInit() {
    this.getId();
  }

  getId() {
    for (let i = 0; i < this.products.length; i++) {
      let product = this.products[i];
      for (let j = 0; j < product.length; j++) {
        let prod = product[j];
        this.route.params.subscribe(params => {
          if (prod.id == +params['id']){
            this.imageLink = prod.name;
            this.obj = prod;
          }
        });
      }
    }
    this.loaded = true;
  }

  addQuantity() {
    this.quantity++;
    console.log('plus button clicked');
  }

  minusQuantity() {
    this.quantity--;
    console.log('minus button clicked');
  }

  addToCart() {
    
  }

}
