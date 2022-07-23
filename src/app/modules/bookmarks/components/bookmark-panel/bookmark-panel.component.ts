import { Component, Input, OnInit } from '@angular/core';
import { Bookmark } from '@bookmarks/models';

@Component({
  selector: 'app-bookmark-panel',
  templateUrl: './bookmark-panel.component.html',
  styleUrls: ['./bookmark-panel.component.css'],
})
export class BookmarkPanelComponent implements OnInit {
  @Input() isVisible: boolean;

  bookmarks: Bookmark[] = [
    {
      color: '#33e863',
      hasUpdates: false,
      name: 'Pre-pandemic',
      totalResearches: 8,
    },
    {
      color: '#5658d6',
      hasUpdates: true,
      name: 'México',
      totalResearches: 10,
    },
    {
      color: '#db58c1',
      hasUpdates: true,
      name: 'Experimental',
      totalResearches: 14,
    },
    {
      color: '#f2bd35',
      hasUpdates: false,
      name: 'Later',
      totalResearches: 9,
    },
    {
      color: '#f24835',
      hasUpdates: false,
      name: 'Recents results',
      totalResearches: 4,
    },
  ];

  constructor() {
    this.isVisible = false;
  }

  ngOnInit(): void {}
}
