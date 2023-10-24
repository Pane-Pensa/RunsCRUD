import { NgModule } from '@angular/core';

import { RunesPageRoutingModule } from './runes-routing.module';

import { RunesPage } from './runes.page';
import { SharedModule } from 'src/app/share/shared.module';
import { RunasService } from 'src/app/core/services/runas.service';

@NgModule({
  imports: [
    SharedModule,
    RunesPageRoutingModule
  ],
  declarations: [RunesPage],
  providers: [RunasService]
})
export class RunesPageModule {}
