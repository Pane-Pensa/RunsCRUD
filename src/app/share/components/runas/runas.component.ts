import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-runas',
  templateUrl: './runas.component.html',
  styleUrls: ['./runas.component.scss'],
})
export class RunasComponent  implements OnInit {

  @Input() hoja?:{
    fondo?: string,
    general?: string,
    runas_clave?: string[],
    secundario?: string[],
    miniatura?: string
  }

  // Cuando hagamos click en la hoja
  @Output() onHojaClicked: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {}

  // Al hacer click en la hoja
  hojaClick(){
    this.onHojaClicked.emit();
  }

}
