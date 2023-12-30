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

  actualizarContacto(contacto: any) {
    const id = contacto.id; // Asegúrate de tener un campo 'id' en tu modelo

    // Copia el objeto para evitar problemas de referencia
    const contactoActualizado = { ...contacto };

    // Elimina el campo 'id' del objeto para que no se incluya en la actualización
    delete contactoActualizado.id;

    // Actualiza el contacto en la base de datos
    return this.firestore.doc(`contactos/${id}`).update(contactoActualizado);
  }
}
