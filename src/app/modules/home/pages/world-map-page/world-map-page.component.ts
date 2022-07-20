import { Component, OnInit } from '@angular/core';
//import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-world-map-page',
  templateUrl: './world-map-page.component.html',
  styleUrls: ['./world-map-page.component.css'],
})
export class WorldMapPageComponent implements OnInit {
  // chart = new Chart({
  //   chart: {
  //     type: 'line',
  //   },
  //   title: {
  //     text: 'Linechart',
  //   },
  //   credits: {
  //     enabled: false,
  //   },
  //   series: [
  //     {
  //       name: 'Line 1',
  //       data: [1, 2, 3],
  //     },
  //   ],
  // });
  // // add point to chart serie
  add() {
    //this.chart.addPoint(Math.floor(Math.random() * 10));
  }
  ngOnInit(): void {}
}
