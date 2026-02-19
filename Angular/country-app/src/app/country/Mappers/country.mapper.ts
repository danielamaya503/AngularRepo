import {RestCountry} from '../interfaces/rest-countries';
import {Country} from '../interfaces/country.interface';

export class CountryMapper {

  //RestCountry => country
  static mapRestCountryToCountry(restCountry: RestCountry): Country{
    return{
      //Puede que vengan 2 capitales y separa ambos con , con JOIN
      capital: restCountry.capital.join(','),
      cca2: restCountry.cca2,
      flag: restCountry.flag,
      flagSvg: restCountry.flags.svg,
      name: restCountry.translations['spa'].common ?? 'No name',
      population: restCountry.population
    }
  }
  //RestCountry[] => country[]
  static mapRestCountryArrayToCountryArray(restCountry: RestCountry[]): Country[]{
    return  restCountry.map( this.mapRestCountryToCountry)
  }

}
