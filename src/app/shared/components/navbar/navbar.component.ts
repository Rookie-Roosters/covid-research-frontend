import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Output() onBookmarkOpen = new EventEmitter();

  clickedBookmark() {
    this.onBookmarkOpen.emit();
  }

  ngOnInit(): void {}
}
