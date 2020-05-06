import { Component, OnInit, HostListener } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import {LoginService} from '../../services';
import {LoginModel} from '../../models';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public fg: FormGroup;
  public loginUser: LoginModel;
  email:string;
  public innerWidth: number;
  public flexSize: number;
  public componentLabels = LoginModel.attributesLabels;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private loginService: LoginService,
    private snackBar: MatSnackBar,
    ) { 
    
  }

  // ngOnInit() {
  // }


  ngOnInit() {

    this.innerWidth = window.innerWidth;
    if(this.innerWidth > 600){
      this.flexSize = 50;
    }else{
      this.flexSize = 80;
    }

    this.loginUser = new LoginModel();
    // this.fg = this.fb.group({email: new FormControl('', [<any>Validators.required, Validators.email])});
    this.fg = this.fb.group(new LoginModel().validationRules());
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
    console.log('Buton is clicked one'+ user.email);
    this.loginUser = user;
    console.log('Buton is clicked '+ this.loginUser.password);
    this.loginService.login(this.loginUser).subscribe(response => {
      this.snackBar.open('User Log in Successfully','Dismiss' ,{
        duration: 3000,
      });
      this.router.navigate([`/home`]);
    },
    error =>{
      this.snackBar.open('Incorrect Email or Password','Dismiss' ,{
        duration: 3000,
      });
    },
    ()=>{}
    )
  }

}
