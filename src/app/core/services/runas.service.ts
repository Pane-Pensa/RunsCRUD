import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Hojas } from '../interfaces/hojas';

@Injectable({
  providedIn: 'root'
})

export class RuneNotFoundException extends Error{

}
export class RunasService {

  //Id de las paginas que deberemos de ir controlando
  id:number=0;
  // Lista privada de las hojas de runas
  private _hojas: BehaviorSubject<Hojas[]> = new BehaviorSubject<Hojas[]>([]);
  // Lista pública que lo recibe desde la privada
  hojas$: Observable<Hojas[]> = this._hojas.asObservable();

  constructor() { }

  /*
   * Métodos para manejar las hojas de runas 
   */

  // Método que recoge recoge todos las hojas de runas
  public getAll(): Observable<Hojas[]>{
    return new Observable(observer => {
      let lista: Hojas[] = [
        {id:1,fondo: "assets/img/runes/Domination.jpg",general: "Dominación", runas_clave: "Conquistador", secundario: "Triunfo"},
        {id:2,fondo: "assets/img/runes/Precision.jpg",general: "Precision", runas_clave: "Pies veloces", secundario: "Claridad mental"}
      ];
      this.id=2
      this._hojas.next(lista);
      observer.next(lista);
      observer.complete();
    });
  }

  public deletePage(rune:Hojas):Observable<Hojas>{
    return new Observable<Hojas>(observer=>{
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

  public updatePage(rune:Hojas):Observable<Hojas>{
    return new Observable<Hojas>(observer=>{
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

  public addPage(rune:Hojas):Observable<Hojas>{
    return new Observable<Hojas>(observer=>{
      var _hojas=[...this._hojas.value];
      rune.id=++this.id;
      _hojas.push(rune);
      this._hojas.next(_hojas);
      observer.next(rune);
    });
  }
  
}