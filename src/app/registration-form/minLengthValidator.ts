import { AbstractControl } from '@angular/forms';


export function  minLengthValidator(control: AbstractControl): { [key: string]: boolean } | null {
        if (control.value.length < 8) {
          return { 'lengthValidation': true };
        }
        return null;
      }