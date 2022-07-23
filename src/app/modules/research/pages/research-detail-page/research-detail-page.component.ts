import { Component, OnInit } from '@angular/core';
import { Research } from '@core/models/research.model';
import { ResearchService } from '@research/service/research.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-research-detail-page',
  templateUrl: './research-detail-page.component.html',
  styleUrls: ['./research-detail-page.component.css']
})
export class ResearchDetailPageComponent implements OnInit {
  research = new Research();
  constructor(private researchService: ResearchService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = decodeURIComponent(this.route.snapshot.paramMap.get('id')!);
    console.log(id!)
    this.researchService.getResearch(id!).subscribe({
      next: (v: any) => {
        console.log(v)
        this.research = Object.assign(this.research, v.data)
        console.log(this.research)
      },
      error: (e: any) => {console.log(e) },
    })
  }

}
