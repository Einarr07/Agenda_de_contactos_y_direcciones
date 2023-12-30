// src/app/pages/contact-list/contact-list.page.ts

import { Component, OnDestroy } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ContactService } from '../../services/contact.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact-list',
  templateUrl: 'contact-list.page.html',
  styleUrls: ['contact-list.page.scss']
})
export class ContactListPage implements OnDestroy {
  contactos: any[] = []; // Asegúrate de tener datos aquí o de que se llenen correctamente
  private contactosSubscription: Subscription;
  contactoSeleccionado: string | null = null;

  constructor(private navCtrl: NavController, private contactService: ContactService) {
    this.contactosSubscription = this.contactService.getContactos().subscribe(data => {
      this.contactos = data;
    });
  }

  ngOnDestroy() {
    // Asegúrate de desuscribirte para evitar posibles fugas de memoria
    if (this.contactosSubscription) {
      this.contactosSubscription.unsubscribe();
    }
  }

  ionViewDidEnter() {
    // Llena la lista de contactos cuando la vista entra (puede que no sea necesario si ya se actualiza con la suscripción)
    // this.contactos = this.contactService.getContactos();
  }

  verDetalles(numeroTelefono: string) {
    // Navega a la página de detalles y pasa el número de teléfono como parámetro
    this.navCtrl.navigateForward(`/contact-detail/${numeroTelefono}`);
    this.contactoSeleccionado = numeroTelefono; // Marca como seleccionado
  }

  agregarContacto() {
    // Navega a la página de agregar contacto
    this.navCtrl.navigateForward('/add-contact');
  }
}
