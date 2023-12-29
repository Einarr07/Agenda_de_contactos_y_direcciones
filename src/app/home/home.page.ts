import { Component } from '@angular/core';
import { AuthService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    // Agrega la lógica para cerrar sesión aquí
    this.authService.signOut(); // Asume que tu servicio de autenticación tiene un método para cerrar sesión
    this.router.navigate(['/login']); // Redirige a la página de inicio de sesión
  }

}
