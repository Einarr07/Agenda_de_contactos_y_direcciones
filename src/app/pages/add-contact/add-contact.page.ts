import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ContactService } from '../../services/contact.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

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
  };

  latitude: any = 0;
  longitude: any = 0;

  constructor(
    private navCtrl: NavController,
    private contactService: ContactService,
    private geolocation: Geolocation
  ) {}

  async guardarContacto() {
    try {
      const ubicacion = await this.obtenerUbicacion();
      this.nuevoContacto.direccion = ubicacion;

      await this.contactService.agregarContacto(this.nuevoContacto);
      console.log('Contacto agregado con éxito.');
      this.navCtrl.navigateBack('/contact-list');
    } catch (error) {
      console.error('Error al agregar el contacto:', error);
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
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Base64,
        source: CameraSource.Camera
      });
  
      this.nuevoContacto.foto = 'data:image/jpeg;base64,' + image.base64String;
    } catch (error) {
      console.error('Error al tomar la foto:', error);
    }
  }  

  async seleccionarFoto() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Base64,
        source: CameraSource.Photos
      });

      this.nuevoContacto.foto = 'data:image/jpeg;base64,' + image.base64String;
    } catch (error) {
      console.error('Error al seleccionar la foto:', error);
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];

    if (file) {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();

        reader.onload = (e: any) => {
          this.nuevoContacto.foto = e.target.result;
        };

        reader.readAsDataURL(file);
      } else {
        console.error('El archivo seleccionado no es una imagen.');
      }
    }
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
