import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuialunoPage } from './guialuno.page';

const routes: Routes = [
  {
    path: '',
    component: GuialunoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuialunoPageRoutingModule {}
