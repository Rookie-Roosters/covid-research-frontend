import { Component, OnInit } from '@angular/core';
import { ResearchCardItem } from '@core/models';
import { ResearchesService } from '@core/services';

@Component({
  selector: 'app-researches-section',
  templateUrl: './researches-section.component.html',
  styleUrls: ['./researches-section.component.css'],
})
export class ResearchesSectionComponent implements OnInit {
  researchesCardsItems: ResearchCardItem[] = [];
  constructor(private researchesService: ResearchesService) {}

  ngOnInit(): void {
    this.researchesService
      .getResearchesCardsFromCountries()
      .subscribe((data) => {
        return (this.researchesCardsItems = data.data.items);
      });
  }
}
