import {Component, inject} from '@angular/core';
import {GifsList} from '../../components/gifs-side-menu/gifs-list/gifs-list';
import {GifsService} from '../../services/gifs.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.html',
  imports: [
    GifsList
  ]
})
export default class SearchPage {

  gifsService = inject(GifsService);

  onSearch(query: string){
    this.gifsService.searchGifs(query).subscribe( (resp) => {

    });
  }


}
