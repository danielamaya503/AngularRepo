import {Component, inject} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {GifsService} from '../../../services/gifs.service';



@Component({
  selector: 'gifs-side-menu-options',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './gifs-side-menu-options.html',
})

//creador de enructamiento
export class GifsSideMenuOptions {

  //Objecto para nuestro menu Trending y Search de interfaz menuOption como objecto array []
  menuOption : MenuOption[] = [
    {
      icon: "fa-solid fa-chart-line",
      label: "Trending",
      subLavel: "Gifs Pupulates",
      router: "/dashboard/trending"
    },
    {
      icon: "fa-solid fa-magnifying-glass",
      label: "Buscador",
      subLavel: "Buscar Gifs",
      router: "/dashboard/search"
    }
  ];

  //Crear nuestro servicio para obtener items del historial
  gifsService = inject(GifsService);

}
