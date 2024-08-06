import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  passwordValue:string = '';

  constructor(private router: Router) {}


  redirect() {
    if(this.passwordValue === 'IMLBODA') {
      this.router.navigate(['/home']);
    }
  }
}
