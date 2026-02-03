import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

interface MenuOption {
  icon: string,
  label: string,
  router: string,
  subLavel: string,
}

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

  //Objecto para los menu
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
}
