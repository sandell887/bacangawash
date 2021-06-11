import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProtegerPageRoutingModule } from './proteger-routing.module';

import { ProtegerPage } from './proteger.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProtegerPageRoutingModule
  ],
  declarations: [ProtegerPage]
})
export class ProtegerPageModule {}
