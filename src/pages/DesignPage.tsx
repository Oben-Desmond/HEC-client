import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonCardContent, IonIcon, IonLabel, IonRippleEffect, IonCard, IonButton } from '@ionic/react'
import { documentSharp, logoXbox } from 'ionicons/icons'
import React from 'react'
import { docs } from '../components/images/docs'

const DesignPage = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="dark">
                    <IonTitle>Welcome Designer</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol size="12" sizeSm="6" sizeMd="4" >
                            <IonCard target="__blank" href={docs.design} button className="card" >
                                <IonCardContent>
                                    <IonToolbar color="none">
                                        <IonIcon className="ion-margin-end" slot="start" size="large" color="danger" icon={documentSharp}></IonIcon>
                                        <IonLabel>Download PDF</IonLabel>
                                    </IonToolbar>
                                </IonCardContent>
                            </IonCard >
                        </IonCol>
                        <IonCol size="12" sizeSm="6" sizeMd="4">
                            <IonCard target="__blank" href={docs.logo} button className="card" >
                                <IonCardContent>
                                    <IonToolbar color="none">
                                        <IonIcon className="ion-margin-end" slot="start" size="large" color="success" icon={logoXbox}></IonIcon>
                                        <IonLabel>Download Logo</IonLabel>
                                    </IonToolbar>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <IonToolbar>
                    <IonButton color="warning" target="__blank" href="https://forms.gle/urJeS2tp6CmwdpuK9">SUBMIT YOUR DESIGN</IonButton>
                </IonToolbar>
            </IonContent>
        </IonPage>
    )
}

export default DesignPage