import {AfterViewInit, Component, computed, ElementRef, inject, signal, viewChild} from '@angular/core';
import {GifsList} from '../../components/gifs-side-menu/gifs-list/gifs-list';
import {GifsService} from '../../services/gifs.service';
import {scrollStateService} from '../../../shared/Services/scroll-state.service';

@Component({
  selector: 'app-trending-page',
  imports: [
    GifsList
  ],
  templateUrl: './trending-page.html',
})

export default class TrendingPage implements  AfterViewInit {

  //crear propiedad para las imagenes
  //protected readonly imageUrl= imageUrl;
  //Servicio de nuestra api para poder consumirla
  gifsService = inject(GifsService);
  //Servicio donde obtendremos la data de nuestro scroll
  scrollStateService = inject(scrollStateService);

  protected readonly onscroll = onscroll;

  scrollDivRef = viewChild<ElementRef<HTMLDivElement>>("groupDiv");

  ngAfterViewInit() {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if (!scrollDiv) return;

    scrollDiv.scrollTop = this.scrollStateService.trendingScrollState();
  }

  //Ver scroll para hacer un infinityScroll
  //peticion de siguientes imagenes
  onScroll(event: Event){
    const scrollDiv = this.scrollDivRef()?.nativeElement;

    if( !scrollDiv) return;

    //espacio de pantalla 300
    const scrollTop = scrollDiv.scrollTop;
    //scroll que el usuario a hecho 300
    const clientHeight = scrollDiv.clientHeight;
    //tamaño de pantalla 907
    const scrollHeight = scrollDiv.scrollHeight;

    console.log(scrollDiv, scrollTop, clientHeight);

    //Verificar cuanto de scroll uso el usuario para tomar el final del scroll
    const isAtBottom: boolean = scrollTop + clientHeight + 300 >= scrollHeight;
    //mandarle una actualizacion al servicio para cambiar nuestro scroll
    this.scrollStateService.trendingScrollState.set(scrollTop);

    if(isAtBottom){
      this.gifsService.loadTrendingGifs();
    }
  }
}
