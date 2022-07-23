import { Component, Input, OnInit } from '@angular/core';
import { NewsItem } from '@covid-news/models';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css'],
})
export class NewsCardComponent implements OnInit {
  @Input() newsItem!: NewsItem;

  constructor() {}

  ngOnInit(): void {}

  onNavigate(url: string) {
    window.open(url, '_blank');
  }
}
