import { FormControl, Validators, ValidatorFn } from '@angular/forms';

export class ProductModel {

  name: string;
  description: string;
  category: string;
  price: number;
  available: number;
  sold: number;
  type: string;

  /**
   * Attributes Labels
   */
  static attributesLabels = {
  name: 'Name',
  description: 'Description',
  category: 'Category',
  price: 'Price',
  available: 'Available',
  sold: 'Sold',
  type: 'Type',
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
      // name: new FormControl('', [<any>Validators.required, Validators.maxLength(30)]),
      price: new FormControl('', [<any>Validators.required, Validators.maxLength(30)]),
      available: new FormControl('', [<any>Validators.required, Validators.maxLength(30)]),
      sold: new FormControl('', [<any>Validators.required, Validators.maxLength(30)]),
      category: new FormControl('', [<any>Validators.required, Validators.maxLength(30)]),
      // type: new FormControl('', [<any>Validators.required, Validators.maxLength(30)]),
      description: new FormControl('', [<any>Validators.required, Validators.minLength(6), Validators.maxLength(30)]),
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
