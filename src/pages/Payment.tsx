import { IonAvatar, IonBackButton, IonButtons, IonCardContent, IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import Header from '../components/Header'
import { local_images } from '../components/images/images'

function Payment() {
    const [reference, setreference] = useState("")
    const location = useLocation()
    useEffect(() => {
         const ref:any= location.state
         if(ref){
             setreference(ref)
         }
    }, [location])

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="dark">
                    <IonButtons slot="start">
                        <IonBackButton defaultHref='/register'  mode='ios'></IonBackButton>
                    </IonButtons>
                    <IonTitle>Final Step</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonToolbar>
                    <IonTitle>Complete Registration</IonTitle>
                    <IonAvatar slot="end">
                        <IonImg src={local_images.logo}></IonImg>
                    </IonAvatar>
                </IonToolbar>
                <IonCardContent>
                    {
                        reference && <iframe style={{ minHeight: "100vh", width: "100%", overflow: 'none' }} src={`https://zitopay.africa/sci/?currency=XAF&amount=2000&receiver=sird655@gmail.com&memo=Register&ref=${reference}&notification_url=${"http://hustlerengineer.herokuapp.com/process-applications"}`}></iframe>
                    }
                </IonCardContent>
            </IonContent>
        </IonPage>
    )
}

export default Payment