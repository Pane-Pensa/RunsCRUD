import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RunesPageRoutingModule } from './runes-routing.module';

import { RunesPage } from './runes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RunesPageRoutingModule
  ],
  declarations: [RunesPage]
})
export class RunesPageModule {}
