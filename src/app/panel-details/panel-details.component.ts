import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'app-panel-details',
  templateUrl: './panel-details.component.html',
  styleUrls: ['./panel-details.component.css']
})
export class PanelDetailsComponent {
  @Input() panel: any;
@Output() data= new EventEmitter<boolean>();

  closeSidebar() {
  this.data.emit(false);
  }
}
