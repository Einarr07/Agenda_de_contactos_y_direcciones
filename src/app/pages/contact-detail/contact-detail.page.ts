// src/app/pages/contact-detail/contact-detail.page.ts

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: 'contact-detail.page.html',
  styleUrls: ['contact-detail.page.scss']
})
export class ContactDetailPage {
  contacto: any; // Asegúrate de ajustar el tipo de datos según tus necesidades

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private contactService: ContactService
  ) {}

  ionViewWillEnter() {
    // Obtén el número de teléfono de los parámetros de la URL
    const numeroTelefono = this.route.snapshot.paramMap.get('id');

    // Usa el servicio ContactService para obtener el contacto por número de teléfono
    this.contacto = numeroTelefono ? this.contactService.getContactoPorTelefono(numeroTelefono) : null;
  }
}
