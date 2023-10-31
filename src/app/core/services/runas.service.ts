import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Hoja } from '../interfaces/hoja';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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
  
  constructor(
    private http:HttpClient
  ) { }

  /*
   * Métodos para manejar las hojas de runas 
   */

  // Método que recoge recoge todos las hojas de runas
  public getAll(): Observable<Hoja[]>{
    return this.http.get<Hoja[]>(environment.apiUrl+'/runes').pipe(tap((hojas:any[])=>{
      this._hojas.next(hojas)
    }))
    
    /*
    return new Observable(observer => {
      let lista: Hoja[] = [
        {id:1,fondo: "assets/img/runes/Dominacion.jpg",nombre: "Primera hoja", runas_clave: "Dominación", runas_secundaria: "Cosecha Oscura", miniatura: "assets/img/runes/secondary/Cosecha_Oscura.png"},
        {id:2,fondo: "assets/img/runes/Inspiracion.jpg",nombre: "Segunda hoja", runas_clave: "Inspiración", runas_secundaria: "Primer Golpe", miniatura: "assets/img/runes/secondary/Primer_Golpe.png"},
        {id:3,fondo: "assets/img/runes/Precision.jpg",nombre: "Tercera hoja", runas_clave: "Precisión", runas_secundaria: "Cadencia Letal", miniatura: "assets/img/runes/secondary/Cadencia_Letal.png"},
        {id:4,fondo: "assets/img/runes/Valor.jpg",nombre: "Cuarta hoja", runas_clave: "Valor", runas_secundaria: "Guardián", miniatura: "assets/img/runes/secondary/Guardian.png"},
        {id:5,fondo: "assets/img/runes/Brujeria.jpg",nombre: "Quinta hoja", runas_clave: "Brujería", runas_secundaria: "Cometa Arcano", miniatura: "assets/img/runes/secondary/Cometa_Arcano.png"},
      ];
      this.id= lista.length
      this._hojas.next(lista);
      observer.next(lista);
      observer.complete();
    });
    */
  }

  // Método para obtener una hoja
  public getHoja(id:number):Hoja{
      var _hojas=[...this._hojas.value];
      var index=_hojas.findIndex(h=>h.id==id);
      var hoja:Hoja=_hojas[index]
      if (index>0)
        return hoja;
    throw new RuneNotFoundException();
  }
  // Método para eliminar una hoja
  public deletePage(rune:Hoja):Observable<Hoja[]>{
    return new Observable(observer=>{
      var runes=[...this._hojas.value];
      var index= runes.findIndex(rune=>rune.id==rune.id);
      if(index<0)
        throw new RuneNotFoundException();
      runes=[...runes.slice(0,index),...runes.slice(index+1)];
      this._hojas.next(runes);
      observer.next(runes);
      observer.complete;
    })
  }

  // Método para actulizar los datos de una hoja
  public updatePage(rune:Hoja):Observable<Hoja>{
    return new Observable<Hoja>(observer=>{
      var _hojas=[...this._hojas.value];
      var index=_hojas.findIndex(h=>h.id==rune.id);
      if (index<0)
        observer.error(new RuneNotFoundException());
      else {
        rune = this.config(rune)
        _hojas[index]=rune;
      }
      observer.next(rune);
      this._hojas.next(_hojas);
      observer.complete;
    });
  }

  // Método para crear una nueva hoja
  public addPage(rune:Hoja):Observable<Hoja>{
    return new Observable(observer=>{
      var runes=[...this._hojas.value];
      rune.id = ++this.id;
      rune = this.config(rune);
      runes.push(rune);
      this._hojas.next(runes);
      observer.next(rune);
    });
  }

  // Método para darle los valores indicados para las imagenes
  private config(rune: Hoja):Hoja{
    if(rune.runas_clave == 'Dominación'){
      rune.fondo = 'assets/img/runes/Dominacion.jpg';
      if(rune.runas_secundaria == 'Electrocutar'){
        rune.miniatura = 'assets/img/runes/secondary/Electrocutar.png';
      } else if(rune.runas_secundaria == 'Depredador'){
        rune.miniatura = 'assets/img/runes/secondary/Depredador.png';
      } else if(rune.runas_secundaria == 'Cosecha_Oscura'){
        rune.miniatura = 'assets/img/runes/secondary/Cosecha_Oscura.png';
      } else if(rune.runas_secundaria == 'Lluvia_De_Espadas'){
        rune.miniatura = 'assets/img/runes/secondary/Lluvia_De_Espadas.png';
      }
    } else if(rune.runas_clave == 'Inspiración'){
      rune.fondo = 'assets/img/runes/Inspiracion.jpg';
      if(rune.runas_secundaria == 'Aumento_Glacial'){
        rune.miniatura = 'assets/img/runes/secondary/Aumento_Glacial.png';
      } else if(rune.runas_secundaria == 'Libro_De_Hechizos_Abierto'){
        rune.miniatura = 'assets/img/runes/secondary/Libro_De_Hechizos_Abierto.png';
      } else if(rune.runas_secundaria == 'Primer_Golpe'){
        rune.miniatura = 'assets/img/runes/secondary/Primer_Golpe.png';
      }
    } else if(rune.runas_clave == 'Precisión'){
      rune.fondo = 'assets/img/runes/Precision.jpg';
      if(rune.runas_secundaria == 'Estrategia_Ofensiva'){
        rune.miniatura = 'assets/img/runes/secondary/Estrategia_Ofensiva.png';
      } else if(rune.runas_secundaria == 'Candencia_Letal'){
        rune.miniatura = 'assets/img/runes/secondary/Cadencia_Letal.png';
      } else if(rune.runas_secundaria == 'Sobre_La_Marcha'){
        rune.miniatura = 'assets/img/runes/secondary/Sobre_La_Marcha.png';
      } else if(rune.runas_secundaria == 'Conquistador'){
        rune.miniatura = 'assets/img/runes/secondary/Conquistador.png';
      }
    } else if(rune.runas_clave == 'Valor'){
      rune.fondo = 'assets/img/runes/Valor.jpg';
      if(rune.runas_secundaria == 'Agarre_Del_Perpetuo'){
        rune.miniatura = 'assets/img/runes/secondary/Agarre_Del_Perpetuo.png';
      } else if(rune.runas_secundaria == 'Replica'){
        rune.miniatura = 'assets/img/runes/secondary/Replica.png';
      } else if(rune.runas_secundaria == 'Guardian'){
        rune.miniatura = 'assets/img/runes/secondary/Guardian.png';
      }
    } else if(rune.runas_clave == 'Brujería'){
      rune.fondo = 'assets/img/runes/Brujeria.jpg';
      if(rune.runas_secundaria == 'Invocación__Aery'){
        rune.miniatura = 'assets/img/runes/secondary/Invocacion__Aery.png';
      } else if(rune.runas_secundaria == 'Cometa_Arcano'){
        rune.miniatura = 'assets/img/runes/secondary/Cometa_Arcano.png';
      } else if(rune.runas_secundaria == 'Fase_Veloz'){
        rune.miniatura = 'assets/img/runes/secondary/Fase_Veloz.png';
      }
    }
    return rune;
  }
}