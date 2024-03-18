import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoRootModule } from '../../transloco-root.module';
import { DesignGardenRoutingModule } from './design-garden-routing.module';
import { DesignGardenComponent } from './design-garden.component';


@NgModule({
  declarations: [DesignGardenComponent],
  imports: [CommonModule, DesignGardenRoutingModule, TranslocoRootModule],
  exports: [DesignGardenComponent],
})
export default class DesignGardenModule {}
