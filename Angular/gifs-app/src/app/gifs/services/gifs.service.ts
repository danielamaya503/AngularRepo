import { HttpClient } from '@angular/common/http';
import {inject, Injectable, signal} from '@angular/core';
import { environment } from '@environments/environment';
import {GiphyItem, GiphyResponse} from '../interfaces/giphy.interfaces';
import {Gif} from '../interfaces/gifs-interface';
import {GifsMapper} from '../mapper/gifs.mapper';
import {map, tap} from 'rxjs';

//Decoratico de innjectable para usar service
@Injectable({providedIn: 'root'})
export class GifsService {

  //poder usar httpClient como put, post, get, delete
  private http = inject(HttpClient);
  //obtener data del api personalizada como signal
  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal(true);
  searchGif = signal<Gif[]>([]);

  constructor() {
    this.loadTrendingGifs();
    console.log("Service created")
  }

  loadTrendingGifs() {
    //llamar al endpoint de giphy
    //environment.giphyUrl contiene la url base de giphy
     this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
      //parametros de la consulta
      //como api key y limit
      params: {
        api_key: environment.giphyApiKey,
        limit: '25',
      },
       //siempre hay que suscribirse para crear una instancia
     }).subscribe( (resp) => {
        const gifs = GifsMapper.mapGiphtItemToGifArray(resp.data);
        this.trendingGifs.set(gifs);
        this.trendingGifsLoading.set(false);
        console.log(gifs);
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
    })
      .pipe(
      map( ({data}) => data),
      map( ({items}) => GifsMapper.mapGiphtItemToGifArray(items)),
    );

    /*subscribe( (resp) => {
      const gifs = GifsMapper.mapGiphtItemToGifArray(resp.data);
      this.searchGif.set(gifs);
      console.log(gifs);
    });
    */

  }

}
