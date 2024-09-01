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
      state('void', style({ opacity: 0 })),
      transition(':enter', [
        animate('2000ms ease-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class ContactComponent implements OnInit {
  showImage = false;

  ngOnInit() {
    setTimeout(() => this.showImage = true, 1000);
  }
}
