import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { poolComponent } from './pool.component';

const routes: Routes = [{ path: '', component: poolComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class poolRoutingModule { }
