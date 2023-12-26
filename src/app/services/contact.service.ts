// src/app/services/contact.service.ts

import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contactosCollection: AngularFirestoreCollection<any>;

  constructor(private firestore: AngularFirestore) {
    this.contactosCollection = this.firestore.collection<any>('contactos');
  }

  getContactos(): Observable<any[]> {
    return this.contactosCollection.valueChanges();
  }

  agregarContacto(nuevoContacto: any) {
    this.contactosCollection.add(nuevoContacto);
  }

  getContactoPorTelefono(numeroTelefono: string): Observable<any[]> {
    return this.firestore.collection('contactos', ref => ref.where('telefono', '==', numeroTelefono)).valueChanges();
  }

  getContactoPorId(contactoId: string): Observable<any> {
    return this.firestore.doc(`contactos/${contactoId}`).valueChanges();
  }

  // Puedes agregar más funciones según tus necesidades

  actualizarContacto(contacto: any) {
    // Implementa la lógica para actualizar el contacto en Firebase
  }
}
