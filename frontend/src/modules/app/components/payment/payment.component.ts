import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedDataService, CustomerService, OrderService } from '../../services';
import { CustomerModel, OrderModel } from '../../models';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;

  im1 = 'assets/im8.jpeg';
  im2 = 'assets/im6.jpeg';
  im3 = 'assets/im4.jpg';
  im4 = 'assets/im3.jpg';
  imageObject: Array<object> = [{
    image: 'assets/im8.jpeg',
    thumbImage: 'assets/img/slider/1_min.jpeg',
    alt: 'alt of image',
    title: 'title of image'
  }, 
  // {
  //   image: 'assets/im6.jpeg', // Support base64 image
  //   thumbImage: '.../iOe/xHHf4nf8AE75h3j1x64ZmZ//Z==', // Support base64 image
  //   title: 'Image title', //Optional: You can use this key if want to show image with title
  //   alt: 'Image alt' //Optional: You can use this key if want to show image with alt
  // },
  // {
  //   image: 'assets/im8.jpeg', // Support base64 image
  //   thumbImage: '.../iOe/xHHf4nf8AE75h3j1x64ZmZ//Z==', // Support base64 image
  //   title: 'Image title', //Optional: You can use this key if want to show image with title
  //   alt: 'Image alt' //Optional: You can use this key if want to show image with alt
  // },
  // {
  //   image: 'assets/im6.jpeg', // Support base64 image
  //   thumbImage: '.../iOe/xHHf4nf8AE75h3j1x64ZmZ//Z==', // Support base64 image
  //   title: 'Image title', //Optional: You can use this key if want to show image with title
  //   alt: 'Image alt' //Optional: You can use this key if want to show image with alt
  // }
];

  reason = '';
  public fg: FormGroup;
  public customerModel: CustomerModel;
  public orderModel: OrderModel;
  public innerWidth: any;
  public isMobileScreen: boolean;
  // public componentLabels = CustomerModel.attributesLabels;
  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    // private fb: FormBuilder,
    private sharedDataService: SharedDataService,
    private customerService: CustomerService,
    private orderService: OrderService,
    ) {
      setInterval(()=> { this.imageClick() }, 3000);
     }
  
    amount;
    customer;
    methodChoosen = 0;
    items = [];
    quantities =[];
    order = {};
    imageInterval=[
      'assets/img1.jpg',
      'assets/img2.jpg',
      'assets/img3.jpg',
      'assets/img4.jpg',
    ]
    // imageInterval=[
    //   {im:'assets/im8.jpeg',show:true},
    //   {im:'assets/im6.jpeg',show:false},
    //   {im:'assets/im4.jpg',show:false},
    // ]
    paymentMethods = [
      {id:"1", method:"Cash on Delivery"},
      {id:"2", method:"EasyPaisa"},
      {id:"3", method:"Jazz Cash"}
    ];
    image = 'assets/img1.jpg';

  ngOnInit() {
    // this.customerModel = new CustomerModel();
    // this.fg = this.fb.group({email: new FormControl('', [<any>Validators.required, Validators.email])});
    // this.fg = this.fb.group(new CustomerModel().validationRules());

    this.innerWidth = window.innerWidth;
    if(this.innerWidth > 500){
      this.isMobileScreen = false;
    }else{
      this.isMobileScreen = true;
    }

    this.sharedDataService.currentUser.subscribe(user => this.customer = user);
    this.sharedDataService.currentMessage.subscribe(message => this.amount = message);

    console.log('User shown', JSON.parse(sessionStorage.getItem('customer')));
    let check = JSON.parse(sessionStorage.getItem('customer'));
    if (check == null) {

      sessionStorage.setItem('customer', JSON.stringify(this.customer));
      console.log('customer is added in session storage', this.customer);
    }
    if (check != null && this.customer.fname == undefined) {
      let cus = sessionStorage.getItem('customer');
      this.customer = JSON.parse(cus);
      console.log('customer is taken from session storage', cus);
    }
    if (this.amount == 0){
      this.loadCart();
    }else{
      this.loadCart();
      // this.amount = Math.floor(this.amount);
    }
  }

  // code for checking size of screen
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    if(this.innerWidth > 500){
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

  // code for side nav close
  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  // code for cancel button
  cancelClick() {
    this.router.navigate(['home/addToCart/shipping']);
  }

  // code for adding new Customer and Order
  confirmOrder() {
    this.customerModel = this.customer;
    this.customerService.create(this.customerModel).subscribe(response => {
      console.log('Response for Customer create '+ response['id']);
      // this.router.navigate([`/home`]);
      if (response) {
        this.makeOrder();
        this.order['customerId'] = response['id'];
        this.order['trackId'] = response['id'] + '258';
        console.log(this.order['products'][0]);
        console.log(this.order['products']);
        console.log(this.order);
        // this.orderModel = this.order;
        // console.log('Track Id of Order', this.orderModel.trackId);
        this.orderService.create(this.order).subscribe(res => {
          console.log('Response for Order create '+ res);
        })
      }
    },
    error =>{
      console.log('error in Customer '+ error)
    },
    ()=>{
      // sessionStorage.clear();
    }
    )

    // this.router.navigate(['home/addToCart']);
  }

  makeOrder() {
    this.order['amount'] = this.amount;
    // console.log('order=??????>>', this.order)
    this.order['status'] = 'Pending';
    this.order['products'] = this.items;
    this.order['quantity'] = this.quantities;
    // this.orderModel.trackId = '';
  }

  loadCart() {
    
    let totalAmount = 0;
    let taxAmount = 0;
    let deliveryCharges = 0;
    // let items = [];
    let item;
    let cart = [];
    if (sessionStorage.getItem('cart') != null) {
      cart = JSON.parse(sessionStorage.getItem('cart'));
		  for (var i = 0; i < cart.length; i++) {
        item = JSON.parse(cart[i]);
        this.items.push(item);
        this.quantities.push(item.quantity);
        totalAmount += item.price * item.quantity;
        // console.log('items==>>', this.items);
      }
      taxAmount = (totalAmount*14)/100;
      this.amount = totalAmount + taxAmount + deliveryCharges;
      this.amount = Math.floor(this.amount);
      // this.newMessage();
    }
		
  }

  // public showSlides() {
  //   var i;
  //   var slides = document.getElementsByClassName("mySlides");
  //   var dots = document.getElementsByClassName("dot");
  //   for (i = 0; i < slides.length; i++) {
  //     slides[i].style.display = "none";  
  //   }
  //   slideIndex++;
  //   if (slideIndex > slides.length) {slideIndex = 1}    
  //   for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  //   }
  //   slides[slideIndex-1].style.display = "block";  
  //   dots[slideIndex-1].className += " active";
  //   setTimeout(showSlides, 2000); // Change image every 2 seconds
  // }

}
