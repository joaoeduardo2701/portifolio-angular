import { Component, signal } from '@angular/core';
import { Header } from './core/components/header/header';
import { Hero } from './pages/home/components/hero/hero';
import { Button } from "./shared/components/button/button";

@Component({
  selector: 'app-root',
  imports: [Header, Hero],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portifolio-angular');
}
