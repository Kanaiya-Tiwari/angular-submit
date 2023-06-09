import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-map-sidebar',
  templateUrl: './map-sidebar.component.html',
  styleUrls: ['./map-sidebar.component.css']
})
export class MapSidebarComponent implements OnInit {
  @Input() panel!: any;
  @Output() mapClose= new EventEmitter<boolean>();
  center!: google.maps.LatLngLiteral;
  mapPosition!: google.maps.LatLngLiteral;
  markerInfo: boolean=false;
  ngOnInit() {
    this.center ={
      lat: this.panel['Lat'],
      lng: this.panel['Lng']
  };
  this.mapPosition = {
    lat: this.panel['Lat'],
    lng: this.panel['Lng']
  };
  }   
  
  display: any;
  zoom = 4;
  moveMap(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.center = (event.latLng.toJSON());
  }
  move(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.display = event.latLng.toJSON();
  }
  closeSidebar() {
    this.mapClose.emit(false)
  }
  showMarkerInfo(event: any) {
    this.markerInfo = !this.markerInfo;
  }
}
