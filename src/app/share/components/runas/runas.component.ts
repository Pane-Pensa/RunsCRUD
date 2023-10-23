import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-runas',
  templateUrl: './runas.component.html',
  styleUrls: ['./runas.component.scss'],
})
export class RunasComponent  implements OnInit {

  @Input() hoja?:{
    fondo?: string,
    general?: string,
    runas_clave?: string,
    secundario?: string,
    miniatura?: string
  }

  constructor() { }

  ngOnInit() {}

}
