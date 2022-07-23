import { Component, OnInit } from '@angular/core';
import { NewsItem } from '@covid-news/models';
import { NewsService } from '@covid-news/services';

@Component({
  selector: 'app-news-section',
  templateUrl: './news-section.component.html',
  styleUrls: ['./news-section.component.css'],
})
export class NewsSectionComponent implements OnInit {
  newsList: NewsItem[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getLatestNews().subscribe((news) => {
      console.table(news.value);
      return (this.newsList = news.value);
    });
  }
}
