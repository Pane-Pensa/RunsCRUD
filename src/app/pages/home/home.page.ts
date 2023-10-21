import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    // Poder movernos entre páginas
    private router: Router,
  ) {}

  // Evento para el boton e ir al "about"
  public about(){
    this.router.navigate(["./about"])
  }

  // Evento para el boton e ir al "runes"
  public runes(){
    this.router.navigate(["./runes"])
  }

}
