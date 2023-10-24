import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RunasComponent } from './components/runas/runas.component';
import { RunasDetailComponent } from './components/runas-detail/runas-detail.component';



@NgModule({
  declarations: [
    // Componentes
    RunasComponent,
    RunasDetailComponent
  ],
  imports: [
    // Modulos
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    // Componentes
    RunasComponent,
    RunasDetailComponent,
    //Modules
    CommonModule,
    IonicModule,
    FormsModule,
  ]
})
export class SharedModule { }
