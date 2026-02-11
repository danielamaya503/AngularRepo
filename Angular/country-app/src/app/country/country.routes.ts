import { Routes } from '@angular/router';
import {ByCapitalPages} from './pages/by-capital-pages/by-capital-pages';
import {CountryLayout} from './layouts/country-layout/country-layout';

export const countryRoutes: Routes = [

  {
    path: '',
    component: CountryLayout,
    children: [
      {
        path: 'by-capital',
        component: ByCapitalPages,
      },
      {
        path: "**",
        redirectTo: 'by-capital',
      }
    ],
  },

];

export default countryRoutes;
