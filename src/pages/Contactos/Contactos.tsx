import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, set, remove, onValue } from 'firebase/database';
import { firebaseConfig } from '../../firebaseConfig';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonInput,
  IonIcon,
  IonToast,
} from '@ionic/react';
import { add, trash, create } from 'ionicons/icons';
import './Contactos.css';

// Inicializa Firebase con la configuración
const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);

interface Contacto {
  nombre: string;
  apellido: string;
  edad: number;  // Cambiado a number
  celular: string;
}

const Contactos: React.FC = () => {
  const [contactos, setContactos] = useState<Contacto[]>([]);
  const [nuevoContacto, setNuevoContacto] = useState<Contacto>({
    nombre: '',
    apellido: '',
    edad: 0,  // Cambiado a 0
    celular: '',
  });
  const [editandoContacto, setEditandoContacto] = useState<number | null>(null);
  const [mostrarToast, setMostrarToast] = useState<boolean>(false);
  const [mensajeToast, setMensajeToast] = useState<string>('');

  useEffect(() => {
    const dbRef = ref(db, 'contactos');

    // Escucha los cambios en la base de datos y actualiza el estado
    const dbListener = onValue(dbRef, (snapshot) => {
      const datos = snapshot.val();
      if (datos) {
        setContactos(Object.values(datos));
      } else {
        setContactos([]);
      }
    });

    // Limpia el listener cuando el componente se desmonta
    return () => {
      dbListener();
    };
  }, [db]);

  const agregarContacto = () => {
    if (
      nuevoContacto.nombre.trim() !== '' &&
      nuevoContacto.apellido.trim() !== '' &&
      nuevoContacto.edad.toString().trim() !== '' &&
      nuevoContacto.celular.trim() !== ''
    ) {
      // Agrega el nuevo contacto a la base de datos
      const newContactoRef = push(ref(db, 'contactos'));
      set(newContactoRef, nuevoContacto);
      setNuevoContacto({
        nombre: '',
        apellido: '',
        edad: 0,
        celular: '',
      });
      mostrarMensaje('Contacto agregado');
    } else {
      mostrarMensaje('Por favor, complete todos los campos');
    }
  };

  const editarContacto = (index: number) => {
    setEditandoContacto(index);
  };

  const guardarEdicion = (index: number, nuevoContacto: Contacto) => {
    // Actualiza el contacto en la base de datos
    const contactoId = Object.keys(contactos[index])[0];
    set(ref(db, `contactos/${contactoId}`), nuevoContacto);

    setEditandoContacto(null);
    mostrarMensaje('Contacto editado');
  };

  const cancelarEdicion = () => {
    setEditandoContacto(null);
  };

  const eliminarContacto = (index: number) => {
    // Elimina el contacto de la base de datos
    const contactoId = Object.keys(contactos[index])[0];
    remove(ref(db, `contactos/${contactoId}`));

    mostrarMensaje('Contacto eliminado');
  };

  const mostrarMensaje = (mensaje: string) => {
    setMensajeToast(mensaje);
    setMostrarToast(true);
    setTimeout(() => {
      setMostrarToast(false);
    }, 2000);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Contactos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {contactos.map((contacto: any, index) => (
            <IonItem key={index}>
              {editandoContacto === index ? (
                <>
                  <IonLabel position="stacked">Nombre</IonLabel>
                  <IonInput
                    value={contacto.nombre}
                    onIonChange={(e) =>
                      guardarEdicion(index, { ...contacto, nombre: e.detail.value! })
                    }
                  ></IonInput>

                  <IonLabel position="stacked">Apellido</IonLabel>
                  <IonInput
                    value={contacto.apellido}
                    onIonChange={(e) =>
                      guardarEdicion(index, { ...contacto, apellido: e.detail.value! })
                    }
                  ></IonInput>

                  <IonLabel position="stacked">Edad</IonLabel>
                  <IonInput
                    value={contacto.edad.toString()}
                    onIonChange={(e) =>
                      guardarEdicion(index, { ...contacto, edad: +e.detail.value! })
                    }
                  ></IonInput>

                  <IonLabel position="stacked">Celular</IonLabel>
                  <IonInput
                    value={contacto.celular}
                    onIonChange={(e) =>
                      guardarEdicion(index, { ...contacto, celular: e.detail.value! })
                    }
                  ></IonInput>

                  <IonButton
                    color="success"
                    onClick={() => guardarEdicion(index, contacto)}
                  >
                    Guardar
                  </IonButton>
                  <IonButton color="danger" onClick={cancelarEdicion}>
                    Cancelar
                  </IonButton>
                </>
              ) : (
                <>
                  <IonLabel>{`Nombre: ${contacto.nombre}`}</IonLabel>
                  <IonLabel>{`Apellido: ${contacto.apellido}`}</IonLabel>
                  <IonLabel>{`Edad: ${contacto.edad}`}</IonLabel>
                  <IonLabel>{`Celular: ${contacto.celular}`}</IonLabel>

                  <IonButton color="warning" onClick={() => editarContacto(index)}>
                    <IonIcon icon={create} />
                  </IonButton>
                  <IonButton color="danger" onClick={() => eliminarContacto(index)}>
                    <IonIcon icon={trash} />
                  </IonButton>
                </>
              )}
            </IonItem>
          ))}
        </IonList>

        <IonItem>
          <IonLabel position="stacked">Nuevo Contacto</IonLabel>
          <IonInput
            value={nuevoContacto.nombre}
            onIonChange={(e) =>
              setNuevoContacto({ ...nuevoContacto, nombre: e.detail.value! })
            }
          />
          <IonLabel position="stacked">Apellido</IonLabel>
          <IonInput
            value={nuevoContacto.apellido}
            onIonChange={(e) =>
              setNuevoContacto({ ...nuevoContacto, apellido: e.detail.value! })
            }
          />
          <IonLabel position="stacked">Edad</IonLabel>
          <IonInput
            value={nuevoContacto.edad.toString()}
            onIonChange={(e) =>
              setNuevoContacto({ ...nuevoContacto, edad: +e.detail.value! })
            }
          />
          <IonLabel position="stacked">Celular</IonLabel>
          <IonInput
            value={nuevoContacto.celular}
            onIonChange={(e) =>
              setNuevoContacto({ ...nuevoContacto, celular: e.detail.value! })
            }
          />
        </IonItem>

        <IonButton expand="full" onClick={agregarContacto}>
          <IonIcon icon={add} />
          <IonLabel>Agregar Contacto</IonLabel>
        </IonButton>

        <IonToast
          isOpen={mostrarToast}
          onDidDismiss={() => setMostrarToast(false)}
          message={mensajeToast}
          duration={2000}
          position="top"
        />
      </IonContent>
    </IonPage>
  );
};

export default Contactos;
