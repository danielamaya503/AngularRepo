import {Component, Input, signal} from '@angular/core';

@Component({
  selector: 'gifs-list-item',
  imports: [],
  templateUrl: './gifs-list-item.html',
})
export class GifsListItem {

  //input que tomara nuestro objecto en tipo string gracias a @for
  @Input({required: true}) gifsImagen : string = "";

}
