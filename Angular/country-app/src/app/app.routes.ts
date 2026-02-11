import { Routes } from '@angular/router';
import {HomePage} from './shared/pages/home-page/home-page';

export const routes: Routes = [

  {
    path: '',
    component: HomePage
  },
  {
    //mostrar router de country
    //sepacion de rutas
    path: 'country',
    //exportar default
    loadChildren: () => import('./country/country.routes')

  },
  {
    //caer en el HOME
    path: '**',
    redirectTo: ''
  }

];
