import { Component } from '@angular/core';
import {CountryListTable} from '../../component/country-list-table/country-list-table';
import {CountrySearchInput} from '../../component/country-search-input/country-search-input';

@Component({
  selector: 'by-region-page',
  imports: [
    CountryListTable,
    CountrySearchInput
  ],
  templateUrl: './by-region-page.html',
})
export class ByRegionPage {

}
