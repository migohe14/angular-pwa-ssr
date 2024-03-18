import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoRootModule } from '../../transloco-root.module';
import { poolRoutingModule } from './pool-routing.module';
import { poolComponent } from './pool.component';


@NgModule({
  declarations: [poolComponent],
  imports: [CommonModule, poolRoutingModule, TranslocoRootModule],
  exports: [poolComponent],
})
export default class poolModule {}
