// src/app/pages/edit-contact/edit-contact.page.ts

import { Component } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { ContactService } from '../../services/contact.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ActivatedRoute } from '@angular/router';
import { CameraResultType, CameraSource, Camera } from '@capacitor/camera';
import { v4 as uuidv4 } from 'uuid';  // Importa uuidv4


@Component({
  selector: 'app-edit-contact',
  templateUrl: 'edit-contact.page.html',
  styleUrls: ['edit-contact.page.scss']
})
export class EditContactPage {
  // Inicializar contactoEditado como un objeto vacío
  contactoEditado: any = {};

  latitude: any = 0;
  longitude: any = 0;

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private contactService: ContactService,
    private geolocation: Geolocation,
    private platform: Platform
  ) {}

  ionViewWillEnter() {
    const identificador = this.route.snapshot.paramMap.get('id');
    console.log('Identificador:', identificador);
  
    if (identificador) {
      this.contactService.getContactoPorId(identificador).subscribe((contacto: any) => {
        console.log('Contacto a editar:', contacto);
  
        if (contacto) {
          this.contactoEditado = {
            nombre: contacto.nombre || '',
            apellido: contacto.apellido || '',
            direccion: contacto.direccion || '',
            telefono: contacto.telefono || '',
            correo: contacto.correo || '',
            foto: contacto.foto || '',
            id: contacto.id || this.generarNuevoId(),
          };
        } else {
          console.warn('El contacto no existe.');
        }
      });
    }
  }
  
  
  private generarNuevoId(): string {
    // Lógica para generar un nuevo ID (por ejemplo, usando uuidv4)
    return 'nuevo-identificador';
  }

  obtenerNuevoId(): string {
    // Usa uuidv4 para generar un nuevo identificador único
    return uuidv4();
  }
  
  async guardarContactoEditado() {
    try {
      if (!this.contactoEditado.id) {
        console.error('ID de contacto no válido: el campo "id" está ausente o es undefined.');
        return;
      }
  
      await this.contactService.actualizarContacto(this.contactoEditado);
      console.log('Contacto actualizado con éxito.');
      this.navCtrl.navigateBack('/contact-list');
    } catch (error) {
      console.error('Error al actualizar el contacto:', error);
    }
  }

  async obtenerUbicacion(): Promise<string> {
    try {
      const position = await this.geolocation.getCurrentPosition();
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      const ubicacion = `Latitud: ${lat}, Longitud: ${lon}`;
      this.latitude = lat;
      this.longitude = lon;

      return ubicacion;
    } catch (error) {
      console.error('Error al obtener la ubicación:', error);
      throw error;
    }
  }

  async tomarFoto() {
    if (!this.platform.is('hybrid')) {
      console.log('La función de la cámara solo está disponible en dispositivos móviles.');
      return;
    }

    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });

    this.contactoEditado.foto = image.dataUrl;
  }

  async seleccionarFoto() {
    if (!this.platform.is('hybrid')) {
      console.log('La selección de la galería solo está disponible en dispositivos móviles.');
      return;
    }

    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Photos
    });

    this.contactoEditado.foto = image.dataUrl;
  }

  onFileSelected(event: any) {
    console.log(event.target.files[0]);
    // Puedes agregar lógica aquí para manejar la selección de un archivo desde el sistema de archivos
  }

  volverAlHome() {
    this.navCtrl.navigateBack('/home');
  }

  openGoogleMaps() {
    window.open(`https://www.google.com/maps?q=${this.latitude},${this.longitude}`, '_system');
  }

  getCurrentCoordinates() {
    this.obtenerUbicacion()
      .then(() => {
        console.log('Coordenadas obtenidas con éxito.');
      })
      .catch(error => {
        console.error('Error al obtener coordenadas:', error);
      });
  }
}