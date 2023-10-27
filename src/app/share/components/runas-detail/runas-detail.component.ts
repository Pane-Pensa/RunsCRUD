import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Hoja } from 'src/app/core/interfaces/hoja';

@Component({
  selector: 'app-runas-detail',
  templateUrl: './runas-detail.component.html',
  styleUrls: ['./runas-detail.component.scss'],
})
export class RunasDetailComponent implements OnInit {

  form: FormGroup;
  @Input() set hoja(_hoja: Hoja | null){
    if(_hoja){
      this.form.controls['id'].setValue(_hoja.id);
      this.form.controls['nombre'].setValue(_hoja.nombre);
      this.form.controls['runas_clave'].setValue(_hoja.runas_clave);
      this.form.controls['runas_secundaria'].setValue(_hoja.runas_secundaria);
    }
  }

  constructor(
    private _modal: ModalController,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      id:[null],  
      nombre:['',Validators.required],
      runas_clave:['',Validators.required],
      runas_secundaria:['',Validators.required]
    })
  }

  ngOnInit(){}

  onSubmit(){
    this._modal.dismiss(this.form.value, 'ok');
  }
    
}
