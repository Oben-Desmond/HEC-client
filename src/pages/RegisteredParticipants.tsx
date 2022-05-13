import { IonButton, IonCardTitle, IonCol, IonContent, IonGrid, IonIcon, IonImg, IonItem, IonLabel, IonPage, IonRow, IonSpinner, IonToolbar } from '@ionic/react'
import { logoWhatsapp } from 'ionicons/icons'
import React, { useEffect, useState } from 'react'
import { Participant } from '../components/componentTypes'
import Header from '../components/Header'
import { firestore } from '../Firebase/firebase'

const flag = "https://cdn.britannica.com/42/5042-004-7FF4ACCA/Flag-Cameroon.jpg"

const RegisteredParticipants:React.FC=  function() {
   
    const [participants, setparticipants] = useState<Participant[]>([])
    const [loading, setloading] = useState(false)

  useEffect(() => {
      getParticipants()
  }, [ ])
  
  async function getParticipants(){

    setloading(true)
    firestore.collection("participants").onSnapshot(res=>{
        const parts:any[]= res.docs.map(res=>res.data())
        setparticipants([...parts])
        setloading(false)
    })
  }

  async function verifyRegistered(){
        const email=  window.prompt("Enter email address")
        if(email){
            const val= participants.filter((part)=>part.email==email.toLowerCase())
            if(val.length>0){
                const a = document.createElement("a")
                a.href="https://chat.whatsapp.com/HJHewvBcVKdLOXVaqvcWr2"
                a.target="__blank"
                a.click();
            }else{
                alert("Only for participants")
            }
        }
        else{
            alert("email not inputted")
        }
  }

  return (
    <IonPage>
       <Header></Header>
       <IonContent>
           <IonToolbar>
               <div className="ion-padding text-center">
                   {loading&&<IonSpinner color='warning'></IonSpinner>}
               </div>
           </IonToolbar>
           <IonGrid>
               <IonRow>
                   <IonCol></IonCol>
                   <IonCol size="12" sizeMd='8'>
                       <h3>Participants</h3>
                           <div className="ion-padding card" style={{minHeight:"40vh"}}>
                               {
                                   participants.map((part,index)=>{
                                       return(
                                        <IonItem lines="none" color="light">
                                            <IonLabel>{part.name}</IonLabel>
                                            <IonImg style={{height:"20px"}} src={flag}></IonImg>
                                        </IonItem>
                                       )
                                   })
                               }
                           </div>
                           <div style={{height:50}}></div>
                           <h3>
                               Info
                           </h3>
                           <p>
                               The competition shall take place at <b>Jongo Hub bongo square Buea</b>. You are expected to be there at <b>9 AM</b> on the 23rd of April 2022.
                           </p>
                           <p>
                               Come with your Laptops, notebooks and pens. Anything you will need in competing. Incase of more information call <a href="tel:+237650589893">+237650589893</a>
                           </p>
                           <p>Practice your skills in advert video making, logo design, poster/flyer design and branding</p>

                           <br />
                           <p>
                               <IonButton color='success' onClick={verifyRegistered} target='__blank' >
                                  <IonIcon icon={logoWhatsapp} slot="start"></IonIcon> Join Whatsapp group</IonButton>
                           </p>
                   </IonCol>
                   <IonCol></IonCol>
               </IonRow>
           </IonGrid>
       </IonContent>
    </IonPage>
  )
}

export default RegisteredParticipants