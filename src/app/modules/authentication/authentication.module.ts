import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { NameValidatorDirective } from '@shared/directives';
import {
  ConfirmPasswordDirective,
  PasswordValidatorDirective,
} from '@shared/directives';
import { LogInComponent, SignUpComponent } from './components';
import { AuthenticationPageComponent } from './pages';
import { AuthenticationRoutingModule } from './authentication-routing.module';

@NgModule({
  declarations: [
    NameValidatorDirective,
    PasswordValidatorDirective,
    ConfirmPasswordDirective,
    LogInComponent,
    SignUpComponent,
    AuthenticationPageComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    MessageModule,
    MessagesModule,
    FormsModule,
    InputTextModule,
    PasswordModule,
    AuthenticationRoutingModule,
  ],
})
export class AuthenticationModule {}
