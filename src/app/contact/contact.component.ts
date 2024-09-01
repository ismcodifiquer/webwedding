import { NavbarComponent } from '../navbar/navbar.component';
import { Component, OnInit } from '@angular/core';
import { NgClass, CommonModule } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NavbarComponent, NgClass, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })), // Estado inicial (invisible)
      transition(':enter', [
        animate('2000ms ease-out', style({ opacity: 1 })) // Animación al entrar
      ])
    ]),
    trigger('jumpIn', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }), // Comienza fuera de la pantalla
        animate('700ms ease-out', style({ transform: 'translateX(0)', opacity: 1 })) // Salta hacia adentro
      ])
    ])
  ]


})
export class ContactComponent implements OnInit {
  showImage = false;

  ngOnInit() {
    setTimeout(() => this.showImage = true, 500);
  }
}
