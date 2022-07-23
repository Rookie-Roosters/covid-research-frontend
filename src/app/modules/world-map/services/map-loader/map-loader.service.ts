import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@config/environments/environment';
import { CountriesStatsResponse } from '@world-map/models';

@Injectable()
export class IndoorDataService {
  // location of GeoJSON file in server
  private _url: string =
    'https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json';

  constructor(private http: HttpClient) {}

  getCountriesStats() {
    return this.http.get<CountriesStatsResponse>(
      `${environment.apiServer}/researches/world-stats`
    );
  }

  // fetch the file and parse the result as JSON
  getGeoJson() {
    return this.http.get(this._url);
  }
}
