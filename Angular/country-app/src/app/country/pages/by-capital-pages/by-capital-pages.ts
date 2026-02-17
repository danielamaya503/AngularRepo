import { Component } from '@angular/core';
import {CountrySearchInput} from '../../component/country-search-input/country-search-input';
import {CountryListTable} from '../../component/country-list-table/country-list-table';

@Component({
  selector: 'app-by-capital-pages',
  imports: [
    CountrySearchInput,
    CountryListTable
  ],
  templateUrl: './by-capital-pages.html',
})
export class ByCapitalPages {

  onSearch(value: string){
    console.log(value);
  }

}

