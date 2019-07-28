import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray} from '@angular/forms';



@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  
  City: any = ['Florida', 'South Dakota', 'Tennessee', 'Michigan']

  

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  registrationProfile = this.fb.group({
    firstName : ['', Validators.required],
    gender : [''],
    cityName: [''],
    vehicle1: [''],
    
    aliases: this.fb.array([
      this.fb.control('', Validators.required)
    ]),

    qualifications: this.fb.array([
      this.fb.group({
        qualificationNumber: [''],
        exam: [''],
        board: [''],
        percentage: [''],
        yearOfPassing: ['']
      }),
    ])

  });

  onSubmit() {
    alert(JSON.stringify(this.registrationProfile.value))
}  

changeCity(e) {
  this.cityName.setValue(e.target.value, {
    onlySelf: true
  })
}

get cityName() {
  return this.registrationProfile.get('cityName');
}

get aliases() {
  return this.registrationProfile.get('aliases') as FormArray;
}

get qualifications() {
  return this.registrationProfile.get('qualifications') as FormArray;
}

addAlias() {
  this.aliases.push(this.fb.control('', Validators.required));
}

addQualifications() {
  this.qualifications.push(this.fb.group({
    qualificationNumber: [''],
    exam: [''],
    board: [''],
    percentage: [''],
    yearOfPassing: ['']
  }));
}

}
