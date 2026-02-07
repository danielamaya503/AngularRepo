import {Injectable, signal} from '@angular/core';

@Injectable( {providedIn: 'root'}
)
export class scrollStateService {
  //grabar el scroll
  trendingScrollState = signal(0);



}
