import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';

@Injectable({providedIn: 'root'})
export class GifsService {

  //poder usar httpClient como put, post, get, delete
  private http = inject(HttpClient);

  constructor() {
    this.loadTrendingGifs();
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
     });
  }

}
