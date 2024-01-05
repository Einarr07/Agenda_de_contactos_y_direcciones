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

# Capturas de Pantalla de la aplicacion 🎞️
# Registrarse 👨‍💻
![image](https://github.com/Einarr07/Agenda_de_contactos_y_direcciones/assets/85316345/5fe87ee5-57e8-4835-9914-dd2a8c8ef6b5)

# Iniciar Sesion 🥳
![image](https://github.com/Einarr07/Agenda_de_contactos_y_direcciones/assets/85316345/5f4453da-cda9-4122-953b-1ab1ada40e60)

# Pagina de Inicio 🔮
![image](https://github.com/Einarr07/Agenda_de_contactos_y_direcciones/assets/85316345/4c6ff1f2-e59b-4800-bf39-fa981d0a06af)

# Agregar contactos (con ubicacion) 📱
![image](https://github.com/Einarr07/Agenda_de_contactos_y_direcciones/assets/85316345/062d27db-2daf-493c-af26-85fbe697ca30)

# Visualizacion de la ubicacion 🌍
![image](https://github.com/Einarr07/Agenda_de_contactos_y_direcciones/assets/85316345/c3c6b0fe-1749-46c0-a418-3c9f87014dee)

# Lista de Contactos 📜
![image](https://github.com/Einarr07/Agenda_de_contactos_y_direcciones/assets/85316345/ed0fc2f1-5ee2-400f-a736-59618edebc80)

# FIREBASE
![image](https://github.com/Einarr07/Agenda_de_contactos_y_direcciones/assets/85316345/1cdb9163-0985-486f-a406-415820c766c7)
# Autenticacion (Usuarios) 👩🏻‍💻👨🏻‍💻
![image](https://github.com/Einarr07/Agenda_de_contactos_y_direcciones/assets/85316345/0d5062cd-c3e0-4793-adf7-5a12d7313245)
# Contactos 📝
![image](https://github.com/Einarr07/Agenda_de_contactos_y_direcciones/assets/85316345/dc55ef85-9efa-4419-acad-415d7d476138)









