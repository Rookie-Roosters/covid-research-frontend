import { Component, OnInit } from '@angular/core';
import { StatsByCountry } from '@core/models/stats-by-country.model';
import { ChartService } from '@core/services/chart.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  finished = false
  data = []
  donutData: any
  barData1: any
  barData2: any
  
  query = 'countryIsoCodes=MEX&countryIsoCodes=USA'
  constructor(private chartService: ChartService) { }

  ngOnInit(): void {
    this.chartService.getStats(this.query).subscribe({
      next: (v: any) => {
        this.data = v.data;
        console.log(this.data)
        this.createDatasets();
      },
      error: (e: any) => {console.log(e) },
    })
  }

  createDatasets() {
    const mexico: StatsByCountry = this.data[0];
    const usa: StatsByCountry = this.data[1];
    this.donutData = {
      labels: ['Mexico', 'USA'],
      datasets: {
        data:[mexico.statistics.count, usa.statistics.count],
        backgroundColor: ['#66BB6A', '#42A5F5']
      }
    }
    this.barData1 = {
      labels: ['With results', 'Without results'],
      datasets: [{
        label: 'Mexico',
        backgroundColor: '#66BB6A',
        data:[mexico.statistics.result.with, mexico.statistics.result.without]
      },
      {
        label: 'USA',
        backgroundColor: '#42A5F5',
        data:[usa.statistics.result.with, usa.statistics.result.without]
      }]
    }
    this.barData2 = {
      labels: ['total cases', 'total deaths', 'total vaccinations'],
      datasets: [{
        label: 'Mexico',
        backgroundColor: '#66BB6A',
        data:[mexico.covidInfo.total_cases, mexico.covidInfo.total_deaths, mexico.covidInfo.total_vaccinations,]
      },
      {
        label: 'USA',
        backgroundColor: '#42A5F5',
        data:[usa.covidInfo.total_cases, usa.covidInfo.total_deaths, usa.covidInfo.total_vaccinations,]
      }]      
    }

    this.finished=true;
  }

}
