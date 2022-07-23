import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldMapSectionComponent } from './world-map-section.component';

describe('WorldMapSectionComponent', () => {
  let component: WorldMapSectionComponent;
  let fixture: ComponentFixture<WorldMapSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorldMapSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorldMapSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
