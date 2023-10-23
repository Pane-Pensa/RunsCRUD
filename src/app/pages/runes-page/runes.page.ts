import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RunasService } from 'src/app/core/services/runas.service';

@Component({
  selector: 'app-runes',
  templateUrl: './runes.page.html',
  styleUrls: ['./runes.page.scss'],
})
export class RunesPage implements OnInit {

  constructor(
    private router: Router,
    public lista: RunasService
  ) { }

  ngOnInit(): void{
    this.lista.getAll().subscribe();
  }

  // Para volver a la página princial
  public home(){
    this.router.navigate(['./home'])
  }

}
