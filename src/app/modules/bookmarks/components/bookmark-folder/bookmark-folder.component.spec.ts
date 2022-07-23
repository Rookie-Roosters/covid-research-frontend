import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkFolderComponent } from './bookmark-folder.component';

describe('BookmarkFolderComponent', () => {
  let component: BookmarkFolderComponent;
  let fixture: ComponentFixture<BookmarkFolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmarkFolderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookmarkFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
