import { IonAlert, IonAvatar, IonBreadcrumb, IonButton, IonCardContent, IonCardTitle, IonChip, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonInput, IonItem, IonLabel, IonModal, IonPage, IonRadio, IonRadioGroup, IonRow, IonSpinner, IonTextarea, IonTitle, IonToast, IonToolbar } from '@ionic/react'
import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { Application, Participant } from '../components/componentTypes'
import Header from '../components/Header'
import { local_images } from '../components/images/images'
import { firestore } from '../Firebase/firebase'
import * as uuid from 'uuid'
import axios from 'axios'

const defaultParticipant: Participant = { email: "", expectation: '', gender: "male", name: "", reason: "", registeredOn: Date.now(), tel: "" }

const Prerequisites: React.FC = () => {

    const [participant, setparticipant] = useState<Participant>(defaultParticipant)
    const [loading, setloading] = useState(false)
    const [initiatePayment, setinitiatePayment] = useState(false)
    const [showToast, setshowToast] = useState(false)
    const [reference, setreference] = useState(uuid.v4());
    const [registrationSuccess, setregistrationSuccess] = useState(false)

    const history = useHistory()

    async function submitInfo(e: any) {
        e.preventDefault()
        if (!participant.email) {
            return;
        }
        

        const application: Application = {
            participant,
            reference: reference
        }
        

        setloading(true)
        const existUser = await firestore.collection("applications").doc(participant.email).get();
        if (existUser.exists || existUser.data()) {

        }

        else {
            await firestore.collection("applications").doc(participant.email).set(application)
                .catch((err: any) => {
                    alert(err.message)
                })
        }

       

        firestore.collection("participants").onSnapshot(res => {
            const emails: any[] = res.docs.map((res) => res.data().email)
            if (emails.indexOf(participant.email) >= 0) {
                setregistrationSuccess(true)
                setinitiatePayment(false);
            }
        })

        if (window.innerWidth > 550) {
            setinitiatePayment(true)
        }
        else {
            history.push({ pathname: "/payment", state: reference })
        }

    }
    return (
        <IonPage>
            <Header></Header>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol></IonCol>
                        <IonCol size="12" sizeMd='8'>
                            <IonToolbar>
                                <IonCardTitle>Registration</IonCardTitle>
                            </IonToolbar>
                            <IonAlert buttons={[{ text: "ok" }]} header="Successful" message="Registration was successfull. See you at Jongo hub on the 23rd" isOpen={registrationSuccess} onDidDismiss={() => { setregistrationSuccess(false); setparticipant(defaultParticipant); setloading(false); history.push({ pathname: "/participants" }); setregistrationSuccess(false) }}></IonAlert>
                            <IonToast position='bottom' isOpen={showToast} onDidDismiss={() => setshowToast(false)} message="Email already used"></IonToast>
                            <div className="ion-padding card">
                                <IonCardContent>
                                    <form onSubmit={submitInfo}>
                                        <IonItem disabled={loading} lines="none" className='ion-margin-vertical' color="light">
                                            <IonLabel position='floating'>Enter your full names</IonLabel>
                                            <IonInput required value={participant?.name} onIonChange={(e) => {
                                                setparticipant({ ...participant, name: e.detail.value || "" })
                                            }}></IonInput>
                                        </IonItem>
                                        <IonItem disabled={loading} lines="none" className='ion-margin-vertical' color="light">
                                            <IonLabel position='floating'>Enter Email</IonLabel>
                                            <IonInput type="email" required value={participant?.email} onIonChange={(e) => {
                                                setparticipant({ ...participant, email: e.detail.value?.toLowerCase() || "" })
                                            }}></IonInput>
                                        </IonItem>
                                        <IonItem disabled={loading} lines="none" className='ion-margin-vertical' color="light">
                                            <IonLabel position='floating'>Enter phone number</IonLabel>
                                            <IonInput type='tel' required value={participant?.tel} onIonChange={(e) => {
                                                setparticipant({ ...participant, tel: e.detail.value || "" })
                                            }}></IonInput>
                                        </IonItem>
                                        <IonToolbar>
                                            <IonLabel>Gender</IonLabel>
                                            <IonRadioGroup value={participant?.gender || "male"} onIonChange={(e) => {
                                                setparticipant({ ...participant, gender: e.detail.value || "" })
                                            }}>
                                                <IonItem disabled={loading} lines="none">
                                                    <IonRadio value={"male"} slot="start"></IonRadio>
                                                    <IonLabel>Male</IonLabel>
                                                </IonItem>
                                                <IonItem disabled={loading} lines="none">
                                                    <IonRadio value={"female"} slot="start"></IonRadio>
                                                    <IonLabel>Female</IonLabel>
                                                </IonItem>
                                            </IonRadioGroup>
                                        </IonToolbar>
                                        <IonToolbar>
                                            <IonItem disabled={loading} lines="none" className='ion-margin-vertical' color="light">
                                                <IonLabel position='floating'>Reasons for participating</IonLabel>
                                                <IonTextarea required value={participant?.reason} onIonChange={(e) => {
                                                    setparticipant({ ...participant, reason: e.detail.value || "" })
                                                }}></IonTextarea>
                                            </IonItem>
                                            <IonItem disabled={loading} lines="none" className='ion-margin-vertical' color="light">
                                                <IonLabel position='floating'>What are your expectations</IonLabel>
                                                <IonTextarea required value={participant?.expectation} onIonChange={(e) => {
                                                    setparticipant({ ...participant, expectation: e.detail.value || "" })
                                                }}></IonTextarea>
                                            </IonItem>
                                        </IonToolbar>
                                        <IonToolbar className='ion-padding'>
                                            <button className='btn btn-dark web' type='submit'  >
                                                {loading ? <IonSpinner color="warning"></IonSpinner> : "submit"}
                                            </button>
                                            <button className='btn btn-dark mobile' type='submit'  >
                                                {loading ? <IonSpinner color="warning"></IonSpinner> : "submit"}
                                            </button >
                                        </IonToolbar>
                                    </form>
                                </IonCardContent>
                            </div>

                        </IonCol>
                        <IonCol></IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
            <IonModal isOpen={initiatePayment} onIonModalDidDismiss={() =>{ setinitiatePayment(false); axios.get("http://hustlerengineer.herokuapp.com/process-applications")}}>
                <IonToolbar color="dark">
                    <IonTitle>Complete Registration</IonTitle>
                    <IonAvatar slot="end">
                        <IonImg src={local_images.logo}></IonImg>
                    </IonAvatar>
                </IonToolbar><IonContent>
                    <IonCardContent>
                        <iframe style={{ minHeight: "100vh", width: "100%", overflow: 'none' }} src={`https://zitopay.africa/sci/?currency=XAF&amount=2000&receiver=sird655@gmail.com&memo=Register&ref=${reference}&notification_url=${"http://hustlerengineer.herokuapp.com/process-applications"}`}></iframe>
                    </IonCardContent>
                </IonContent>
            </IonModal>
        </IonPage>
    )
}

export default Prerequisites