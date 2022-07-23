import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarkFolderComponent } from './components/bookmark-folder/bookmark-folder.component';
import { BookmarkPanelComponent } from './components/bookmark-panel/bookmark-panel.component';
import { SidebarModule } from 'primeng/sidebar';

@NgModule({
  declarations: [BookmarkFolderComponent, BookmarkPanelComponent],
  imports: [CommonModule, SidebarModule],
  exports: [BookmarkPanelComponent],
})
export class BookmarksModule {}
