import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManeirasPageRoutingModule } from './maneiras-routing.module';

import { ManeirasPage } from './maneiras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManeirasPageRoutingModule
  ],
  declarations: [ManeirasPage]
})
export class ManeirasPageModule {}
