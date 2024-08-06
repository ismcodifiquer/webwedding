
import { Component, OnInit } from '@angular/core';
import { CardsComponent } from './cards/cards.component';
import { SliderComponent } from './slider/slider.component';
import { CommonModule } from '@angular/common';
import {FormularioComponent} from './formulario/formulario.component'
import { CountdownComponent } from './countdown/countdown/countdown.component';
import { provideRouter, RouterOutlet } from '@angular/router';








@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SliderComponent, CardsComponent, CommonModule, FormularioComponent, CountdownComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})
export class AppComponent implements OnInit{
  opacity=0;
  ngOnInit() {

  }

}
