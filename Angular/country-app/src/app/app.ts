import { Component, signal } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {environment} from '../environments/environment';
import {Footer} from './shared/component/footer/footer';
import {Nav} from './shared/component/nav/nav';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Footer,
    Nav
  ],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('country-app');
  protected readonly environment = environment;
}
