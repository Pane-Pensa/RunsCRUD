import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/share/shared.module';
import { RunesPage } from '../runes-page/runes.page';


@NgModule({
  imports: [
    HomePageRoutingModule,
    SharedModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
