import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [NavbarComponent, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {
  name: string = '';
  allergies: string = '';
  vegan: boolean = false;
  name2: string = '';

  onSubmit() {
    // Aquí puedes manejar el envío del formulario
    console.log('Nombre:', this.name);
    console.log('Alergias:', this.allergies);
    console.log('Es vegano:', this.vegan);
    // Aquí podrías hacer una llamada a un servicio para enviar los datos


    const subject = 'Formulario de Contacto boda Maria Luisa e Ismael';
    const body = `Nombre: ${this.name}\nNombre Acompañante: ${this.name2} \nAlergias: ${this.allergies}\nEs vegano: ${this.vegan ? 'Sí' : 'No'}`;
    const mailtoLink = `mailto:ismaelvi1601@icloud.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Abrir el cliente de correo predeterminado del usuario
    window.location.href = mailtoLink;



  }
}
