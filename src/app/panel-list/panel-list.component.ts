import { Component } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-panel-list',
  templateUrl: './panel-list.component.html',
  styleUrls: ['./panel-list.component.css']
})
export class PanelListComponent {
  panels!: any[];
  selectedPanel!: any;
  sidebarOpen:boolean=false;
  sidebarOpenMap:boolean=false;
  constructor(private apiService: ApiService) { }

  ngOnInit() :void{
    this.apiService.getlist().subscribe((response:any) => {
      if (response.statusCode === 200 && response.status === 'success') {
        this.panels = response.result;
      console.log(this.panels);
      }
    });
  }

  close(event:any)
    {
      this.sidebarOpen=event;
    }
    closeMap(event:any){
      this.sidebarOpenMap=event;
    }

  openSidebar(panel: any) {
    this.selectedPanel = panel;
    this.sidebarOpen=true;
  }
  openMapSidebar(panel: any) {
    this.selectedPanel = panel;
    this.sidebarOpenMap=true;
  }
}
