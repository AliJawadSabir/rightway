import { FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

export class RegisterModel {

  id?: number;
  name?: string;
  email?: string;
  mobileNumber?: string;
  address?: string;
  password?: string;
  confirmPassword?: string;
  gender?: string;
  isSuperUser?: boolean;
  createdBy?: number;
  updatedBy?: number;
  createdAt?: Date;
  updatedAt?: Date;

  /**
   * Attributes Labels
   */
  static attributesLabels = {
    name: 'Name',
    email: 'Email',
    address: 'Address',
    mobileNumber: 'Mobile Number',
    password: 'Password',
    confirmPassword: 'Confirm Password',
  };

  /** 
   * Construstor
  */
  constructor() { }


  /**
   *
   * @param equalControlName
   */
  public equalTo?(equalControlName): ValidatorFn {
    return (
      control: AbstractControl
    ): {
        [key: string]: any;
      } => {
      if (!control['_parent']) return null;

      if (!control['_parent'].controls[equalControlName]) throw new TypeError('Form Control ' + equalControlName + ' does not exists.');

      let controlMatch = control['_parent'].controls[equalControlName];

      // cehecking the field is dirty
      if (controlMatch.dirty === true) {
        if (controlMatch.value == control.value) {
          controlMatch.setErrors(null);
          return null;
        } else {

          return { equalTo: true };
        }
      }

    };
  }

  /** 
   * Form Validation Rules
   * 
  */
  public validationRules() {
    return {
      name: new FormControl('', [<any>Validators.required,, Validators.maxLength(30)]),
      address: new FormControl('', [<any>Validators.required,, Validators.maxLength(30)]),
      mobileNumber: new FormControl('', [<any>Validators.required, Validators.minLength(6), Validators.maxLength(30)]),
      email: new FormControl('', [<any>Validators.required, Validators.email, Validators.maxLength(30)]),
      password: new FormControl('', [<any>Validators.required, Validators.minLength(6), Validators.maxLength(30), this.equalTo('confirmPassword')]),
      confirmPassword: new FormControl('', [<any>Validators.required, Validators.minLength(6), Validators.maxLength(30), this.equalTo('password')]),
    };
  }
  /** 
   * Forgot Password Validation Rules
   * 
  */
  public FPValidationRules() {
    return {
      username: new FormControl('', [<any>Validators.required, Validators.email, Validators.maxLength(30)]),
    };
  }
}
