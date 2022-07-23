import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchDetailPageComponent } from './research-detail-page.component';

describe('ResearchDetailPageComponent', () => {
  let component: ResearchDetailPageComponent;
  let fixture: ComponentFixture<ResearchDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchDetailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearchDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
