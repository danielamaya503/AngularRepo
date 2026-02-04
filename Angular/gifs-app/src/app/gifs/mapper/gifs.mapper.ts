import {Gif} from '../interfaces/gifs-interface';
import {GiphyItem} from '../interfaces/giphy.interfaces';

export class GifsMapper{

  //metodo que retorna item de tipo GiphyItem (Interfaz)
  //metodo de tipo Gif(Interfaz)
  //retorna un objecto con el tipo Gif obligatorio
  static mapGiphyItemToGit(item: GiphyItem) : Gif{
    return {
      id: item.id,
      title: item.title,
      url: item.images.original.url,
    }
  }

  //metodo que retorna una array de tipo Gif[]
  // para metros de typo GiphyItem[] como array
  static  mapGiphtItemToGifArray(item: GiphyItem[]): Gif[]{
    return item.map(this.mapGiphyItemToGit);
  }
}
