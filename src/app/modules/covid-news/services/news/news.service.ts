import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@config/environments/environment';
import { NewsResponse } from '@covid-news/models';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class NewsService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': environment.newsApiKey,
    }),
  };

  constructor(private http: HttpClient) {}

  getLatestNews() {
    return this.http.get<NewsResponse>(
      `${environment.newsApiEndpoint}?q=covid`,
      this.httpOptions
    );
  }
}
