import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<any>;

  constructor(private afAuth: AngularFireAuth) {
    this.user$ = this.afAuth.authState;
  }

  // Métodos de autenticación

  async signIn(email: string, password: string) {
    await this.afAuth.signInWithEmailAndPassword(email, password);
  }

  async signOut() {
    await this.afAuth.signOut();
  }
}
