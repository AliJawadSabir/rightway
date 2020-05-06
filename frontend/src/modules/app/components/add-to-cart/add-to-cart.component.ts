import { Component, OnInit, HostListener } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import {SharedDataService} from '../../services';
import {CartItemModel} from '../../models';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {


  public fg: FormGroup;
  public cartItemModel: CartItemModel;
  public componentLabels = CartItemModel.attributesLabels;

  constructor(
    // private route: ActivatedRoute,
    private fb: FormBuilder,
    private sharedDataService: SharedDataService
    ) { }
  
    im = {"id":1,"name":"../../assets/im8.jpeg",
    "description":"Incidunt et magni",
    "price":"170.00","quantity":56840};
    imageLink = this.im.name;
    quantity=1;
    stockAvailability = 'IN STOCK';
    obj={};
    loaded = false;
    totalAmount;
    taxAmount = 0;
    deliveryCharges = 0;
    total;
    cart:any[] = [];
    items:any[];
    item: CartItemModel;
    amount:number;
    public innerWidth: any;
    public isMobileScreen: boolean;

  ngOnInit() {

    if(this.innerWidth > 680){
      this.isMobileScreen = false;
    }else{
      this.isMobileScreen = true;
    }


    console.log('ng on it called in add to cart');
    this.addInCart();
    this.sharedDataService.currentMessage.subscribe(amount => this.amount = amount);
    // console.log('add to cart message', this.message);
    // this.categoryModel = new CategoryModel();
    // this.fg = this.fb.group(new CategoryModel().validationRules());
  }


  // code for checking size of screen
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    if(this.innerWidth > 680){
      this.isMobileScreen = false;
    }else{
      this.isMobileScreen = true;
    }
    console.log('inner width--->>>', this.innerWidth, this.isMobileScreen);
  }

  newMessage() {
    this.sharedDataService.changeAmount(this.total);
  }

  addInCart() {
    let item =  JSON.parse(sessionStorage.getItem('product'));
    if (item == undefined) {
      console.log('item is undefined');
      this.loadCart();
    }else {
      if (sessionStorage.getItem('cart') == null) {
        console.log('cart is null');
        this.cart.push(JSON.stringify(item));
        sessionStorage.setItem('cart', JSON.stringify(this.cart));
        this.loadCart();
      }else {
        this.cart = JSON.parse(sessionStorage.getItem('cart'));
        this.cart.push(JSON.stringify(item));
        sessionStorage.setItem('cart', JSON.stringify(this.cart));
        this.loadCart();
      }
      sessionStorage.removeItem('product');
    }
  }

  loadCart() {
    this.totalAmount = 0;
    this.taxAmount = 0;
    this.total = 0;
    this.deliveryCharges = 0;
    this.items = [];
    if (sessionStorage.getItem('cart') != null) {
      this.cart = JSON.parse(sessionStorage.getItem('cart'));
		  for (var i = 0; i < this.cart.length; i++) {
        this.item = JSON.parse(this.cart[i]);
        this.items.push(this.item);
        this.totalAmount += this.item.price * this.item.quantity;
        console.log('items==>>', this.items);
      }
      this.taxAmount = (this.totalAmount*14)/100;
      this.total = this.totalAmount + this.taxAmount + this.deliveryCharges;
      this.total = Math.floor(this.total);
      this.newMessage();
    }
		
  }

  removeItem(id: number): void {
		this.cart = JSON.parse(sessionStorage.getItem('cart'));
		let index: number = -1;
		for (var i = 0; i < this.cart.length; i++) {
			let item = JSON.parse(this.cart[i]);
			if (item.id == id) {
				this.cart.splice(i, 1);
				break;
			}
		}
		sessionStorage.setItem("cart", JSON.stringify(this.cart));
		this.loadCart();
  }
  
  removeItems(){
    sessionStorage.clear();
    this.loadCart();
  }


  // addCategory(category: CategoryModel) {
  //   console.log('Buton is clicked one'+ category.category);
  //   this.categoryModel = category;
  //   console.log('Buton is clicked '+ this.categoryModel.description);
  //   this.addCategoryService.create(this.categoryModel).subscribe(response => {
  //     console.log('Response for add category '+ response)
  //   },
  //   error =>{
  //     console.log('error in add category '+ error)
  //   },
  //   ()=>{}
  //   )
  // }

}
