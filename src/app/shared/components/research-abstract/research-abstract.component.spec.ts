import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchAbstractComponent } from './research-abstract.component';

describe('ResearchAbstractComponent', () => {
  let component: ResearchAbstractComponent;
  let fixture: ComponentFixture<ResearchAbstractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchAbstractComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearchAbstractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
