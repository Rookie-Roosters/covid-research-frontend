import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button'; //accordion and accordion tab
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorldMapComponent } from './components/world-map/world-map.component';
import { CovidChartsComponent } from './components/covid-charts/covid-charts.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './components/signup/signup.component';
import { NameValidatorDirective } from './shared/valid-name.directive';
import { PasswordValidatorDirective } from './shared/valid-password.directive';
import { ConfirmPasswordDirective } from './shared/confirm-password.directive';

@NgModule({
  declarations: [AppComponent, WorldMapComponent, CovidChartsComponent, LoginComponent, SignupComponent, NameValidatorDirective, PasswordValidatorDirective, ConfirmPasswordDirective],
  imports: [GoogleChartsModule,BrowserModule, AppRoutingModule, ButtonModule, FormsModule, InputTextModule, PasswordModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
