import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Research } from '@core/models/research.model';

@Injectable({
  providedIn: 'root'
})
export class ResearchService {
  //add the right server address
  BASE_URL: string = 'http://localhost:3000'  

  constructor(private http: HttpClient) { }

  getResearch(id: string){
    return this.http.get<Research>(`${this.BASE_URL}/researches/${id}`);
  }
}
