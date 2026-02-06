import {Component, computed, ElementRef, inject, signal, viewChild} from '@angular/core';
import {GifsList} from '../../components/gifs-side-menu/gifs-list/gifs-list';
import {GifsService} from '../../services/gifs.service';

@Component({
  selector: 'app-trending-page',
  imports: [
    GifsList
  ],
  templateUrl: './trending-page.html',
})

export default class TrendingPage {

  //crear propiedad para las imagenes
  //protected readonly imageUrl= imageUrl;
  gifsService = inject(GifsService);

  protected readonly onscroll = onscroll;

  scrollDivRef = viewChild<ElementRef>('groupDiv');

  onScroll(event: Event){
    const scrollDiv = this.scrollDivRef()?.nativeElement;
  }
}
