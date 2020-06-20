
import { Employee } from '../employee';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import swal from 'sweetalert2';
@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  employee: Employee = new Employee();
 // submitted = false;
  registerForm: FormGroup=new FormGroup({});
  constructor(private employeeService: EmployeeService,
    private router: Router,private formBuilder: FormBuilder) {
this.registerForm=formBuilder.group({
  firstName: ['', [Validators.required, Validators.pattern("^[a-zA-Z ]*$")]],
  lastName: ['', [Validators.required, Validators.pattern("^[a-zA-Z ]*$")]],
  password: ['', [Validators.required, Validators.pattern("^[0-9a-zA-Z]+$")]],
    phoneno: ['', [Validators.required, Validators.pattern("[0-9]{10}$")]],
    emailId: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]]
})

     }

     get f(){
      return this.registerForm.controls;
    }
  
  ngOnInit() {
  
  }

  newEmployee(): void {
 //   this.submitted = false;
    this.employee = new Employee();
  }

  save() {
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Employee();
    this.gotoList();
  }

  onSubmit() {
    console.log(this.registerForm.value);
 //   this.submitted = true;
    this.save();    
  }
  gotoList() {
    swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'your  details have been registered',
      showConfirmButton: true,
      timer: 1500
    });
    this.router.navigate(['/registeroroffer']);
  }

}
