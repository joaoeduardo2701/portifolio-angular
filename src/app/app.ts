import { Component, signal } from '@angular/core';
import { Header } from './core/components/header/header';
import { Hero } from './pages/home/components/hero/hero';
import { About } from "./pages/home/components/about/about";
import { Skills } from "./skills/skills";

@Component({
  selector: 'app-root',
  imports: [Header, Hero, About, Skills],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
showBanner: boolean = true;

  closeBanner() {
    this.showBanner = false;
  }
}
