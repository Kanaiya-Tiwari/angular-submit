import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapSidebarComponent } from './map-sidebar.component';

describe('MapSidebarComponent', () => {
  let component: MapSidebarComponent;
  let fixture: ComponentFixture<MapSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapSidebarComponent]
    });
    fixture = TestBed.createComponent(MapSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
