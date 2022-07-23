import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './pages/user/profile/user.component';
import { UserPageComponent } from './pages/user-page/user-page.component';



@NgModule({
  declarations: [
    UserComponent,
    UserPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
