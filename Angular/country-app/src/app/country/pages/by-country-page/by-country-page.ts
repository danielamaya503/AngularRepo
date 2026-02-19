import { Component } from '@angular/core';
import {CountryListTable} from '../../component/country-list-table/country-list-table';
import {CountrySearchInput} from '../../component/country-search-input/country-search-input';

@Component({
  selector: 'by-country-page',
  imports: [
    CountrySearchInput,
    CountryListTable,
  ],
  templateUrl: './by-country-page.html',
})
export class ByCountryPage {

}
