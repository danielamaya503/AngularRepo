import {Component, Input} from '@angular/core';
import {RestCountry} from '../../interfaces/rest-countries';
import {TableModule} from 'primeng/table';

@Component({
  selector: 'country-list-table',
  imports: [
    TableModule
  ],
  templateUrl: './country-list-table.html',
})
export class CountryListTable {

  //Resivir data de search
  @Input({required: true}) countries: RestCountry[] = [];
}
