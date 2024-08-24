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
  asistir: boolean = false;
  noAsistir: boolean = false;
  celiaco: boolean = false;
  vegetariano: boolean=false;

  onSubmit() {
    // Aquí puedes manejar el envío del formulario
    console.log('Nombre:', this.name);
    console.log('Alergias:', this.allergies);
    console.log('Es vegano:', this.vegan);
    // Aquí podrías hacer una llamada a un servicio para enviar los datos


    const subject = 'Formulario de Contacto boda Maria Luisa e Ismael';
    const body = `¿Asistirás?: ${this.asistir ? 'Sí' : 'No'} \nNombre: ${this.name}\nNombre Acompañante: ${this.name2} \nAlergias: ${this.allergies}\nEs vegano: ${this.vegan ? 'Sí' : 'No'}\nEs vegetariano/a: ${this.vegetariano ? 'Si' : 'No'}\nEs celíaco/a: ${this.celiaco ? 'Si' : 'No'}`;
    const mailtoLink = `mailto:ismaelvi1601@icloud.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Abrir el cliente de correo predeterminado del usuario
    window.location.href = mailtoLink;



  }
  toggleCheckbox(option: string): void {
    if (option === 'asistir') {
      this.asistir = !this.asistir;
      if (this.asistir) {
        this.noAsistir = false;
      }
    } else if (option === 'noAsistir') {
      this.noAsistir = !this.noAsistir;
      if (this.noAsistir) {
        this.asistir = false;
      }
    }
  }
}
