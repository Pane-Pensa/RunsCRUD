import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Hojas } from '../interfaces/hojas';

@Injectable({
  providedIn: 'root'
})

export class RunasService {

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
        {general: "Dominación", runas_clave: "Conquistador", secundario: "Triunfo"},
        {general: "Precision", runas_clave: "Pies veloces", secundario: "Claridad mental"}
      ]
    });
  }
}
