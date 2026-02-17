import { Routes } from '@angular/router';
import {ByCapitalPages} from './pages/by-capital-pages/by-capital-pages';
import {CountryLayout} from './layouts/country-layout/country-layout';
import {ByCountryPage} from './pages/by-country-page/by-country-page';
import {ByRegionPage} from './pages/by-region-page/by-region-page';
import {CountryPages} from './pages/country-pages/country-pages';

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
        path: 'by-country-page',
        component: ByCountryPage,
      },
      {
        path: 'by-region-page',
        component: ByRegionPage
      },
      {
        //para realizar pagina dinamica
        path: 'by/:code',
        component: CountryPages,
      },
      {
        path: "**",
        redirectTo: 'by-capital',
      }
    ],
  },

];

export default countryRoutes;
