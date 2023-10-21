import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-runes',
  templateUrl: './runes.page.html',
  styleUrls: ['./runes.page.scss'],
})
export class RunesPage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  // Para volver a la página princial
  public home(){
    this.router.navigate(['./home'])
  }

}
