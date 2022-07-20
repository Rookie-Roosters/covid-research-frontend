import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthenticationModule } from '@authentication/authentication.module';
import { RootComponent } from '@core/components';
import { HomeModule } from '@home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthenticationModule,
    HomeModule,
  ],
  declarations: [RootComponent],
  bootstrap: [RootComponent],
})
export class AppModule {}
