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
      this.form.controls['id'].setValue(_hoja.id);
      this.form.controls['general'].setValue(_hoja.general);
      this.runasPrincipales=_hoja.runas_clave;
      this.runasSecundarias=_hoja.secundario;

      for (let index = 0; index < _hoja.runas_clave.length; index++) {
       this.runasPrincipales[index]=_hoja.runas_clave[index];
      }

      if(_hoja.runas_clave[0].match("Agarre")||_hoja.runas_clave[0].match("Replica")||_hoja.runas_clave[0].match("Guardian")){
        this.tipoRunaPrincipal="Valor";
      }else if(_hoja.runas_clave[0].match("Electrocutar")||_hoja.runas_clave[0].match("Depredador")||_hoja.runas_clave[0].match("Cosecha_Oscura")||_hoja.runas_clave[0].match("Depredador")||_hoja.runas_clave[0].match("Lluvia_de_Espadas")){
        this.tipoRunaPrincipal="Dominacion";
      }else if(_hoja.runas_clave[0].match("Aumento_Glacial")||_hoja.runas_clave[0].match("Libro_de_Hechizos_Abierto")||_hoja.runas_clave[0].match("Primer_Golpe")){
        this.tipoRunaPrincipal="Inspiracion"
      }else if(_hoja.runas_clave[0].match("Estrategia_Ofensiva")||_hoja.runas_clave[0].match("Cadencia_Letal")||_hoja.runas_clave[0].match("Sobre_la_Marcha")||_hoja.runas_clave[0].match("Cadencia_Letal")||_hoja.runas_clave[0].match("Conquistador")){
        this.tipoRunaPrincipal="Precision";
      }else if(_hoja.runas_clave[0].match("Invocacion__Aery")||_hoja.runas_clave[0].match("Cometa_Arcano")||_hoja.runas_clave[0].match("Fase_Veloz")){
        this.tipoRunaPrincipal="Brujeria";
      }
    }
  }
  showMenu=false;
  tipoRunaPrincipal=""; //Este tipo de runa especificará el fondo que se usará
  runasPrincipales:Array<string>=[]; // Es un array que contiene las runas del tipo principal de runa
  runasSecundarias:Array<string>=[]; // Array que contiene las runas secundarias
  tipoRunaSecundaria="";//opcional : se usa para especificar el segundo fondo que se usará

  //si se hace click en changeType se vacia todo y se elije el nuevo tipo de runa 
  //excepto si se hizo click en la misma

  //funciones: cambiarTipoRuna(name,type), cambiarRuna(name,type,position)

   cambiarTipoRuna(runeType:string,type:string){
    if(type=="principal"&&this.tipoRunaPrincipal!=runeType){
      this.tipoRunaPrincipal=runeType;
      this.runasPrincipales=[];
    }else if(type=="secundaria"&&this.tipoRunaSecundaria!=runeType){
      this.tipoRunaSecundaria=runeType;
      this.runasSecundarias=[];
    }
    this.showMenu=false;

   }

   cambiarRuna(name:string,type:string,position:number){
    if(type=="principal"){
      if(this.runasPrincipales[position]!=name){
        this.runasPrincipales[position]=name;

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
      runas_secundarias:['',Validators.required]
    })
  }

  ngOnInit(
  ) {}

}
