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
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit{


  currentComponent: string = '';

  constructor(private rendered: Renderer2){}

  ngOnInit(){
    setTimeout(() => {
      const selectedElement = document.querySelector('.infoLeftMenuItemSelected') as HTMLElement;
      if (selectedElement) {
        this.rendered.addClass(selectedElement, 'focused');
        selectedElement.click();

      } else {
        console.log('No se encontró el elemento con la clase infoLeftMenuItemSelected');
      }
    }, 0);
  }

  selectComponent(component: string) {
    this.currentComponent = component;
  }

}
