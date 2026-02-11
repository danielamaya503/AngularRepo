import { Component, signal } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {environment} from '../environments/environment';
import {Footer} from './shared/component/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    Footer
  ],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('country-app');
  protected readonly environment = environment;
}
