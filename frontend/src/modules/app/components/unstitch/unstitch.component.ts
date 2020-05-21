import { Component, OnInit, HostListener } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import {RegisterService, ProductService, HomeService} from '../../services';
import {NotifyUserModel} from '../../models';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-unstitch',
  templateUrl: './unstitch.component.html',
  styleUrls: ['./unstitch.component.css']
})
export class UnStitchComponent implements OnInit {

  public fg: FormGroup;
  public notifyUser: NotifyUserModel;
  email:string;
  public innerWidth: any;
  public isMobileScreen: boolean;
  public url;
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
    private fb: FormBuilder,
    private registerService: RegisterService,
    private homeService: HomeService,
    private productService: ProductService
    ) { 
      // setInterval(()=> { this.imageClick() }, 3000);
  }
  // email = new FormControl('', [<any>Validators.required, Validators.email]);
  
  ngOnInit() {

    this.productService.findByDiscount(15).subscribe(response => {
      // for(let i=0;i<response['length'];i++){
      //   this.imageInterval.push(response[i].url);
      // }
      // for(let j=0;j<response['length']/2;j=j+1){
      //   this.imageInterval1[j].push(response[j*2].url);
      //   this.imageInterval1[j].push(response[(j*2)+1].url);
      // }
      // for(let j=0;j<response['length']/3;j=j+1){
      //   this.imageInterval2[j].push(response[j*2].url);
      //   this.imageInterval2[j].push(response[(j*2)+1].url);
      //   this.imageInterval2[j].push(response[(j*2)+2].url);
      // }
    })
    this.innerWidth = window.innerWidth;
    if(this.innerWidth > 600){
      this.isMobileScreen = false;
    }else{
      this.isMobileScreen = true;
    }

    var imageAddress = '../../assets/im1.jpg';
    this.url = `${environment.apiBaseUrl}img1.jpg`;
    // this.url = 'http://localhost:3000/uploads/img1.jpg';
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
