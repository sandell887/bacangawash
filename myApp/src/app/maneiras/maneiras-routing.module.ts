import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManeirasPage } from './maneiras.page';

const routes: Routes = [
  {
    path: '',
    component: ManeirasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManeirasPageRoutingModule {}
