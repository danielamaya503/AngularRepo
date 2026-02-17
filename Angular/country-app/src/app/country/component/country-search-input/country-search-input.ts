import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './country-search-input.html',
})
export class CountrySearchInput {

  //salida - evento emit
  @Output() value = new EventEmitter<string>();
  @Input() placeholder: string = "Buscar";
}
