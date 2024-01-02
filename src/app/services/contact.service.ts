// src/app/services/contact.service.ts

import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable, catchError, of } from 'rxjs';
import { map } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { tap } from 'rxjs';

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
    // Generar un nuevo identificador utilizando uuidv4
    const nuevoId = uuidv4();
    
    // Agregar el identificador al nuevo contacto
    nuevoContacto.id = nuevoId;
  
    // Agregar el contacto con el nuevo identificador
    this.contactosCollection.doc(nuevoId).set(nuevoContacto);
  }
  getContactoPorTelefono(numeroTelefono: string): Observable<any[]> {
    return this.firestore.collection('contactos', ref => ref.where('telefono', '==', numeroTelefono)).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as any;
          const id = a.payload.doc.id;
  
          if (!data.id) {
            console.error('ID de contacto no válido: el campo "id" está ausente o es undefined.');
            // Puedes lanzar una excepción aquí o manejarlo de acuerdo a tus necesidades
          }
  
          return { id, ...data };
        });
      })
    );
  }
  

  getContactoPorId(contactoId: string): Observable<any> {
    return this.firestore.doc(`contactos/${contactoId}`).valueChanges().pipe(
      catchError((error: any) => {
        console.error('Error al obtener contacto por ID:', error);
        return of(null); // Devuelve un observable con valor null en caso de error
      })
    );
  }

  getContactoPorIdOTelefono(identificador: string): Observable<any[]> {
    const campo = isNaN(Number(identificador)) ? 'id' : 'telefono';
    return this.firestore.collection('contactos', ref => ref.where(campo, '==', identificador)).snapshotChanges().pipe(
      map(actions => {
        const contactos = actions.map(a => {
          const data = a.payload.doc.data() as any;
          const id = a.payload.doc.id;
  
          if (!data.id) {
            console.error('ID de contacto no válido: el campo "id" está ausente o es undefined.');
            // Puedes lanzar una excepción aquí o manejarlo de acuerdo a tus necesidades
          }
  
          return { id, ...data };
        });
  
        console.log('Contactos obtenidos por ID o Teléfono:', contactos);  // Agrega esta línea
  
        return contactos;
      })
    );
  }
  async actualizarContacto(contacto: any) {
    try {
      const id = contacto.id;
  
      if (!id) {
        console.error('ID de contacto no válido: el campo "id" está ausente o es undefined.');
        throw new Error('ID de contacto no válido');
      }
  
      // Copia el objeto para evitar problemas de referencia
      const contactoActualizado = { ...contacto };
  
      // Elimina el campo 'id' del objeto para que no se incluya en la actualización
      delete contactoActualizado.id;
  
      // Actualiza el contacto en la base de datos
      await this.contactosCollection.doc(id).set(contactoActualizado); // Cambiado a set en lugar de update
      console.log('Contacto actualizado con éxito.');
    } catch (error) {
      console.error('Error al actualizar el contacto:', error);
      throw error;
    }
  }
  
  
  async verificarExistenciaDocumento(contactoId: string): Promise<boolean> {
    try {
      // Obtiene el documento por ID
      const documento = await this.firestore.doc(`contactos/${contactoId}`).get().toPromise();
      
      // Verifica si el documento existe
      const existe: boolean = !!documento?.exists;
      console.log(`Documento con ID ${contactoId} existe: ${existe}`);
      return existe;
    } catch (error) {
      console.error('Error al verificar la existencia del documento:', error);
      throw error;
    }
  } 
  
}
  
  
  
  
  

