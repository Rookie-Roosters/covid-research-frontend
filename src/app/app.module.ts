import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthenticationModule } from '@authentication/authentication.module';
import { RootComponent } from '@core/components';
import { HomeModule } from '@home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ResearchModule } from '@research/research.module';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthenticationModule,
    HomeModule,
    ResearchModule
  ],
  declarations: [RootComponent],
  bootstrap: [RootComponent],
})
export class AppModule {}
