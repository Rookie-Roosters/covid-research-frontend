import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StatsByCountry } from '@core/models/stats-by-country.model';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  BASE_URL: string = 'http://localhost:3000'  

  constructor(private http: HttpClient) { }

  getStats(query: string){
    return this.http.get<StatsByCountry>(`${this.BASE_URL}/researches/stats-by-country?${query}`);
  }
}
