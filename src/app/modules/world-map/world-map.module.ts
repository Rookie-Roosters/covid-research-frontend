import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorldMapSectionComponent } from './components';
import { GoogleMapsModule } from '@angular/google-maps';
import { IndoorDataService } from './services';

@NgModule({
  declarations: [WorldMapSectionComponent],
  imports: [CommonModule, GoogleMapsModule],
  exports: [WorldMapSectionComponent],
  providers: [IndoorDataService],
})
export class WorldMapModule {}
