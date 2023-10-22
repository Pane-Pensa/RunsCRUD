import { NgModule } from '@angular/core';

import { RunesPageRoutingModule } from './runes-routing.module';

import { RunesPage } from './runes.page';
import { SharedModule } from 'src/app/share/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RunesPageRoutingModule
  ],
  declarations: [RunesPage]
})
export class RunesPageModule {}
