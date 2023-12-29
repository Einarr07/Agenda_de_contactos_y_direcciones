// register.component.ts

import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.scss'],
})
export class RegisterComponent {
  email = '';
  password = '';
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  async register() {
    try {
      await this.authService.register(this.email, this.password);
      console.log('Registro exitoso');
      this.router.navigate(['/login']);
    } catch (error: any) {
      this.errorMessage = error.message;
    }
  }
}
