import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResearchesSectionComponent } from './components';
import { ResearchCardComponent } from '@shared/components/research-card/research-card.component';

@NgModule({
  declarations: [ResearchesSectionComponent, ResearchCardComponent],
  imports: [CommonModule],
  exports: [ResearchesSectionComponent],
})
export class LatestResearchesModule {}
