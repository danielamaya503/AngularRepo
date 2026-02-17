import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-nav',
  imports: [
    RouterLink
  ],
  templateUrl: './nav.html',
})
export class Nav {

  protected readonly environment = environment;
}
