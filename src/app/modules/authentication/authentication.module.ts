import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInPageComponent } from './pages/log-in-page/log-in-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { NameValidatorDirective } from '@shared/directives';
import { ConfirmPasswordDirective, PasswordValidatorDirective } from '@shared/directives';


@NgModule({
  declarations: [LogInPageComponent, SignUpPageComponent, NameValidatorDirective, PasswordValidatorDirective, ConfirmPasswordDirective],
  imports: [
    CommonModule,
    ButtonModule,
    MessageModule,
    MessagesModule,
    FormsModule,
    InputTextModule,
    PasswordModule,
  ],
})
export class AuthenticationModule {}
