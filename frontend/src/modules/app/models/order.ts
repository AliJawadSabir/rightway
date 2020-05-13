import { FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { ProductModel} from './index'
import { CustomerModel } from './customer';

export class OrderModel {

  id?: number;
  customerId?: number;
  customer?: CustomerModel;
  status?: string;
  amount?: number;
  trackId?: string;
  products?: ProductModel[];
  quantity?: number[];
  // instruction?: string;
  // confirmPassword?: string;
  // gender?: string;
  // isSuperUser?: boolean;
  createdBy?: number;
  updatedBy?: number;
  createdAt?: Date;
  updatedAt?: Date;

  /**
   * Attributes Labels
   */
  static attributesLabels = {
    fname: 'First Name',
    lname: 'Last Name',
    email: 'Email',
    address: 'Address',
    mobileNumber: 'Mobile Number',
    instruction: 'Instructions',
    // confirmPassword: 'Confirm Password',
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
      fname: new FormControl('', [<any>Validators.required, Validators.maxLength(30)]),
      lname: new FormControl('', [<any>Validators.required, Validators.maxLength(30)]),
      address: new FormControl('', [<any>Validators.required,Validators.minLength(10), Validators.maxLength(300)]),
      mobileNumber: new FormControl('', [<any>Validators.required, Validators.minLength(11), Validators.maxLength(30), Validators.pattern('([0-9]{4})-([0-9]{7})')]),
      email: new FormControl('', [<any>Validators.required, Validators.email, Validators.maxLength(300)]),
      instruction: new FormControl('',[]),
      // confirmPassword: new FormControl('', [<any>Validators.required, Validators.minLength(6), Validators.maxLength(30), this.equalTo('password')]),
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
