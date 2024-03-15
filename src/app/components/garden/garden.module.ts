import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoRootModule } from '../../transloco-root.module';
import { GardenRoutingModule } from './garden-routing.module';
import { GardenComponent } from './garden.component';


@NgModule({
  declarations: [GardenComponent],
  imports: [CommonModule, GardenRoutingModule, TranslocoRootModule],
  exports: [GardenComponent],
})
export default class GardenModule {}
