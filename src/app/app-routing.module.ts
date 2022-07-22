import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInPageComponent, SignUpPageComponent } from '@authentication/pages';
import { WorldMapPageComponent } from '@home/pages';
import { ResearchDetailPageComponent } from '@research/pages/research-detail-page/research-detail-page.component';

const routes: Routes = [
  { path: '', component: WorldMapPageComponent },
  { path: 'login', component: LogInPageComponent },
  { path: 'signup', component: SignUpPageComponent },
  { path: 'research/:id', component: ResearchDetailPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
