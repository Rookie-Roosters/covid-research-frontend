import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthenticationModule } from '@authentication/authentication.module';
import { RootComponent } from '@core/components';
import { HomeModule } from '@home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ResearchModule } from '@research/research.module';
import { AuthGuard } from '@core/guards/auth.guard';
import { UserModule } from '@user/user.module';
import { ChartModule } from 'primeng/chart';
import { DashboardModule } from './modules/dashboard/dashboard.module';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthenticationModule,
    HomeModule,
    ResearchModule,
    UserModule,
    DashboardModule,
    ChartModule,
  ],
  providers: [AuthGuard],
  declarations: [RootComponent],
  bootstrap: [RootComponent],
})
export class AppModule {}
