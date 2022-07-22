import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './pages/profile/profile.component';
import { UpdateUserComponent } from './pages/update-user/update-user.component';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { BookmarksComponent } from './pages/bookmarks/bookmarks.component';

@NgModule({
  declarations: [
    ProfileComponent,
    UpdateUserComponent,
    BookmarksComponent,
  ],
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
export class UserModule { }
