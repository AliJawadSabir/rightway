import { FormControl, Validators, ValidatorFn } from '@angular/forms';
import { CategoryModel } from './category';
import { ColorModel } from './color';
import { SizeModel } from './size';

export class ProductModel {

  name: string;
  url: string;
  description: string;
  categoryId: number;
  category: CategoryModel;
  code: string;
  colorId: number;
  color: ColorModel;
  sizeId: number;
  size: SizeModel;
  price: number;
  discount: number;
  available: number;
  sold: number;
  type: string;

  /**
   * Attributes Labels
   */
  static attributesLabels = {
  name: 'Name',
  description: 'Description',
  categoryId: 'Category',
  sizeId: 'Size',
  colorId: 'Color',
  code: 'Product Code',
  price: 'Price',
  discount: 'Discount',
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
      name: new FormControl('', [<any>Validators.required, Validators.maxLength(30)]),
      price: new FormControl('', [<any>Validators.required, Validators.maxLength(30)]),
      available: new FormControl('', [<any>Validators.required, Validators.maxLength(30)]),
      // sold: new FormControl('', [<any>Validators.required, Validators.maxLength(30)]),
      categoryId: new FormControl('', [<any>Validators.required, Validators.maxLength(30)]),
      sizeId: new FormControl('', [<any>Validators.required, Validators.maxLength(30)]),
      type: new FormControl('', []),
      description: new FormControl('', [<any>Validators.required, Validators.minLength(6), Validators.maxLength(30)]),
      code: new FormControl('', [<any>Validators.required, Validators.minLength(6), Validators.maxLength(8)]),
      colorId: new FormControl('', [<any>Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      discount: new FormControl('', [<any>Validators.required]),
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
