import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchesListComponent } from './researches-list.component';

describe('ResearchesListComponent', () => {
  let component: ResearchesListComponent;
  let fixture: ComponentFixture<ResearchesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearchesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
