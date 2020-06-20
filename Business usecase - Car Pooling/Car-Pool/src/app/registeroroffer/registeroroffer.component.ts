import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registeroroffer',
  templateUrl: './registeroroffer.component.html',
  styleUrls: ['./registeroroffer.component.css']
})
export class RegisterorofferComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onCabRegister() {
    this.router.navigate(['/cabregister']);
    
  }
  onCabdetails() {
    this.router.navigate(['/cabdetails']);
    
  }
}
