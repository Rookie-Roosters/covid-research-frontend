import { Component, OnInit } from '@angular/core';
import { ChartType } from 'angular-google-charts';

@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.css']
})
export class WorldMapComponent implements OnInit {
  type: ChartType = ChartType.GeoChart;
  data = [
    ['Germany', 200],
    ['United States', 300],
    ['Brazil', 400],
    ['Canada', 500],
    ['France', 600],
    ['RU', 700]
  ];
  columnNames = ['Country', 'Popularity']
  options = {
  };
  width = 1280;
  height = 600;

  ngOnInit(): void {
  }

}
