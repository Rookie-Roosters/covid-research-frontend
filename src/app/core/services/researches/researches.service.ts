import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@config/environments/environment';
import { ResearchesCardsResponse } from '@core/models';

@Injectable({
  providedIn: 'root',
})
export class ResearchesService {
  constructor(private httpClient: HttpClient) {}

  getResearchesCardsFromCountries(isoCodes?: string[]) {
    return this.httpClient.get<ResearchesCardsResponse>(
      `${environment.apiServer}/search`
    );
  }
}
