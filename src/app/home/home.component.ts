import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CountdownComponent } from '../countdown/countdown/countdown.component';
import { FormularioComponent } from '../formulario/formulario.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CountdownComponent, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private router:Router) {

  }

  confirmform() {
    this.router.navigate(['/form'])
  }

}
