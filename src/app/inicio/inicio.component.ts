import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  public reserva(){
    window.location.href = "https://www.airbnb.mx/rooms/1419866316588349268?viralityEntryPoint=1&s=76&source_impression_id=p3_1752115816_P3rarKXvrd7q_wLC"
  }

  public icon(number:number){
    switch(number){
      case 1:
         window.location.href = "https://www.instagram.com/belenvibe/";
         break;
      case 2:
        window.location.href = "https://www.instagram.com/belenvibe/";
        break;
      case 3:
        window.location.href = "https://wa.me/573204577645?text=Hola%20quiero%20saber%20más%20sobre%20el%20lugar";
        break;
    }
  }
}
