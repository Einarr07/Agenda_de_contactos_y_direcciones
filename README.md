# Agenda de contactos
Pasos para la instalación: 
# Instalar Ionic CLI de forma global
- npm install -g @ionic/cli
# Crear un nuevo proyecto Ionic con Angular
- ionic start Agenda_de_contactos_y_direcciones blank --type=angular
- cd Agenda_de_contactos_y_direcciones
# Instalar módulos para la cámara y la galería
- ionic cordova plugin add cordova-plugin-camera
- npm install @ionic-native/camera

# Instalar módulos para geolocalización
- ionic cordova plugin add cordova-plugin-geolocation
- npm install @ionic-native/geolocation

# Instalar módulos para almacenamiento de imágenes
- npm install @ionic/storage-angular

# Instalar módulos para formularios reactivos
- npm install @angular/forms

# Servicio para el CRUD
- ionic generate service services/contact

# Lista de contactos
- ionic generate page pages/contact-list

# Detalles del contacto
- ionic generate page pages/contact-detail

# Agregar contacto
- ionic generate page pages/add-contact

# Editar contacto
- ionic generate page pages/edit-contact
# Almacenar datos en Firestore Database
- AngularFirestoreModule

# FIREBASE
- npm install firebase
- npm install @angular/fire firebase

# Geolocalización
- npm i cordova-plugin-geolocation --legacy-peer-deps

- npm i @ionic-native/geolocation --legacy-peer-deps

- npm i cordova-plugin-nativegeocoder --legacy-peer-deps

- npm i @ionic-native/native-geocoder --legacy-peer-deps

- npm i @ionic-native/core --force

# Generador de ids

- npm install uuid --legacy-peer-dep

# Generar la APK
 comados: ng build 'para construir la apk', npx cap sync android 'para guardar todos los cambios', npx cap open android 'para mandar la aplicación a desplegarse en android studio'

# Enlace del video de manual de usuario y retos
https://www.youtube.com/watch?v=lRLjueLfI48

#Captuiras de Pantalla de la aplicacion 🎞️
#Registrarse 👨‍💻
![image](https://github.com/Einarr07/Agenda_de_contactos_y_direcciones/assets/85316345/5fe87ee5-57e8-4835-9914-dd2a8c8ef6b5)


