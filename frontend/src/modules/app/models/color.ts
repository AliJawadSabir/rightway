import { FormControl, Validators, ValidatorFn } from '@angular/forms';

export class ColorModel {

  color: string;
  text: string;
  description: string;

  /**
   * Attributes Labels
   */
  static attributesLabels = {
    color: 'Color',
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
      color: new FormControl('', [<any>Validators.required, Validators.maxLength(30)]),
      description: new FormControl('', [<any>Validators.required, Validators.maxLength(30)]),
    };
  }

}
