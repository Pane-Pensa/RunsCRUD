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
        {id:1,fondo: "assets/img/runes/Domination.jpg",general: "Dominación", runas_clave: "assets/img/runes/secondary/Conqueror.jpg", secundario: "Triunfo"},
        {id:2,fondo: "assets/img/runes/Inspiration.jpg",general: "Inspiración", runas_clave: "assets/img/runes/secondary/Conqueror.jpg", secundario: "Claridad mental"},
        {id:3,fondo: "assets/img/runes/Precision.jpg",general: "Precisión", runas_clave: "assets/img/runes/secondary/Conqueror.jpg", secundario: "Claridad mental"},
        {id:4,fondo: "assets/img/runes/Resolve.jpg",general: "Valor", runas_clave: "assets/img/runes/secondary/Conqueror.jpg", secundario: "Claridad mental"},
        {id:5,fondo: "assets/img/runes/Sorcery.jpg",general: "Brujería", runas_clave: "assets/img/runes/secondary/Conqueror.jpg", secundario: "Claridad mental"},
      ];
      this.id=2
      this._hojas.next(lista);
      observer.next(lista);
      observer.complete();
    });
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