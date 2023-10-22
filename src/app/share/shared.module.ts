import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RunasComponent } from './components/runas/runas.component';



@NgModule({
  declarations: [
    // Componentes
    RunasComponent
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
    //Modules
    CommonModule,
    IonicModule,
    FormsModule,
  ]
})
export class SharedModule { }
