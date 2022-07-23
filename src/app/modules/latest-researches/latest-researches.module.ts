import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResearchesSectionComponent } from './components';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [ResearchesSectionComponent],
  imports: [CommonModule, SharedModule],
  exports: [ResearchesSectionComponent],
})
export class LatestResearchesModule {}
