import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuialunoPageRoutingModule } from './guialuno-routing.module';

import { GuialunoPage } from './guialuno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuialunoPageRoutingModule
  ],
  declarations: [GuialunoPage]
})
export class GuialunoPageModule {}
