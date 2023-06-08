import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PanelDetailsComponent } from './panel-details/panel-details.component';
import { AppComponent } from './app.component';
import { PanelListComponent } from './panel-list/panel-list.component';
import { MapSidebarComponent } from './map-sidebar/map-sidebar.component';
import { ApiService } from './api.service';
import { GoogleMapsModule } from '@angular/google-maps'

@NgModule({
  declarations: [
    AppComponent,
    PanelListComponent,
    MapSidebarComponent,
    PanelDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    GoogleMapsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
