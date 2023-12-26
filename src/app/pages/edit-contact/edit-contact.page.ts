// src/app/pages/edit-contact/edit-contact.page.ts

import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ContactService } from '../../services/contact.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  templateUrl: 'edit-contact.page.html',
  styleUrls: ['edit-contact.page.scss']
})
export class EditContactPage {
  contactoEditado = {
    nombre: '',
    apellido: '',
    direccion: '',
    telefono: '',
    correo: '',
    foto: ''
  };

  latitude: any = 0;
  longitude: any = 0;

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private contactService: ContactService,
    private geolocation: Geolocation
  ) {}

  ionViewWillEnter() {
    // Este método se ejecuta cada vez que la página está a punto de ser mostrada
    // Obtener el contacto a editar de los parámetros de navegación
    this.contactoEditado = (this.route.snapshot.data as any)['contacto'];
  }

  async guardarContactoEditado() {
    try {
      const ubicacion = await this.obtenerUbicacion();
      this.contactoEditado.direccion = ubicacion;

      // Llamada al servicio para actualizar el contacto en la base de datos
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

  onFileSelected(event: any) {
    console.log(event.target.files[0]);
  }

  volverAlHome() {
    this.navCtrl.navigateBack('/home');
  }

  openGoogleMaps() {
    window.open(`https://www.google.com/maps?q=${this.latitude},${this.longitude}`, '_system');
  }

  getCurrentCoordinates() {
    this.obtenerUbicacion();
  }
}
