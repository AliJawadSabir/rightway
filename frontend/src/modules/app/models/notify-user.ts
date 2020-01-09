import { FormControl, Validators, ValidatorFn, FormArray, AbstractControl } from '@angular/forms';
// import { MinLengthValidator } from '@angular/forms/src/directives/validators';

export class NotifyUserModel {
  id?: number;
  email: string;

  static attributesLabels = {
    name: 'Get Notify by Email',

  };

  constructor() { }

  // ,[<any>Validators.pattern('^(http:\/\/|https:\/\/)?(www.)?([a-zA-Z0-9]+).[a-zA-Z0-9]*.[a-z]{3}.?([a-z]+)?$')]
  /**
   * Form Validation Rules
   */
  public validationRules?() {
    return {
    //   email: new FormControl('', [<any>Validators.required, Validators.maxLength(30)]),
      email: ['', [<any>Validators.required, Validators.email]],
    //   establishedScince: ['', [this.equalTo('establishedScince')]],
    //   affiliations: new FormArray([]),
    };
  }
}
