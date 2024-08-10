import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { PaginasabComponent } from '../paginasab/paginasab.component';
import { PaginascdComponent } from '../paginascd/paginascd.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NavbarComponent, PaginasabComponent, PaginascdComponent, CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'] // Corrección: 'styleUrls' en lugar de 'styleUrl'
})
export class AboutComponent implements OnInit {
  currentComponent: string = 'ceremonia'; // Componente predeterminado
  isMenuOpen = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    setTimeout(() => {
      const selectedElement = document.querySelector('.infoLeftMenuItemSelected') as HTMLElement;
      if (selectedElement) {
        this.renderer.addClass(selectedElement, 'focused');
        selectedElement.click();
      } else {
        console.log('No se encontró el elemento con la clase infoLeftMenuItemSelected');
      }
    }, 0);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  selectComponent(component: string) {
    this.currentComponent = component;
    this.isMenuOpen = false; // Cierra el menú después de seleccionar
  }

  onSelectChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectComponent(selectElement.value);
  }
}
