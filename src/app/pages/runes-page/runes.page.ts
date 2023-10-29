import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Hoja } from 'src/app/core/interfaces/hoja';
import { RunasService } from 'src/app/core/services/runas.service';
import { RunasDetailComponent } from 'src/app/share/components/runas-detail/runas-detail.component';

@Component({
  selector: 'app-runes',
  templateUrl: './runes.page.html',
  styleUrls: ['./runes.page.scss'],
})
export class RunesPage implements OnInit {

  constructor(
    private router: Router, // Router para movernos por las páginas
    public lista: RunasService, // Lista de las hojas
    private modal: ModalController // Panel que aparece al hacer click
  ) { }

  ngOnInit(): void{
    this.lista.getAll().subscribe();
  }

  // Para volver a la página princial
  public home(){
    this.router.navigate(['./home'])
  }

  // Al hacer click en la hoja, recibimos la hoja clickeada
  public async onHojaClicked(hoja:Hoja){
    var onDismiss = (info: any) => {
      console.log(info);
      switch(info.role){
        case 'ok':{
          this.lista.updatePage(info.data).subscribe();
        }
        break;
        case 'delete':{
          this.lista.deletePage(info.data).subscribe();
        }
        break;
      }
    }
    this.modalPresent(hoja, onDismiss);
  }

  // Método para cuando le hagamos click al boton de nuevo nos salga el modal y añadamos los datos
  onNewHoja(){
    var onDismiss = (data:any) => {
      console.log(data);
      switch (data.role) {
        case 'ok':
          this.lista.addPage(data.data).subscribe();
          break;
        default:
          console.error("Error");
          break;
      }
    }
    this.modalPresent(null, onDismiss);
  }

  // Método que lo llamados desde los otros para que se muestre el modal
  async modalPresent(data: Hoja | null, onDismiss:(result: any)=> void){
    const modal = await this.modal.create({
      component: RunasDetailComponent,
      componentProps:{
        hoja: data
      },
    });
    modal.present();
    modal.onDidDismiss().then(result => {
      if(result && result.data){
        onDismiss(result);
      }
    })
  }

}
