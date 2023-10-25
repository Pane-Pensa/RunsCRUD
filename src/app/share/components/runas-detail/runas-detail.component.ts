import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Hoja } from 'src/app/core/interfaces/hoja';
import { RunasService } from 'src/app/core/services/runas.service';

@Component({
  selector: 'app-runas-detail',
  templateUrl: './runas-detail.component.html',
  styleUrls: ['./runas-detail.component.scss'],
})
export class RunasDetailComponent  implements OnInit {
  form:FormGroup

  @Input() set hoja(_hoja:Hoja|null){
    if(_hoja){
      this.form.controls['id'].setValue(_hoja.id);
      this.form.controls['general'].setValue(_hoja.general);
      this.form.controls['runas_clave'].setValue(_hoja.runas_clave);
      this.form.controls['runas_secundarias'].setValue(_hoja.secundario);
    }
  }
  
  mainRune = "";
  secondRune="";
  segmentChanged(ev: any,mode:any) {
    if(mode="main"){
      this.mainRune=ev;
      console.log(this.mainRune);
    }else if(mode="secondary"){
      this.secondRune=ev;
      console.log(this.mainRune);
    }else{
      console.error("The mode should be main or secondary");
    }
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
