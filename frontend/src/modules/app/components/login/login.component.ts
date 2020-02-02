import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import {LoginService} from '../../services';
import {LoginModel} from '../../models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public fg: FormGroup;
  public loginUser: LoginModel;
  email:string;
  public componentLabels = LoginModel.attributesLabels;
  constructor(
    private fb: FormBuilder,
    private loginService: LoginService
    ) { 
    
  }

  // ngOnInit() {
  // }








  ngOnInit() {
    this.loginUser = new LoginModel();
    // this.fg = this.fb.group({email: new FormControl('', [<any>Validators.required, Validators.email])});
    this.fg = this.fb.group(new LoginModel().validationRules());
    // this.showTimer();
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
      console.log('Response for login user '+ response)
    },
    error =>{
      console.log('error in login user '+ error)
    },
    ()=>{}
    )
  }

}
