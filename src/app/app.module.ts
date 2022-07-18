import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button'; //accordion and accordion tab
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorldMapComponent } from './components/world-map/world-map.component';
import { CovidChartsComponent } from './components/covid-charts/covid-charts.component';
import { GoogleChartsModule } from 'angular-google-charts';

@NgModule({
  declarations: [AppComponent, WorldMapComponent, CovidChartsComponent],
  imports: [GoogleChartsModule,BrowserModule, AppRoutingModule, ButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
