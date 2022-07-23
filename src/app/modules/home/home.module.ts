import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages';
import { HomeRoutingModule } from './home-routing.module';
import { NavbarComponent } from '@shared/components';
import { ButtonModule } from 'primeng/button';
import { WorldMapModule } from '@world-map/world-map.module';
import { CovidNewsModule } from '@covid-news/covid-news.module';
import { LatestResearchesModule } from '../latest-researches/latest-researches.module';
import { ResearchesListComponent } from './components/researches-list/researches-list.component';
import { SidebarModule } from 'primeng/sidebar';

@NgModule({
  declarations: [HomePageComponent, NavbarComponent, ResearchesListComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ButtonModule,
    WorldMapModule,
    CovidNewsModule,
    LatestResearchesModule,
    SidebarModule,
  ],
})
export class HomeModule {}
