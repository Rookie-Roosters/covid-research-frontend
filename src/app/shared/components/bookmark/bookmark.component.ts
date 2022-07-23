import { Component, OnInit, Input } from '@angular/core';
import { Bookmark } from '@core/models/bookmark.model';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent implements OnInit {
  @Input() bookmark = new Bookmark();
  constructor() {

   }

  ngOnInit(): void {
    console.log(this.bookmark)
  }

}
