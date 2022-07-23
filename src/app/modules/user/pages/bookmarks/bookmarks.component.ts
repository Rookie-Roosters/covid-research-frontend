import { Component, OnInit } from '@angular/core';
import { BookmarkService } from '@core/services/bookmark.service';
@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {
  toggleCreate = false;
  bookmarks = [];
  constructor(private bookmarkService: BookmarkService) {}

  ngOnInit(): void {
    this.bookmarkService.findAll().subscribe({
      next: (v: any) => {
        console.log(v)
        this.bookmarks =v.data!;
      },
      error: (e: any) => {console.log(e)},
    })
  }
  onCreate(): void {
    this.toggleCreate = !this.toggleCreate;
  }
}