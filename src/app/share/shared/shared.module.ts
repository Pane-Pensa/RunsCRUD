import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    // Componentes
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

    //Modules
    CommonModule,
    IonicModule,
    FormsModule,
  ]
})
export class SharedModule { }
