
import { NavbarComponent } from '../navbar/navbar.component';
import { Component, Input, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NavbarComponent, NgClass],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit{

  isLoaded: boolean = false;


  ngOnInit() {
    // Si la imagen ya está en caché, forzamos la animación
    setTimeout(() => {
      this.isLoaded = true;
    }, 100);
  }

  onImageLoad() {
    this.isLoaded = true;
  }

}
