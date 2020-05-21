import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedDataService, ProductService } from '../../services';
import { CartItemModel, ProductModel } from '../../models';
import { MatSnackBar } from '@angular/material';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public products = [
    [
    {"id":1,"name":"../../assets/img1.jpg",
    "description":"Incidunt et magni","Size":"Small",
    "price":170.00,"quantity":56840, "category":"Frof"},
    {"id":2,"name":"../../assets/img2.jpg",
    "description":"Incidunt et magni","Size":"Medium",
    "price":170.00,"quantity":56840, "category":"Shirt"},
    {"id":3,"name":"../../assets/img3.jpg",
    "description":"Sint libero mollitia","Size":"Large",
    "price":302.00,"quantity":9358, "category":"Skirt"}],[
    {"id":4,"name":"../../assets/img4.jpg",
    "description":"In consequuntur cupiditat","Size":"XLarge",
    "price":279.00,"quantity":90316, "category":"Top"},
    {"id":5,"name":"../../assets/img5.jpg",
    "description":"In consequuntur cupiditat","Size":"Small",
    "price":279.00,"quantity":90316, "category":"Kurta"},
    {"id":6,"name":"../../assets/img3.jpg",
    "description":"Saepe nemo praesentium","Size":"Large",
    "price":760.00,"quantity":5899, "category":"Western"}]
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private snackBar: MatSnackBar
    // private sharedDataService: SharedDataService
    ) { 
      setInterval(()=> { this.imageClick() }, 3000);
    }
  
    imageLink;
    quantity=1;
    stockAvailability = 'IN STOCK';
    selectedSize;
    obj:any;
    loaded = false;
    size = '';
    sizeMsg = '';
    colorMsg = '';
    color = '';
    colorArray = [];
    // colorArray = ['red', 'green', 'yellow'];
    public imageAddress = environment.apiBaseUrl;
    sizeArray = [];
    // sizeArray = ['S', 'M', 'L'];
    public innerWidth: any;
    public isMobileScreen: boolean;
    imageInterval=[];
    // imageInterval=[
    //   'assets/img1.jpg',
    //   'assets/img2.jpg',
    //   'assets/img3.jpg',
    //   'assets/img4.jpg',
    // ];
    image = 'assets/img1.jpg';
    cartItem:CartItemModel;
    productModel:ProductModel;

  ngOnInit() {
    this.obj = {};
    this.cartItem = new CartItemModel();
    this.innerWidth = window.innerWidth;
    if(this.innerWidth > 600){
      this.isMobileScreen = false;
    }else{
      this.isMobileScreen = true;
    }

    this.getProduct();

    // this.getProduct();
    // this.getId();
    // let a = sessionStorage.getItem('product');
    // console.log('local storage product', a);
    // this.sharedDataService.currentMessage.subscribe(message => this.message = message);
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

  setImageArrays(response){
    for(let i=0;i<response['length'];i++){
      let prod = {id:response[i].id, url:this.imageAddress+response[i].url,
      quantity:response[i].quantity};
      if(i==0){
        this.image = prod.url;
        this.obj['price'] = response[i].price;
        this.cartItem.name = response[i].name;
        this.cartItem.discount = response[i].discount;
        // APPLY DISCOUNT ON THE REAL PRICE
        let discount = (response[i].price * response[i].discount)/100;
        this.obj['discountedPrice'] = response[i].price - discount;
        this.cartItem.price = this.obj['discountedPrice'];
        this.obj['name'] = response[i].name;
        this.obj['discount'] = response[i].discount;
        this.cartItem.id = prod.id;
        this.cartItem.id = prod.id;
        this.cartItem.url = this.imageAddress+response[i].url;
      }
      let size = response[i].size.size;
      this.checkColorSizeExist(response[i]);
      this.imageInterval.push(prod);
    }
    this.loaded = true;
  }

  checkColorSizeExist(response){
    let colorExist = false;
    let sizeExist = false;
    for(let j=0;j<this.colorArray.length;j++){
      if(this.colorArray[j].color == response.color.color){
        colorExist = true;
      }
    }
    for(let j=0;j<this.sizeArray.length;j++){
      if(this.sizeArray[j].size == response.size.size){
        sizeExist = true;
      }
    }
    if (!sizeExist){
      this.sizeArray.push(response.size)
    }
    if (!colorExist){
      this.colorArray.push(response.color)
    }
  }

  imageClick(){
    let length = this.imageInterval.length;
    for(let i=0;i<length;i++){
      if(this.imageInterval[i].url == this.image && i<length-1){
        this.image = this.imageInterval[i+1].url;
        break;
      }else if(this.imageInterval[i].url == this.image && i==length-1){
        this.image = this.imageInterval[0].url;
        break;
      }
    }
  }

  // getId() {
  //   this.cartItem = new CartItemModel();
  //   for (let i = 0; i < this.products.length; i++) {
  //     let product = this.products[i];
  //     for (let j = 0; j < product.length; j++) {
  //       let prod = product[j];
  //       this.route.params.subscribe(params => {
  //         if (prod.id == +params['id']){
  //           this.imageLink = prod.name;
  //           this.obj = prod;
  //           this.cartItem.id = prod.id;
  //           this.cartItem.name = prod.name;
  //           this.cartItem.quantity = this.quantity;
  //           this.cartItem.description = prod.description;
  //           this.cartItem.price = prod.price;
  //           this.cartItem.category = prod.category;
  //           this.cartItem.size = prod.Size;
  //         }
  //       });
  //     }
  //   }
  //   this.loaded = true;
  // }

  getProduct(){
    this.route.params.subscribe(params => {
      let id = +params['id'];
      this.productService.findWithCode(id).subscribe(response =>{
        if (response){
          this.setImageArrays(response);
        }else{
          this.snackBar.open('Product does not exist.','Dismiss' ,{
            duration: 4000,
          });
        }
      })
    });
  }

  addQuantity() {
    if (this.quantity < 10) {
      this.quantity++;
    }
  }

  minusQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  changeSize(size){
    this.size = size.size;
    this.sizeMsg = '';
    this.cartItem.sizeId = size.id;
  }

  changeColor(color){

    this.color = color.color;
    this.colorMsg = '';
    this.cartItem.colorId = color.id;
    // this.size = s;
  }

  // newMessage() {
  //   this.sharedDataService.changeMessage("Hello from Product");
  // }

  addToCart() {
    if (this.size == '') {
      this.sizeMsg = 'Select Size'
    }
    if(this.color == '') {
      this.colorMsg = 'Select Color'
    }
    if(this.size != '' && this.color != ''){
      this.sizeMsg = '';
      this.colorMsg = '';
      this.cartItem.quantity = this.quantity;
      this.cartItem.size = this.size;
      this.cartItem.color = this.color;
      sessionStorage.setItem('product', JSON.stringify(this.cartItem));
      this.router.navigate(['home/addToCart']);
    }
    
  }

}
