import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarkComponent } from './components/bookmark/bookmark.component';
import { ResearchAbstractComponent } from './components/research-abstract/research-abstract.component';
import { CreateBookmarkComponent } from './components/create-bookmark/create-bookmark.component';
import { FormsModule } from '@angular/forms';
import { ColorPickerModule } from 'primeng/colorpicker';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [BookmarkComponent, ResearchAbstractComponent, CreateBookmarkComponent],
  imports: [ FormsModule, ColorPickerModule, BrowserModule, BrowserAnimationsModule,
    CommonModule, ButtonModule,
  ],
  exports: [CommonModule, ButtonModule, BookmarkComponent, ResearchAbstractComponent, CreateBookmarkComponent]
})
export class SharedModule { }
