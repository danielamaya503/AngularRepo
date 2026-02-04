import {Component, computed, inject, signal} from '@angular/core';
import {GifsList} from '../../components/gifs-side-menu/gifs-list/gifs-list';
import {GifsService} from '../../services/gifs.service';

//obejcto que mandaremos a hijo a hijo para que nuestro componente resiva nuestras imagenes
/*const imageUrl: string[] = [
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
];*/

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


}
