import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup, FormControl} from '@angular/forms';



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
    firstName : ['', [Validators.required, Validators.minLength(3), Validators.maxLength(6)]],
    lastName : ['', [Validators.required, Validators.minLength(3), Validators.maxLength(6)]],
    gender : ['',[Validators.required]],
    cityName: ['',[Validators.required]],
    vehicle: ['', [Validators.required]]
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

get firstName() {
  return this.registrationProfile.get('firstName');
}

get lastName() {
  return this.registrationProfile.get('lastName');
}

get gender() {
  return this.registrationProfile.get('gender');
}

get vehicle() {
  return this.registrationProfile.get('vehicle');
}
}