import {Component, computed, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {toSignal} from '@angular/core/rxjs-interop';
import {map} from 'rxjs';
import {GifsService} from '../../services/gifs.service';
import {GifsList} from '../../components/gifs-side-menu/gifs-list/gifs-list';

@Component({
  selector: 'app-history-page',
  imports: [
    GifsList
  ],
  templateUrl: './history-page.html',
})
export default class HistoryPage {

  //impirtar nuestro servicio para usar data
  gifsService = inject(GifsService);

  //Obtener la ruta activa
  //emitira valores segun los valores que se envien
  //Observable transformar en signal
  query = toSignal(
    inject(ActivatedRoute).params.pipe(
      // Transforma el objeto completo en SOLO el valor "query"
      // Entrada:  { query: "gasolina", page: "1" }
      // Salida:     "gasolina"
      map( params => params[`query`])
    )
  );

  gifsByKey  = computed( () => {
    return this.gifsService.getHistoryGifs(this.query());
  });

}
