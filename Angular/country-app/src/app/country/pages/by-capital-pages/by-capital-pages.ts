import {Component, inject, signal} from '@angular/core';
import {CountrySearchInput} from '../../component/country-search-input/country-search-input';
import {CountryListTable} from '../../component/country-list-table/country-list-table';
import {CountryServices} from '../../services/CountryServices';
import {RestCountry} from '../../interfaces/rest-countries';

@Component({
  selector: 'app-by-capital-pages',
  imports: [
    CountrySearchInput,
    CountryListTable
  ],
  templateUrl: './by-capital-pages.html',
})
export class ByCapitalPages {

  countryServices = inject(CountryServices);
  isLoading = signal(false);
  isError = signal<string | null>(null);
  countries = signal<RestCountry[]>([]);

  onSearch(query: string){

    if(this.isLoading()) return;
    this.isLoading.set(true);
    this.isError.set(null);

    this.countryServices.searchByCapital(query).subscribe({
      next: countries => {
        this.isLoading.set(false);
        this.countries.set(countries);
      },
      error: err => {
        console.log(err);
      }
    });
  }

}

