import { Component, OnInit, HostListener } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {ProductService, HomeService, OrderService} from '../../services';
import {NotifyUserModel} from '../../models';
import {GLOBALS} from '../../config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public fg: FormGroup;
  public notifyUser: NotifyUserModel;
  email:string;
  public innerWidth: any;
  public isMobileScreen: boolean;
  public url;
  public imageAddress = 'http://localhost:3000/';
  public pageActions = GLOBALS.pageActions;
  public pageAct: string;
  public page: string;
  public imageInterval: any[] = [];
  public imageInterval1 : any[][] = [];
  public imageInterval2 : any[][] = [];
  // imageInterval=[
  //   'assets/img1.jpg','assets/img2.jpg',
  //   'assets/img3.jpg','assets/img4.jpg',
  //   'assets/img5.jpg','assets/img2.jpg',
  //   'assets/img3.jpg','assets/img4.jpg',
  //   'assets/img1.jpg','assets/img5.jpg',
  //   'assets/img3.jpg','assets/img4.jpg'
  // ];
  // imageInterval1=[[
  //   'assets/img1.jpg','assets/img2.jpg'],[
  //   'assets/img3.jpg','assets/img4.jpg'],[
  //   'assets/img5.jpg','assets/img2.jpg'],[
  //   'assets/img3.jpg','assets/img4.jpg'],[
  //   'assets/img1.jpg','assets/img5.jpg'],[
  //   'assets/img3.jpg','assets/img4.jpg']
  // ];
  // imageInterval2=[[
  //   'assets/img1.jpg','assets/img2.jpg',
  //   'assets/img3.jpg'],['assets/img4.jpg',
  //   'assets/img5.jpg','assets/img2.jpg'],[
  //   'assets/img3.jpg','assets/img4.jpg',
  //   'assets/img1.jpg'],['assets/img5.jpg',
  //   'assets/img3.jpg','assets/img4.jpg']
  // ];
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
    private homeService: HomeService,
    private productService: ProductService
    ) { 
      setInterval(()=> { this.imageClick() }, 3000);
      this.pageAct = route.snapshot.data['act'];
  }
  // email = new FormControl('', [<any>Validators.required, Validators.email]);
  
  ngOnInit() {

    if (this.pageAct == GLOBALS.pageActions.home){
      this.productService.findAll().subscribe(response => {
        this.setImageArrays(response);
        this.page = 'Home';
      })
    }
    else if (this.pageAct == GLOBALS.pageActions.sale){
      this.productService.findByDiscount(15).subscribe(response => {
        this.setImageArrays(response);
        this.page = 'Sale';
      })
    }
    if (this.pageAct == GLOBALS.pageActions.newArrival){
      this.productService.findAll().subscribe(response => {
        this.setImageArrays(response);
        this.page = 'New Arrival';
      })
    }
    if (this.pageAct == GLOBALS.pageActions.summerCollection){
      this.productService.findBySeason('Summer').subscribe(response => {
        this.setImageArrays(response);
        this.page = 'Summer Collection';
      })
    }
    this.innerWidth = window.innerWidth;
    if(this.innerWidth > 600){
      this.isMobileScreen = false;
    }else{
      this.isMobileScreen = true;
    }

    this.url = 'http://localhost:3000/img1.jpg';
    this.notifyUser = new NotifyUserModel();
    // this.fg = this.fb.group({email: new FormControl('', [<any>Validators.required, Validators.email])});
    this.fg = this.fb.group(new NotifyUserModel().validationRules());
    // this.showTimer();
  }

  setImageArrays(response){
    for(let i=0;i<response['length'];i++){
      if(i==0){
        this.image = this.imageAddress+response[i].url;
      }
      let obj = {id:response[i].id, url:this.imageAddress+response[i].url,
      name:response[i].name, description:response[i].description,
      discount: response[i].discount};
      this.imageInterval.push(obj);
    }
    let k1 = Math.floor(response['length']/2);
    for(let j=0;j<k1;j=j+1){
      let obj1 = {id:response[j*2].id, url:this.imageAddress+response[j*2].url,
        name:response[j*2].name, description:response[j*2].description,
        discount: response[j*2].discount};
      let obj2 = {id:response[(j*2)+1].id, url:this.imageAddress+response[(j*2)+1].url,
        name:response[(j*2)+1].name, description:response[(j*2)+1].description,
        discount: response[(j*2)+1].discount};
      // this.imageInterval1[j] = new Array(2);
      let arr = [obj1, obj2];
      this.imageInterval1.push(arr);
    }
    let k2 = Math.floor(response['length']/3);
    for(let j=0;j<k2;j=j+1){
      let obj1 = {id:response[j*3].id, url:this.imageAddress+response[j*3].url,
        name:response[j*3].name, description:response[j*3].description,
        discount: response[j*3].discount};
      let obj2 = {id:response[(j*3)+1].id, url:this.imageAddress+response[(j*3)+1].url,
        name:response[(j*3)+1].name, description:response[(j*3)+1].description,
        discount: response[(j*3)+1].discount};
      let obj3 = {id:response[(j*3)+2].id, url:this.imageAddress+response[(j*3)+2].url,
        name:response[(j*3)+2].name, description:response[(j*3)+2].description,
        discount: response[(j*3)+2].discount};
        let arr = [obj1, obj2, obj3];
      this.imageInterval2.push(arr);
      // this.imageInterval2[j].push(obj2);
      // this.imageInterval2[j].push(obj3);
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

  getImages(){
    
  }

  // getErrorMessage() {
  //   return this.email.hasError('required') ? 'You must enter email id' :
  //       this.email.hasError('email') ? 'Not a valid email' :
  //           '';
  // }

  // onSave(email) {
  //   console.log('Buton is clicked one'+ email.email);
  //   this.notifyUser.email = email.email;
  //   console.log('Buton is clicked '+ this.notifyUser.email);
  //   this.registerService.create(this.notifyUser).subscribe(response => {
  //     console.log('Response for notify user '+ response)
  //   },
  //   error =>{
  //     console.log('error in notify user '+ error)
  //   },
  //   ()=>{}
  //   )
  // }

  // showTimer() {
  //   var countDownDate = new Date("Jan 20, 2020 00:00:00").getTime();
        
  //       // Update the count down every 1 second
  //       var countdownfunction = setInterval(function() {
        
  //         // Get todays date and time
  //         var now = new Date().getTime();
          
  //         // Find the distance between now an the count down date
  //         var distance = countDownDate - now;
          
  //         // Time calculations for days, hours, minutes and seconds
  //         var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //         var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //         var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //         var seconds = Math.floor((distance % (1000 * 60)) / 1000);
          
  //         // Output the result in an element with id="demo"
  //         document.getElementById("timer").innerHTML = days + "d " + hours + "h "
  //         + minutes + "m " + seconds + "s ";
          
  //         // If the count down is over, write some text 
  //         if (distance < 0) {
  //           clearInterval(countdownfunction);
  //           document.getElementById("timer").innerHTML = "EXPIRED";
  //         }
  //       }, 1000);
  // }
  
}
