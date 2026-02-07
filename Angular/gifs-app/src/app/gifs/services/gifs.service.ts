import { HttpClient } from '@angular/common/http';
import {computed, effect, inject, Injectable, signal} from '@angular/core';
import { environment } from '@environments/environment';
import {GiphyItem, GiphyResponse} from '../interfaces/giphy.interfaces';
import {Gif} from '../interfaces/gifs-interface';
import {GifsMapper} from '../mapper/gifs.mapper';
import {map, tap} from 'rxjs';

const gif_key = `gifs`;

//Iniciarlizar nuestro LocalStorage para tener nuestro valor vacio
const loadFromLocalStorage = () => {
  const gifsFromLocalStorage = localStorage.getItem(gif_key) ?? `{}`;
  const  gifs = JSON.parse(gifsFromLocalStorage);
  console.log(gifs);
  return gifs;
}



//Decoratico de innjectable para usar service
@Injectable({providedIn: 'root'})
export class GifsService {

  //poder usar httpClient como put, post, get, delete
  private http = inject(HttpClient);

  //obtener data del api personalizada como signal
  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal(false);
  private trendingPage = signal(0);

  //mostrar Masonry grid
  //obtiene una señal computada leyendo trendingGifs (todos los gifs)
  //<Gif[][]> significa que el resultado será un array de arrays de Gif (una matriz bidimensional).
  trendingGifGroup = computed<Gif[][]>( () => {
    const groups = [];
    //ir 3 en 3
    for(let i = 0; i < this.trendingGifs().length; i+=3){
      //slice corta 3 en 3
      groups.push(this.trendingGifs().slice(i, i + 3));
    }

    return groups;
  });

  //Obtener nuestra data como buscador
  searchGif = signal<Gif[]>([]);

  //Manejo de Historial en cache con objecto literal
  //Inicializar con loadFromLocalStorage
  searchHistory = signal<Record<string, Gif[]>>(loadFromLocalStorage());
  //Obtener las llaves del searchHistory como señal computada
  searchHistoryKey = computed( () => Object.keys(this.searchHistory()));

  //Crear LocalStage para guardar nuestro historial de gif
  saveGifsLocalStorage = effect( () => {
    //Convierte mu array a JSON STRING
    const historyString = JSON.stringify(this.searchHistory());
    //guardar en LocalStorage
    localStorage.setItem(gif_key, historyString);
  });

  constructor() {
    this.loadTrendingGifs();
  }

  loadTrendingGifs() {
    if(this.trendingGifsLoading() ){
      return;
    }

    this.trendingGifsLoading.set(true);
    //llamar al endpoint de giphy
    //environment.giphyUrl contiene la url base de giphy
     this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
      //parametros de la consulta
      //como api key y limit
      params: {
        api_key: environment.giphyApiKey,
        limit: '25',
        offset: this.trendingPage() * 20,
      },
       //siempre hay que suscribirse para crear una instancia
     }).subscribe( (resp) => {
        const gifs = GifsMapper.mapGiphtItemToGifArray(resp.data);
        this.trendingGifs.update(currentGifs => [
          ...currentGifs,
          ...gifs
        ]);
        this.trendingPage.update( page => page +1);
        this.trendingGifsLoading.set(false);
     });
  }

  searchGifs(query: string){
    return this.http
      .get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`, {
      params: {
        api_key: environment.giphyApiKey,
        limit: 20,
        q: query,
      }
    }).pipe(
      //mapear nuestra data directamente, para recibirlo en nuestro component
      map( ({data}) => data),
      map( (items) => GifsMapper.mapGiphtItemToGifArray(items)),

        //Usar efectos secundarios para guardar historial del usuario
        tap( items => {
          //Actualizar señal computada agregando ({}) sirve para agregar nuevas llaves
          this.searchHistory.update( (history) => ({
            ...history, //agrega el historial que ya estaba
            [query.toLowerCase()]: items //apunta a items para agregar nueva data
          }) )
        })
    )
    /*subscribe( (resp) => {
      const gifs = GifsMapper.mapGiphtItemToGifArray(resp.data);
      this.searchGif.set(gifs);
      console.log(gifs);
    });
    */
  }

  //Donde hemos guardado nuestro historial {"gas": {}, "agua": {}}
  //usando query buscamos en nuestras llaves como gas{}
  getHistoryGifs(query: string): Gif[]{
    return this.searchHistory()[query] ?? [];
  }

}
