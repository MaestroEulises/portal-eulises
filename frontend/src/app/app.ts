import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Starfield } from './components/starfield/starfield';
import { WhatsAppButton } from './components/whatsapp-button/whatsapp-button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, WhatsAppButton, Starfield],
  templateUrl: './app.html',
})
export class App {}
