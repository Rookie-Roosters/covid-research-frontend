import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorldMapSectionComponent } from './components';
import { GoogleMapsModule } from '@angular/google-maps';
import { IndoorDataService } from './services';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [WorldMapSectionComponent],
  imports: [CommonModule, GoogleMapsModule, ToggleButtonModule, FormsModule],
  exports: [WorldMapSectionComponent],
  providers: [IndoorDataService],
})
export class WorldMapModule {}
