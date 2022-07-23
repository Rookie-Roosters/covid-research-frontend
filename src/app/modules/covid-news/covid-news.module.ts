import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsCardComponent } from './components';
import { NewsService } from './services';
import { NewsSectionComponent } from './components/news-section/news-section.component';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [NewsCardComponent, NewsSectionComponent],
  imports: [CommonModule, CardModule],
  providers: [NewsService],
  exports: [NewsSectionComponent],
})
export class CovidNewsModule {}
