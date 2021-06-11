import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProtegerPage } from './proteger.page';

const routes: Routes = [
  {
    path: '',
    component: ProtegerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProtegerPageRoutingModule {}
