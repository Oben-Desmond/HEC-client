import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonPage, IonPopover, IonRow, IonTitle, IonToolbar } from '@ionic/react'
import firebase from 'firebase';
import { logoGoogle } from 'ionicons/icons'
import React, { useState } from 'react'
import { useHistory } from 'react-router';
import { local_images } from '../components/images/images'
import { auth, firestore, storage } from "../Firebase/firebase";
import { ContentProvider } from '../types/@types';

//default content provider


const ContentLogin: React.FC = () => {

   const [registerModal, setregisterModal] = useState(false)
   //content provider state
    const [contentProvider, setcontentProvider] = useState<ContentProvider>()
    
    const history = useHistory()

    //google authentication with firebase auth
    function googleAuthUser() {
       const Provider = new firebase.auth.GoogleAuthProvider();
         firebase.auth().signInWithPopup(Provider).then(function(result) {
              // This gives you a Google Access Token. You can use it to access the Google API.
              var token:any = result?.credential?.providerId;
              // The signed-in user info.
              var user = result.user;
              setregisterModal(true)
              // ...
             if(user){
                const content_provider: ContentProvider = {
                    name: user.displayName || "",
                    email: user?.email || "",
                    phone_number:user?.phoneNumber||"",
                    photoUrl: user.photoURL || ""
                  }
                    setcontentProvider(content_provider)
                    storeCP_locally(content_provider)
                    firestore.collection("content_providers").doc(content_provider.email).set(content_provider)
                    history.push("/content/topics")

  
             }             
 

            }).catch(function(error) {
                alert(error)
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
            });

    }


  


    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="dark">
                    <IonTitle> Sign in</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonToolbar style={{ height: "100vh" }} color="light">
                    <IonGrid>
                        <div style={{ height: "10vh" }}></div>
                        <IonRow>
                            <IonCol></IonCol>
                            <IonCol size="12" sizeMd='8' sizeLg='6'>
                                <IonCard mode="ios" className="text-center ion-text-center">
                                    <IonImg style={{ height: '200px', margin: "auto" }} src={local_images.logo}></IonImg>
                                    <IonCardHeader>
                                        Welcome Content Writer Please Login
                                    </IonCardHeader>
                                    <IonCardContent  >
                                        <IonButton onClick={googleAuthUser}  color="dark">
                                            <IonIcon color="warning" icon={logoGoogle}></IonIcon>
                                            <IonLabel >oogle Sign in</IonLabel>
                                        </IonButton>
                                        <div style={{ height: "30px" }}></div>
                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                            <IonCol></IonCol>
                        </IonRow>
                    </IonGrid>
                </IonToolbar>
            </IonContent>
            
        </IonPage>
    )
}

export default ContentLogin


export function storeCP_locally(content_provider:ContentProvider){
    try{
        localStorage.setItem("content-provider", JSON.stringify(content_provider))
    }catch(e){
        console.log(e)
    }
}

export function getCP_locally():ContentProvider|null{
  try{
    let val =  localStorage.getItem("content-provider");
    if(val){
      return (JSON.parse(val))
    }
  }catch(e){
    console.log(e)
  }
   return null
}

