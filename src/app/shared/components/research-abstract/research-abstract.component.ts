import { Component, OnInit, Input } from '@angular/core';
import { Research } from '@core/models/research.model';

@Component({
  selector: 'app-research-abstract',
  templateUrl: './research-abstract.component.html',
  styleUrls: ['./research-abstract.component.css']
})
export class ResearchAbstractComponent implements OnInit {

  @Input() research = new Research();
  constructor() {

   }

  ngOnInit(): void {
    console.log(this.research)
  }

}
