import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { worldMapOptions } from '@world-map/constants';
import { CountriesStatsResponse, CountryStats } from '@world-map/models';
import { IndoorDataService } from '@world-map/services';
import { lastValueFrom } from 'rxjs';
declare var Microsoft: any;

@Component({
  selector: 'app-world-map-section',
  templateUrl: './world-map-section.component.html',
  styleUrls: ['./world-map-section.component.css'],
})
export class WorldMapSectionComponent implements OnInit {
  options = worldMapOptions;

  @ViewChild(GoogleMap, { static: false }) map!: GoogleMap;
  countries: CountryStats[] = [];

  constructor(private indoor: IndoorDataService) {}

  async fetchApis() {
    const countriesRes = await lastValueFrom(this.indoor.getCountriesStats());
    const geoJson = await lastValueFrom(this.indoor.getGeoJson());
    this.countries = countriesRes.data;
    this.map.data.addGeoJson(geoJson);
    this.updateStats((stat) => stat.total_cases ?? 0);
  }

  ngOnInit(): void {
    this.fetchApis();
  }

  updateStats(callback: (stat: CountryStats) => number, topCap = 10000000) {
    this.map.data.setStyle((feature) => {
      const iso = feature.getId();
      const stats = this.countries.find((country) => country.iso_code == iso);
      const value = stats ? callback(stats) : 0;
      return {
        fillColor: '#FF5757',
        fillOpacity: value / topCap,
        strokeColor: '#f5f5f5',
        strokeWeight: 1,
        zIndex: 1,
      };
    });
  }
}
