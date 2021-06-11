import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrevinirPageRoutingModule } from './previnir-routing.module';

import { PrevinirPage } from './previnir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrevinirPageRoutingModule
  ],
  declarations: [PrevinirPage]
})
export class PrevinirPageModule {}
