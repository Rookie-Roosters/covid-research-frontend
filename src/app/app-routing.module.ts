import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInPageComponent, SignUpPageComponent } from '@authentication/pages';
import { WorldMapPageComponent } from '@home/pages';

const routes: Routes = [
  { path: '', component: WorldMapPageComponent },
  { path: 'login', component: LogInPageComponent },
  { path: 'signup', component: SignUpPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
