import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInPageComponent, SignUpPageComponent } from '@authentication/pages';
import { AuthGuard } from '@core/guards/auth.guard';
import { WorldMapPageComponent } from '@home/pages';
import { ResearchDetailPageComponent } from '@research/pages/research-detail-page/research-detail-page.component';
import { BookmarksComponent, ProfileComponent, UpdateUserComponent } from '@user/pages';

const routes: Routes = [
  { path: '', component: WorldMapPageComponent },
  { path: 'login', component: LogInPageComponent },
  { path: 'signup', component: SignUpPageComponent },
  { path: 'research/:id', component: ResearchDetailPageComponent },
  { path: 'user', component: ProfileComponent, canActivate: [ AuthGuard ]},
  { path: 'user/update', component: UpdateUserComponent, canActivate: [ AuthGuard ]},
  { path: 'user/bookmarks', component: BookmarksComponent, canActivate: [ AuthGuard ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
