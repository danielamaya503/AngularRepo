import {Component, Input} from '@angular/core';
import {GifsListItem} from './gifs-list-item/gifs-list-item';

@Component({
  selector: 'gifs-list',
  imports: [
    GifsListItem
  ],
  templateUrl: './gifs-list.html',
})

export class GifsList {

  //creamos nuestro input que resivira nuestro objecto
   @Input({required: true}) gifsImage: string[] = [];

}

