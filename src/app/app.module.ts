import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RootComponent } from '@core/components';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from '@core/core.module';

@NgModule({
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, CoreModule],
  bootstrap: [RootComponent],
  declarations: [],
})
export class AppModule {}
