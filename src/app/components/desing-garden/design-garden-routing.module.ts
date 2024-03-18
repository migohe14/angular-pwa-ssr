import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DesignGardenComponent } from './design-garden.component';

const routes: Routes = [{ path: '', component: DesignGardenComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignGardenRoutingModule { }
