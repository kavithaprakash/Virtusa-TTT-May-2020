import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  id: number;
  employee: Employee = new Employee();
  submitted = false;
  password:string;
result: string;
http: HttpClient;
d:string;
fname:string;
validuser:boolean =false; 


  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: EmployeeService)
    {  this.id = this.route.snapshot.params.id;
     }

  ngOnInit() {
  //  this.id = this.route.snapshot.params.id;
  }



  check() {
   

  
   // console.log(this.route.snapshot.params[this.id]);
   this.employeeService.checkEmployee(this.id,this.password)
     .subscribe(data => {
      
           if(data=='yes')
           this.validuser=true;
           else
           this.validuser=false;
           console.log(this.validuser);
           if(this.validuser)
           { console.log(this.validuser);
             this.router.navigate(['/registeroroffer']);
           }
             else
             {
              swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'pls enter valid username and password',
                showConfirmButton: true,
                timer: 1500
              });
             this.router.navigate(['/login']);
             }
           this.fname=this.employee.firstName

     }, error => console.log(error));
     
     console.log(this.validuser);
  }

  onSubmit(f:NgForm) {
    this.submitted = true;
    this.id=f.value.id;
    this.password=f.value.password;
    console.log(this.id);
    this.check();   
   
  }

 

}
