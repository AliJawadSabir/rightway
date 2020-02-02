import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import {RegisterService} from '../../services';
import {NotifyUserModel} from '../../models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public fg: FormGroup;
  public notifyUser: NotifyUserModel;
  email:string;
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
    private fb: FormBuilder,
    private registerService: RegisterService
    ) { 
    
  }
  // email = new FormControl('', [<any>Validators.required, Validators.email]);
  
  ngOnInit() {
    var imageAddress = '../../assets/im1.jpg';
    this.notifyUser = new NotifyUserModel();
    // this.fg = this.fb.group({email: new FormControl('', [<any>Validators.required, Validators.email])});
    this.fg = this.fb.group(new NotifyUserModel().validationRules());
    // this.showTimer();
  }

  // getErrorMessage() {
  //   return this.email.hasError('required') ? 'You must enter email id' :
  //       this.email.hasError('email') ? 'Not a valid email' :
  //           '';
  // }

  onSave(email) {
    console.log('Buton is clicked one'+ email.email);
    this.notifyUser.email = email.email;
    console.log('Buton is clicked '+ this.notifyUser.email);
    this.registerService.create(this.notifyUser).subscribe(response => {
      console.log('Response for notify user '+ response)
    },
    error =>{
      console.log('error in notify user '+ error)
    },
    ()=>{}
    )
  }

  showTimer() {
    var countDownDate = new Date("Jan 20, 2020 00:00:00").getTime();
        
        // Update the count down every 1 second
        var countdownfunction = setInterval(function() {
        
          // Get todays date and time
          var now = new Date().getTime();
          
          // Find the distance between now an the count down date
          var distance = countDownDate - now;
          
          // Time calculations for days, hours, minutes and seconds
          var days = Math.floor(distance / (1000 * 60 * 60 * 24));
          var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);
          
          // Output the result in an element with id="demo"
          document.getElementById("timer").innerHTML = days + "d " + hours + "h "
          + minutes + "m " + seconds + "s ";
          
          // If the count down is over, write some text 
          if (distance < 0) {
            clearInterval(countdownfunction);
            document.getElementById("timer").innerHTML = "EXPIRED";
          }
        }, 1000);
  }
  
}
