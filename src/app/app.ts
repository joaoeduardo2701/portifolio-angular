import { Component } from '@angular/core';
import { Header } from './core/components/header/header';
import { Hero } from './pages/home/components/hero/hero';
import { About } from './pages/home/components/about/about';
import { Skills } from './pages/home/components/skills/skills';
import { Footer } from './pages/home/components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, About, Skills, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  showBanner: boolean = true;

  closeBanner() {
    this.showBanner = false;
  }
}
