import {Component, inject, signal} from '@angular/core';
import {GifsList} from '../../components/gifs-side-menu/gifs-list/gifs-list';
import {GifsService} from '../../services/gifs.service';
import {Gif} from '../../interfaces/gifs-interface';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.html',
  imports: [
    GifsList
  ]
})
export default class SearchPage {

  //Servicio que contiene las APIs
  gifsService = inject(GifsService);
  //Signal que servira para enviar Gifs
  gifs = signal<Gif[]>([]);

  //forma de enviar query para APIs
  onSearch(query: string){
    this.gifsService.searchGifs(query).subscribe( (resp) => {
        this.gifs.set(resp);
    });
  }


}
