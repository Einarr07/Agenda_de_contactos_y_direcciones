import { Component, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ContactService } from '../../services/contact.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact-detail',
  templateUrl: 'contact-detail.page.html',
  styleUrls: ['contact-detail.page.scss']
})
export class ContactDetailPage implements OnDestroy {
  contacto: any = {};
  private contactoSubscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private contactService: ContactService,
    private cdRef: ChangeDetectorRef
  ) {}
  
  ionViewWillEnter() {
    const numeroTelefono = this.route.snapshot.paramMap.get('id');
    
    if (numeroTelefono) {
      this.contactoSubscription = this.contactService.getContactoPorTelefono(numeroTelefono).subscribe(
        (contactos) => {
          // Verifica si hay al menos un contacto
          if (contactos && contactos.length > 0) {
            // Asigna el primer elemento del array a la propiedad contacto
            this.contacto = contactos[0];
            console.log('Contacto:', this.contacto);
  
            // Forzar la detección de cambios manualmente
            this.cdRef.detectChanges();
          }
        },
        (error) => {
          console.error('Error al obtener el contacto:', error);
        }
      );
    }
  }
  
  ngOnDestroy() {
    // Desuscribirse para evitar fugas de memoria
    if (this.contactoSubscription) {
      this.contactoSubscription.unsubscribe();
    }
  }
}
