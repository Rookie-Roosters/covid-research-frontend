import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-researches-list',
  templateUrl: './researches-list.component.html',
  styleUrls: ['./researches-list.component.css'],
})
export class ResearchesListComponent implements OnInit {
  @Input() isVisible: boolean;

  constructor() {
    this.isVisible = false;
  }

  ngOnInit(): void {}
}
