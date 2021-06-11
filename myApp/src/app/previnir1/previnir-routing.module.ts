import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrevinirPage } from './previnir.page';

const routes: Routes = [
  {
    path: '',
    component: PrevinirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrevinirPageRoutingModule {}
