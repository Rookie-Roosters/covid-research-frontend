import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { FooterComponent, NavbarComponent } from './components';
import { ResearchCardComponent } from './components';

@NgModule({
  imports: [CommonModule, AvatarModule, ButtonModule],
  declarations: [NavbarComponent, ResearchCardComponent, FooterComponent],
  exports: [
    CommonModule,
    NavbarComponent,
    ResearchCardComponent,
    FooterComponent,
  ],
})
export class SharedModule {}
