import { FormControl, Validators, ValidatorFn } from '@angular/forms';

export class SizeModel {

  size: string;
  // description: string;

  /**
   * Attributes Labels
   */
  static attributesLabels = {
    size: 'Size',
    // description: 'Description',
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
      size: new FormControl('', [<any>Validators.required, Validators.maxLength(30)]),
      // description: new FormControl('', [<any>Validators.required, Validators.maxLength(30)]),
    };
  }

}
