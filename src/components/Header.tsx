import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonImg } from '@ionic/react'
import React from 'react'
import '../pages/Home.css';
import { local_images } from './images/images';

const Header: React.FC = function () {
    return (
        <IonHeader>
            <IonToolbar color='dark'>
                <IonTitle className='web'  >Hustler Engineering   Community </IonTitle>
                <div className="ion-padding mobile"> <IonImg style={{ width: '50px' }} src={local_images.logo}></IonImg></div>
                <IonButtons slot="end">
                    <IonButton href="/home#about">About</IonButton>
                    <IonButton href="/home#events">Events</IonButton>
                    <IonButton href="/home#team">Team</IonButton>
                    <IonButton  href="/home#upcoming">Upcoming</IonButton>
                    <IonButton routerLink='/prerequisites' className='web' shape='round' fill='solid' color='warning'>Design Competition</IonButton>
                </IonButtons>
            </IonToolbar>
        </IonHeader>
    )
}

export default Header