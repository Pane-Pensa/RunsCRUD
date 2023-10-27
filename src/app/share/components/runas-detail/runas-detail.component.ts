import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Hoja } from 'src/app/core/interfaces/hoja';
import { RunasService } from 'src/app/core/services/runas.service';

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
    }
  }

  constructor(
    private _modal: ModalController,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      id:[null],  
      nombre:['',Validators.required],
      runas_clave:['opcion1',Validators.required]
    })
  }

  runas_clave: string | undefined = 'hola';

  ngOnInit(){}

  onSubmit(){
    console.log(this.runas_clave);
    this._modal.dismiss(this.form.value, 'ok');
  }
    
}
