// src/app/pages/add-contact/add-contact.page.ts

import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: 'add-contact.page.html',
  styleUrls: ['add-contact.page.scss']
})
export class AddContactPage {
  nuevoContacto = {
    nombre: '',
    apellido: '',
    direccion: '',
    telefono: '',
    correo: '',
    foto: ''
    // Agrega más propiedades según tus necesidades
  };

  constructor(private navCtrl: NavController, private contactService: ContactService) {}

  async guardarContacto() {
    try {
      await this.contactService.agregarContacto(this.nuevoContacto);
      console.log('Contacto agregado con éxito.');
      this.navCtrl.navigateBack('/contact-list');
    } catch (error) {
      console.error('Error al agregar el contacto:', error);
      // Aquí puedes manejar el error de alguna manera si es necesario
    }
  }

  onFileSelected(event: any) {
    // Manejo del archivo seleccionado
    console.log(event.target.files[0]);
  }

  volverAlHome() {
    this.navCtrl.navigateBack('/home');
  }
}
