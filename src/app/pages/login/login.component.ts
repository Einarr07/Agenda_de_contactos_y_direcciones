import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService, private route: Router) {}

  async signIn() {
    try {
      await this.authService.signIn(this.email, this.password);
      console.log('Inicio de sesión exitoso');
      this.route.navigate(['/home']);
    } catch (error: any) {  // <-- Agrega ": any" aquí para especificar el tipo
      console.error('Error al iniciar sesión:', error.message);
    }
  }
  goToRegisterPage() {
    this.route.navigate(['/register']);
  }
}
