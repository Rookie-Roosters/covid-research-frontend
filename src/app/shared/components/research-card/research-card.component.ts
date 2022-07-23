import { Component, Input, OnInit } from '@angular/core';
import { ResearchCardItem } from '@core/models';

@Component({
  selector: 'app-research-card',
  templateUrl: './research-card.component.html',
  styleUrls: ['./research-card.component.css'],
})
export class ResearchCardComponent implements OnInit {
  @Input() researchCardItem!: ResearchCardItem;

  constructor() {}

  ngOnInit(): void {}
}
