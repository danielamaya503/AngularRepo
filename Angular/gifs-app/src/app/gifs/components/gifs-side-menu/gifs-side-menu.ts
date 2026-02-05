import {Component, inject} from '@angular/core';
import {GifsSideMenuHeader} from './gifs-side-menu-header/gifs-side-menu-header';
import {GifsSideMenuOptions} from './gifs-side-menu-options/gifs-side-menu-options';
import {GifsService} from '../../services/gifs.service';

@Component({
  selector: 'gifs-side-menu',
  imports: [
    GifsSideMenuHeader,
    GifsSideMenuOptions
  ],
  templateUrl: './gifs-side-menu.html',
})

export class GifsSideMenu {

  gifsHitorial = inject(GifsService);

}
