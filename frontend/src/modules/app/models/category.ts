import { FormControl, Validators, ValidatorFn } from '@angular/forms';

export class CategoryModel {

  category: string;
  description: string;

  /**
   * Attributes Labels
   */
  static attributesLabels = {
    category: 'Category',
    description: 'Description',
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
      category: new FormControl('', [<any>Validators.required, Validators.maxLength(30)]),
      description: new FormControl('', [<any>Validators.required, Validators.maxLength(30)]),
    };
  }

}
