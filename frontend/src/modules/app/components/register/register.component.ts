import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import {RegisterService} from '../../services';
import {RegisterModel} from '../../models';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public fg: FormGroup;
  public registerUser: RegisterModel;
  email:string;
  public componentLabels = RegisterModel.attributesLabels;
  public mobileMask = [/[0]/, /[0-9]/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
  constructor(
    private fb: FormBuilder,
    private registerService: RegisterService
    ) { 
    
  }

  ngOnInit() {
    this.registerUser = new RegisterModel();
    // this.fg = this.fb.group({email: new FormControl('', [<any>Validators.required, Validators.email])});
    this.fg = this.fb.group(new RegisterModel().validationRules());
    // this.showTimer();
  }

  // getErrorMessage() {
  //   return this.email.hasError('required') ? 'You must enter email id' :
  //       this.email.hasError('email') ? 'Not a valid email' :
  //           '';
  // }

  onSave(user) {
    this.registerUser = user;
    console.log('Button is clicked '+ this.registerUser);
    this.registerService.register(this.registerUser).subscribe(response => {
      console.log('Response for Register user '+ response)
    },
    error =>{
      console.log('error in Register user '+ error)
    },
    ()=>{}
    )
  }

}
