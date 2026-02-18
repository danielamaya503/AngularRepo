import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {RestCountry} from '../interfaces/rest-countries';

@Injectable({
  providedIn: 'root',
})
export class CountryServices {
  httpService = inject(HttpClient);

  searchByCapital(query: string){
    query = query.toLowerCase();

    return this.httpService.get<RestCountry[]>(`${environment.apiUrlCountries}/capital/${query}`);

  }
}
