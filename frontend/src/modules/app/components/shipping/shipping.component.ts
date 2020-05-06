import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedDataService, CustomerService } from '../../services';
import { CustomerModel } from '../../models';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  // public products = [
  //   [
  //   {"id":1,"name":"../../assets/im8.jpeg",
  //   "description":"Incidunt et magni","Size":"Small",
  //   "price":170.00,"quantity":56840, "category":"Frof"},
  //   {"id":2,"name":"../../assets/im8.jpeg",
  //   "description":"Incidunt et magni","Size":"Medium",
  //   "price":170.00,"quantity":56840, "category":"Shirt"},
  //   {"id":3,"name":"../../assets/im6.jpeg",
  //   "description":"Sint libero mollitia","Size":"Large",
  //   "price":302.00,"quantity":9358, "category":"Skirt"}],[
  //   {"id":4,"name":"../../assets/im8.jpeg",
  //   "description":"In consequuntur cupiditat","Size":"XLarge",
  //   "price":279.00,"quantity":90316, "category":"Top"},
  //   {"id":5,"name":"../../assets/im8.jpeg",
  //   "description":"In consequuntur cupiditat","Size":"Small",
  //   "price":279.00,"quantity":90316, "category":"Kurta"},
  //   {"id":6,"name":"../../assets/im8.jpeg",
  //   "description":"Saepe nemo praesentium","Size":"Large",
  //   "price":760.00,"quantity":5899, "category":"Western"}]
  // ];

  public fg: FormGroup;
  public customerModel: CustomerModel;
  public componentLabels = CustomerModel.attributesLabels;
  public mobileMask = [/[0]/, /[0-9]/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private sharedDataService: SharedDataService,
    private customerService: CustomerService
    ) { }
  
    // imageLink;
    // quantity=1;
    // stockAvailability = 'IN STOCK';
    // total = 0;
    // obj={};
    // loaded = false;
    // message:string;
    // cartItem:CartItemModel;
    amount;
    user;
    public innerWidth: any;
    public isMobileScreen: boolean;

  ngOnInit() {

    this.innerWidth = window.innerWidth;
    if(this.innerWidth > 600){
      this.isMobileScreen = false;
    }else{
      this.isMobileScreen = true;
    }

    this.customerModel = new CustomerModel();
    // this.fg = this.fb.group({email: new FormControl('', [<any>Validators.required, Validators.email])});
    this.fg = this.fb.group(new CustomerModel().validationRules());
    this.sharedDataService.currentMessage.subscribe(message => this.amount = message);
    this.sharedDataService.currentUser.subscribe(user => this.user = user);
    console.log('amount shown', this.amount);
    if (this.amount == 0){
      this.loadCart();
    }else{
      this.amount = Math.floor(this.amount);
    }
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

  // addQuantity() {
  //   this.quantity++;
  //   console.log('plus button clicked');
  // }

  //setting user data
  setUser(){
    console.log('set user caled');
    this.sharedDataService.sendUserInfo(this.user);
  }

  cancelClick() {
    this.router.navigate(['home/addToCart']);
  }

  addCustomerDetails(customer: CustomerModel) {
    this.customerModel = customer;
    this.user = this.customerModel;
      console.log('set user caled');
      this.setUser();
    // this.customerService.create(this.customerModel).subscribe(response => {
    //   console.log('Response for Customer create '+ response);
    //   // sending user data to payment component
    //   this.user = this.customerModel;
    //   console.log('set user caled');
    //   this.setUser();
      
    // },
    // error =>{
    //   console.log('error in Customer '+ error)
    // },
    // ()=>{}
    // )
    this.router.navigate(['home/addToCart/payment']);
  }

  loadCart() {
    
    let totalAmount = 0;
    let taxAmount = 0;
    let deliveryCharges = 0;
    let items = [];
    let item;
    let cart = [];
    if (sessionStorage.getItem('cart') != null) {
      cart = JSON.parse(sessionStorage.getItem('cart'));
		  for (var i = 0; i < cart.length; i++) {
        item = JSON.parse(cart[i]);
        items.push(item);
        totalAmount += item.price * item.quantity;
        console.log('items==>>', items);
      }
      taxAmount = (totalAmount*14)/100;
      this.amount = totalAmount + taxAmount + deliveryCharges;
      this.amount = Math.floor(this.amount);
      // this.newMessage();
    }
		
  }

}
