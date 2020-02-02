import { FormControl, Validators, ValidatorFn } from '@angular/forms';

export class LoginModel {

  email: string;
  password: string;

  /**
   * Attributes Labels
   */
  static attributesLabels = {
    email: 'Email',
    password: 'Password',
  };

  /** 
   * Construstor
  */
  constructor() { }


  /** 
   * Form Validation Rules
   * 
  */
  public validationRules() {
    return {
      email: new FormControl('', [<any>Validators.required, Validators.email, Validators.maxLength(30)]),
      password: new FormControl('', [<any>Validators.required, Validators.minLength(6), Validators.maxLength(30)]),
    };
  }
  /** 
   * Forgot Password Validation Rules
   * 
  */
  public FPValidationRules() {
    return {
      email: new FormControl('', [<any>Validators.required, Validators.email, Validators.maxLength(30)]),
    };
  }
}
