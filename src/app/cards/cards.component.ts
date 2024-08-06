import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {

      cards = [
        {
          title: 'Iglesia de Campoamor',
          description: 'La ceremonia tendrá lugar en la iglesia de campoamor donde nos uniremos en santo matrimonio',
          image: './assets/campoamor.jpg'
        },
        {
          title: 'Salones el Atardecer',
          description: 'Después le echaremos gasolina a nuestras barrigas en este moderno Restaurante.',
          image: './assets/salones.jpg'
        },
        {
          title: 'Party Rock',
          description: 'Y para terminar bebidas & Rock And Roll',
          image: './assets/fieshta.webp'
        }
      ];


}
