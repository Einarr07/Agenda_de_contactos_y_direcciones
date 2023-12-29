// auth.service.ts

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore) {}

  async signIn(email: string, password: string) {
    try {
      const userCredential = await this.afAuth.signInWithEmailAndPassword(email, password);

      // Verificar si userCredential.user es null antes de acceder a sus propiedades
      if (userCredential.user) {
        // Inicio de sesión exitoso
        const user = userCredential.user;
        
        // Puedes realizar acciones adicionales después del inicio de sesión si es necesario

      } else {
        // En este punto, userCredential.user es null, lo cual indica un problema en el inicio de sesión
        throw new Error('Inicio de sesión no exitoso.');
      }
    } catch (error: any) {
      // Manejar errores de inicio de sesión
      console.error('Error al iniciar sesión:', error.message);
      throw error; // Re-lanza el error para que el componente pueda manejarlo
    }
  }

  async register(email: string, password: string) {
    try {
      const userCredential = await this.afAuth.createUserWithEmailAndPassword(email, password);

      // Verificar si userCredential.user es null antes de acceder a sus propiedades
      if (userCredential.user) {
        // Usuario registrado con éxito
        const user = userCredential.user;
  
        // Guardar información adicional en Firestore si es necesario
        this.firestore.collection('users').doc(user.uid).set({
          email: user.email,
          // Otras propiedades que desees almacenar
        });
      } else {
        // En este punto, userCredential.user es null, lo cual indica un problema en el registro
        throw new Error('El usuario no se registró correctamente.');
      }
    } catch (error: any) {
      // Manejar errores de registro
      console.error('Error al registrar usuario:', error.message);
      throw error; // Re-lanza el error para que el componente pueda manejarlo
    }
  }
}
