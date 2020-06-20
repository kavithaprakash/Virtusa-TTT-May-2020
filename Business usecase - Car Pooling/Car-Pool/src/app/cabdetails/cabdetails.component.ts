import { Component, OnInit } from '@angular/core';
import {Cab} from '../Cab';
import { Router, ActivatedRoute } from '@angular/router';
import { CabregisterService } from '../cabregister.service';
import { Observable } from "rxjs";
import swal from 'sweetalert2';

@Component({
  selector: 'app-cabdetails',
  templateUrl: './cabdetails.component.html',
  styleUrls: ['./cabdetails.component.css']
})
export class CabdetailsComponent implements OnInit {

  cab: Observable<Cab[]>;
  tripstatus:String='x';
  constructor(private cabService: CabregisterService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.cab= this.cabService.getEmployeesList();
  }
  requestride(x:any)
  {
    console.log(x);
    
//this.tripstatus='requested';
this.cab=this.cabService.requestCab(x);

swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'your  request has been sent',
  showConfirmButton: true,
  timer: 1500
});


  }

}
