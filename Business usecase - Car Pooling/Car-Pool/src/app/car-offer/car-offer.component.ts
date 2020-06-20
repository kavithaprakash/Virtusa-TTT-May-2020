import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'app-car-offer',
  templateUrl: './car-offer.component.html',
  styleUrls: ['./car-offer.component.css']
})
export class CarOfferComponent implements OnInit {

  @ViewChild('gmap', { static: true }) gmapElement: any;
  map: google.maps.Map;

  ngOnInit() {
    var mapProp = {
      center: new google.maps.LatLng(18.5793, 73.8143),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }

}
