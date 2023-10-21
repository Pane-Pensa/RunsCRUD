import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RunesPage } from './runes.page';

const routes: Routes = [
  {
    path: '',
    component: RunesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RunesPageRoutingModule {}
