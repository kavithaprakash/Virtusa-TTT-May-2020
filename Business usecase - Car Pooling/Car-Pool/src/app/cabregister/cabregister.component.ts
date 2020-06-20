import { Component, OnInit } from '@angular/core';
import {Cab} from '../Cab';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import {FormControl} from '@angular/forms';
import { CabregisterService } from '../cabregister.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
@Component({
  selector: 'app-cabregister',
  templateUrl: './cabregister.component.html',
  styleUrls: ['./cabregister.component.css']
})
export class CabregisterComponent implements OnInit {
  cab: Cab = new Cab();

 
  registerForm: FormGroup;
  constructor(private cabService:CabregisterService,
    private router: Router,private formBuilder: FormBuilder) { }

  ngOnInit() {
  
  }
  save() {
    this.cab.booked="1";
    this.cab.amountToPay="0";
    if(this.cab.source=="Thambaram"&& this.cab.destination=="Guindy")
    {
      this.cab.amount="400";
         }
         if(this.cab.source=="Avadi"&& this.cab.destination=="Thambaram")
         {
           this.cab.amount="1400";
              }
              if(this.cab.source=="Avadi"&& this.cab.destination=="Guindy")
              {
                this.cab.amount="500";
                   }
    this.cabService.createEmployee(this.cab)
      .subscribe(data => console.log(data), error => console.log(error));
    this.cab = new Cab();
   
  }
  onSubmit()
  {
    this.save(); 
    this.gotoList();
  }
  gotoList() {
    swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'your cab details have been registered',
      showConfirmButton: true,
      timer: 1500
    });
    this.router.navigate(['']);
  }
}
