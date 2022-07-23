import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '@core/components';
import { NAVIGATION_ROUTES } from '@core/constants/navigation-routes.constant';
import { HomePageComponent } from '@home/pages';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('@home/home.module').then((m) => m.HomeModule),
  },
  {
    path: NAVIGATION_ROUTES.AUTHENTICATION.BASE_PATH,
    loadChildren: () =>
      import('@authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
  { path: '**', component: PageNotFoundComponent },

  // {
  //   path: 'home',
  //   loadChildren: () => import('@home/home.module').then((m) => m.HomeModule),
  // },
  // {
  //   path: 'authentication',
  //   loadChildren: () =>
  //     import('@authentication/authentication.module').then(
  //       (m) => m.AuthenticationModule
  //     ),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
