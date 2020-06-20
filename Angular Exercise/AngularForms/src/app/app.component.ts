import { Component } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularForms';
  date=new Date().toLocaleString();
  countryList: Array<any> = [
    { name: 'India', states: ['Tamil Nadu', 'Kerala', 'Karnataka','Madhya pradesh','Gujarat'] },
    { name: 'America', states: ['California','Texas','Florida','Arizona','pennsylvania'] },
    { name: 'Germany', states: ['Bavaria', 'Hesse'] },
    
  ];
  states: Array<any>;
  changeCountry(count) {
    this.states = this.countryList.find(con => con.name == count).states;
  }
  
  form: FormGroup = new FormGroup({});
  
  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      mobileNumber: ['', [Validators.required, Validators.pattern("[0-9]{10}$")]],
      name: ['', [Validators.required, Validators.pattern("^[a-zA-Z ]*$")]]
    })
  }
    
  get f(){
    return this.form.controls;
  }
   
  submit(){
    console.log(this.form.value);
  }
}
