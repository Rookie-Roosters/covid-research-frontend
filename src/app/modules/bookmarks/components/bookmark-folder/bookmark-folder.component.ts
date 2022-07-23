import { Component, Input, OnInit } from '@angular/core';
import { Bookmark } from '@bookmarks/models';

@Component({
  selector: 'app-bookmark-folder',
  templateUrl: './bookmark-folder.component.html',
  styleUrls: ['./bookmark-folder.component.css'],
})
export class BookmarkFolderComponent implements OnInit {
  @Input() bookmark!: Bookmark;

  constructor() {}

  ngOnInit(): void {}
}
