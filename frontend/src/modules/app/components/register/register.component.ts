import { Component, OnInit, HostListener } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {RegisterService} from '../../services';
import {RegisterModel} from '../../models';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  public fg: FormGroup;
  public registerUser: RegisterModel;
  email:string;
  public innerWidth: number;
  public flexSize: number;
  public componentLabels = RegisterModel.attributesLabels;
  public mobileMask = [/[0]/, /[0-9]/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
  
  
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private registerService: RegisterService,
    private snackBar: MatSnackBar
    ) { 
    
  }

  
  ngOnInit() {
    this.innerWidth = window.innerWidth;
    if(this.innerWidth > 600){
      this.flexSize = 50;
    }else{
      this.flexSize = 80;
    }

    this.registerUser = new RegisterModel();
    // this.fg = this.fb.group({email: new FormControl('', [<any>Validators.required, Validators.email])});
    this.fg = this.fb.group(new RegisterModel().validationRules());
    // this.showTimer();
  }



  // code for checking size of screen
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    if(this.innerWidth > 600){
      this.flexSize = 50;
    }else{
      this.flexSize = 80;
    }
  }

  // getErrorMessage() {
  //   return this.email.hasError('required') ? 'You must enter email id' :
  //       this.email.hasError('email') ? 'Not a valid email' :
  //           '';
  // }

  onSave(user) {
    this.registerUser = user;
    this.registerUser.gender = 'Female';
    this.registerUser.isSuperUser = false;
    // console.log('Button is clicked '+ this.registerUser);
    this.registerService.register(this.registerUser).subscribe(response => {
      this.snackBar.open('Successful Registration','Dismiss' ,{
        duration: 3000,
      });
      this.router.navigate([`/login`]);
    },
    error =>{
      this.snackBar.open('Registration Failed','Dismiss' ,{
        duration: 3000,
      });
    },
    ()=>{}
    )
  }

}
