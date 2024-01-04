<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Agenda de Contactos - README</title>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      margin: 20px;
      line-height: 1.6;
    }

    h1, h2 {
      color: #333;
    }

    ol {
      list-style-type: decimal;
      margin-left: 20px;
    }

    pre {
      background-color: #f5f5f5;
      padding: 10px;
      overflow: auto;
    }

    code {
      font-family: 'Courier New', Courier, monospace;
      color: #333;
    }
  </style>
</head>
<body>

  <h1>Agenda de Contactos</h1>

  <h2>Pasos de Instalación</h2>

  <ol>
    <li>
      <p>Instalar Ionic CLI globalmente</p>
      <pre><code>npm install -g @ionic/cli</code></pre>
    </li>

    <li>
      <p>Crear un nuevo proyecto Ionic con Angular</p>
      <pre><code>
ionic start Agenda_de_contactos_y_direcciones blank --type=angular
cd Agenda_de_contactos_y_direcciones
      </code></pre>
    </li>

    <li>
      <p>Instalar módulos para la cámara y la galería</p>
      <pre><code>
ionic cordova plugin add cordova-plugin-camera
npm install @ionic-native/camera
      </code></pre>
    </li>

    <li>
      <p>Instalar módulos para geolocalización</p>
      <pre><code>
ionic cordova plugin add cordova-plugin-geolocation
npm install @ionic-native/geolocation
      </code></pre>
    </li>

    <li>
      <p>Instalar módulos para almacenamiento de imágenes</p>
      <pre><code>
npm install @ionic/storage-angular
      </code></pre>
    </li>

    <li>
      <p>Instalar módulos para formularios reactivos</p>
      <pre><code>
npm install @angular/forms
      </code></pre>
    </li>

    <li>
      <p>Servicio para el CRUD</p>
      <pre><code>
ionic generate service services/contact
      </code></pre>
    </li>

    <li>
      <p>Lista de contactos</p>
      <pre><code>
ionic generate page pages/contact-list
      </code></pre>
    </li>

    <li>
      <p>Detalles del contacto</p>
      <pre><code>
ionic generate page pages/contact-detail
      </code></pre>
    </li>

    <li>
      <p>Agregar contacto</p>
      <pre><code>
ionic generate page pages/add-contact
      </code></pre>
    </li>

    <li>
      <p>Editar contacto</p>
      <pre><code>
ionic generate page pages/edit-contact
      </code></pre>
    </li>

    <li>
      <p>Almacenar datos en Firestore Database</p>
      <pre><code>
npm install firebase
npm install @angular/fire firebase
      </code></pre>
    </li>

    <li>
      <p>Configuración para geolocalización</p>
      <pre><code>
npm i cordova-plugin-geolocation --legacy-peer-deps
npm i @ionic-native/geolocation --legacy-peer-deps
npm i cordova-plugin-nativegeocoder --legacy-peer-deps
npm i @ionic-native/native-geocoder --legacy-peer-deps
npm i @ionic-native/core --force
      </code></pre>
    </li>

    <li>
      <p>Instalar generador de IDs</p>
      <pre><code>
npm install uuid --legacy-peer-dep
      </code></pre>
    </li>

    <li>
      <p>Generar la APK</p>
      <pre><code>
ng build  # para construir la APK
npx cap sync android  # para guardar todos los cambios
npx cap open android  # para desplegar la aplicación en Android Studio
      </code></pre>
    </li>
  </ol>

  <p>Sigue estos pasos cuidadosamente para configurar y ejecutar la aplicación de Agenda de Contactos. ¡Disfruta utilizando la aplicación!</p>

</body>
</html>
