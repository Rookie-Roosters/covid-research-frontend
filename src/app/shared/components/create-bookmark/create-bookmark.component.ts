import { Component, OnInit } from '@angular/core';
import { BookmarkDto } from '@core/dto/bookmark.dto';
import { BookmarkService } from '@core/services/bookmark.service';

@Component({
  selector: 'app-create-bookmark',
  templateUrl: './create-bookmark.component.html',
  styleUrls: ['./create-bookmark.component.css']
})
export class CreateBookmarkComponent implements OnInit {
  error = ''
  bookmark = new BookmarkDto();
  
  constructor(private bookmarkService: BookmarkService) {}

  ngOnInit(): void {
  }

  onSubmit() {
    this.bookmarkService.createBookmark(this.bookmark).subscribe({
      next: (v: any) => {
        console.log(v)
      },
      error: (e: any) => {this.error = e.error.messages },
      complete:() => {}
    })
  }
}
