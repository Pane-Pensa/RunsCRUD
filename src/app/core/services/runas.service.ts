import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Hoja } from '../interfaces/hoja';

@Injectable({
  providedIn: 'root'
})

export class RuneNotFoundException extends Error{

}
export class RunasService {

  //Id de las paginas que deberemos de ir controlando
  id:number=0;
  // Lista privada de las hojas de runas
  private _hojas: BehaviorSubject<Hoja[]> = new BehaviorSubject<Hoja[]>([]);
  // Lista pública que lo recibe desde la privada
  hojas$: Observable<Hoja[]> = this._hojas.asObservable();
  
  constructor() { }

  /*
   * Métodos para manejar las hojas de runas 
   */

  // Método que recoge recoge todos las hojas de runas
  public getAll(): Observable<Hoja[]>{
    return new Observable(observer => {
      let lista: Hoja[] = [
        {id:1,fondo: "assets/img/runes/Dominacion.jpg",general: "Dominación", runas_clave: ["Cosecha_Oscura","Golpe_Bajo","Coleccion_de_Ojos","Cazador_Voraz"], secundario: ["Capa_del_Nimbo"]},
        {id:2,fondo: "assets/img/runes/Inspiracion.jpg",general: "Inspiración", runas_clave:[ "Aumento_Glacial","Destello_Hextech","Mercado_de_Futuros","Velocidad_de_Aproximacion"], secundario: ["Claridad mental"]},
        {id:3,fondo: "assets/img/runes/Precision.jpg",general: "Precisión", runas_clave: ["Conquistador","Triunfo","Leyenda:_Celeridad","Golpe_de_Gracia"], secundario: ["Claridad mental"]},
        {id:4,fondo: "assets/img/runes/Valor.jpg",general: "Valor", runas_clave:["Replica","Demolicion","Acondicionamiento","Revitalizar"], secundario: ["Claridad mental"]},
        {id:5,fondo: "assets/img/runes/Brujeria.jpg",general: "Brujería", runas_clave: ["Cometa_Arcano","Capa_del_Nimbo","Celeridad","Caminata_sobre_Agua"], secundario: ["Claridad mental"]},
      ];
      this.id=5
      this._hojas.next(lista);
      observer.next(lista);
      observer.complete();
    });
  }

  public getHoja(id:number):Hoja{
      var _hojas=[...this._hojas.value];
      var index=_hojas.findIndex(h=>h.id==id);
      var hoja:Hoja=_hojas[index]
      if (index>0)
        return hoja;
    throw new RuneNotFoundException();
  }
  // Método para eliminar una hoja
  public deletePage(rune:Hoja):Observable<Hoja>{
    return new Observable<Hoja>(observer=>{
      var runes=[...this._hojas.value];
      var index= runes.findIndex(rune=>rune.id==rune.id);
      if(index<0)
        throw new RuneNotFoundException();
    runes=[...runes.splice(0,index),...runes.splice(0,index+1)];
    this._hojas.next(runes);
    observer.next(runes[index]);
    observer.complete();
    })
  }

  // Método para actulizar los datos de una hoja
  public updatePage(rune:Hoja):Observable<Hoja>{
    return new Observable<Hoja>(observer=>{
      var _hojas=[...this._hojas.value];
      var index=_hojas.findIndex(h=>h.id==rune.id);
      if (index<0)
        observer.error(new RuneNotFoundException());
      else
       _hojas[index]=rune;
       observer.next(rune);
      this._hojas.next(_hojas);
      observer.complete();
    });
  }

  // Método para crear una nueva hoja
  public addPage(rune:Hoja):Observable<Hoja>{
    return new Observable<Hoja>(observer=>{
      var _hojas=[...this._hojas.value];
      rune.id=++this.id;
      _hojas.push(rune);
      this._hojas.next(_hojas);
      observer.next(rune);
    });
  }
  
}