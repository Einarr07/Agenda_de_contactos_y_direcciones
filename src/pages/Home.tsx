import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  const navigateToAgendaContactos = () => {
    // Puedes usar window.location.href para cambiar la ubicación
    window.location.href = '/contactos';
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Bienvenido a la Agenda de Contactos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding page-content">
        <p className="page-description">
          Esta aplicación te permite gestionar tus contactos y sus ubicaciones. Puedes guardar datos, agregar fotos
          desde tu dispositivo y más. ¡Comienza ahora!
        </p>
        {/* Agrega un botón para ir a la Agenda de Contactos */}
        <IonButton expand="full" className="login-button" onClick={navigateToAgendaContactos}>
          Ir a la Agenda de Contactos
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
