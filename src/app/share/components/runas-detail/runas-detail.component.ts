import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Hoja } from 'src/app/core/interfaces/hoja';
import { RunasService } from 'src/app/core/services/runas.service';

@Component({
  selector: 'app-runas-detail',
  templateUrl: './runas-detail.component.html',
  styleUrls: ['./runas-detail.component.scss'],
})
export class RunasDetailComponent implements OnInit {
  
  form:FormGroup
  @Input() set hoja(_hoja:Hoja|null){
    if(_hoja){
      console.log(_hoja.runas_clave_1)
      this.form.controls['id'].setValue(_hoja.id);
      this.form.controls['general'].setValue(_hoja.general);
      this.form.controls['runas_clave_1'].setValue(_hoja.runas_clave_1);
      this.runa1[0]=_hoja.runas_clave_1;
    }
  }

  tipoRunaPrincipal=""; //Este tipo de runa especificará el fondo que se usará
  runasPrincipales:Array<string>=[]; // Es un array que contiene las runas del tipo principal de runa
  runasSecundarias:Array<string>=[]; // Array que contiene las runas secundarias
  tipoRunaSecundaria="";//opcional : se usa para especificar el segundo fondo que se usará
  runa1:Array<string>=[];

  //si se hace click en changeType se vacia todo y se elije el nuevo tipo de runa 
  //excepto si se hizo click en la misma

  //funciones: cambiarTipoRuna(name,type), cambiarRuna(name,type,position)

   cambiarTipoRuna(runeType:string,type:string){
    if(type=="principal"&&this.tipoRunaPrincipal!=runeType){
      this.tipoRunaPrincipal=runeType;
      console.log(this.tipoRunaPrincipal);
      this.runasPrincipales=[];
    }else if(type=="secundaria"&&this.tipoRunaSecundaria!=runeType){
      this.tipoRunaSecundaria=runeType;
      this.runasSecundarias=[];
    }
   }

   cambiarRuna(name:string,type:string,position:number){
    if(type=="principal"){
      if(this.runasPrincipales[position]!=name){
        this.runasPrincipales[position]=name;
        console.log(this.runasPrincipales);
      }
    }else if(type=="secundaria"){
      if(this.runasSecundarias[position]!=name){
        this.runasSecundarias[position]=name;
      }
    }
   }

   runasPrincipaleset(name:string,position:number){
    
   }
  constructor(
    public runesService:RunasService,
   public formBuilder:FormBuilder
  ) { 
    this.form=this.formBuilder.group({
      id:[null],  
      general:['',Validators.required],
      runas_clave:['',Validators.required],
      runas_clave_1:['',Validators.required],
      runas_secundarias:['',Validators.required]
    })
  }

  ngOnInit(
  ) {}

}
