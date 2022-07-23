import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages';
import { HomeRoutingModule } from './home-routing.module';
import { ButtonModule } from 'primeng/button';
import { WorldMapModule } from '@world-map/world-map.module';
import { CovidNewsModule } from '@covid-news/covid-news.module';
import { ResearchesListComponent } from './components/researches-list/researches-list.component';
import { SidebarModule } from 'primeng/sidebar';
import { StatisticsListComponent } from './components/statistics-list/statistics-list.component';
import { SharedModule } from '@shared/shared.module';
import { BookmarksModule } from '@bookmarks/bookmarks.module';
import { LatestResearchesModule } from '../latest-researches/latest-researches.module';

@NgModule({
  declarations: [
    HomePageComponent,
    ResearchesListComponent,
    StatisticsListComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ButtonModule,
    WorldMapModule,
    LatestResearchesModule,
    CovidNewsModule,
    SidebarModule,
    SharedModule,
    BookmarksModule,
  ],
})
export class HomeModule {}
