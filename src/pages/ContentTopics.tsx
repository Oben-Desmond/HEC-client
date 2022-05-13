import { IonAlert, IonAvatar, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonNote, IonPage, IonPopover, IonProgressBar, IonRow, IonSpinner, IonTextarea, IonTitle, IonToolbar, useIonViewDidEnter } from '@ionic/react'
import { add } from 'ionicons/icons'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { local_images } from '../components/images/images'
import { auth, firestore } from '../Firebase/firebase'
import { ContentProvider, ContentTopic } from '../types/@types'
import { getCP_locally } from './ContentLogin'
import * as uuid from "uuid";

export const ContentTopics = () => {

    //content provider state
    const [contentProvider, setcontentProvider] = useState<ContentProvider>()
    const [herourl, setherourl] = useState("https://searchengineland.com/wp-content/seloads/2018/09/writer-writing-ss-1920.jpg")
    const [content_topic, setcontent_topic] = useState<ContentTopic>()
    const [addTopic, setaddTopic] = useState(false)
    const [description, setdescription] = useState("")

    //all topics
    const [topics, settopics] = useState<ContentTopic[]>([])



    //loading state
    const [loading, setloading] = useState(false)

    const history = useHistory()

    useEffect(() => {
 
        verifyProviderLocally()
        //get content provider
        setloading(true)
        auth.onAuthStateChanged(async (res)=>{
            if(res && res.email){

               //get cotnent provider info from firestore.collection(
                   await firestore.collection("content_providers").doc(res.email).get().then((res)=>{
                       if(res.exists && res.data()){
                           setcontentProvider(res.data() as ContentProvider)
                           history.push("/content/topics")
                       }
                   })

                   setloading(false)
            }                         
        })

    }, [])

    useIonViewDidEnter(() => {
        let contentProvider: ContentProvider | null = getCP_locally() as ContentProvider
        console.log(contentProvider)
        if (contentProvider) {
        } else {

            history.push("/content/login")
        }
    })
    //function to verify if content provider is stored locally

    function verifyProviderLocally() {

        let contentProvider: ContentProvider | null = getCP_locally() as ContentProvider
        console.log(contentProvider)
        if (contentProvider) {
            setcontentProvider(contentProvider)
            //get current topic for content provider from firestore
            setloading(true)
            firestore.collection("content_providers").doc(contentProvider.email).collection("content_topic").onSnapshot(function (doc) {
                if (doc.size > 0) {
                    const last_topic = doc.docs[doc.size - 1].data() as ContentTopic
                    setcontent_topic(last_topic)
                }
                setloading(false)
            })



            getAllAvailableContentTopics()
        } else {

            history.push("/content/login")
        }

    }

    //adds topic to firestore
    async function addTopicToFirebase() {
        const content_topic: ContentTopic = {
            description: description,
            id: uuid.v4(),
            assigneTo: "",
            available: true
        }

        setloading(true)
        await firestore.collection("content_topics").doc(content_topic.id).set(content_topic)

        setloading(false)
        setdescription("")
    }

    //gets all available content topics
    function getAllAvailableContentTopics() {
        setloading(true)
        firestore.collection("content_topics").where("available", "==", true).onSnapshot(function (doc) {
            if (doc.size > 0) {
                settopics(doc.docs.map(doc => doc.data() as ContentTopic));
            }
            setloading(false)

        })
    }



    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="dark">
                    <IonAvatar slot="start">
                        <IonImg src={local_images.logo} />
                    </IonAvatar>
                    <IonTitle>Hustler Engineering Content Providers</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div style={{ backgroundImage: 'linear-gradient(to top right, black, white)' }}>
                    <img
                        style={{ height: "40vh", width: "100%", objectFit: "cover", objectPosition: "bottom", opacity: "0.4" }}
                        src={herourl} />
                </div>
                <div className="ion-padding ion-text-center">
                    <h2>
                        "Content is Anything that adds value to the reader's Life"
                    </h2>
                </div>

                <IonGrid>

                    {content_topic && content_topic.description && <IonRow>
                        <IonCol></IonCol>
                        <IonCol size="12" sizeMd='9' sizeLg="8" sizeXl='6'>

                            <IonCard className="card">
                                {contentProvider?.photoUrl && <IonToolbar className='ion-margin-vertical'>
                                    <IonAvatar style={{ margin: "auto" }}>
                                        <IonImg src={contentProvider?.photoUrl}></IonImg>
                                    </IonAvatar>
                                </IonToolbar>}
                                <IonCardHeader>
                                    <IonCardTitle>Your Current Topic</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    <IonLabel>
                                        {
                                            content_topic.description
                                        }
                                    </IonLabel>
                                </IonCardContent>
                                <IonToolbar className='ion-padding'>
                                    <IonItem lines="none">
                                        <IonButton color="success" target="__target" href="mailto:engineerhustler@gmail.com" onClick={addTopicToFirebase}
                                            slot='end' fill="outline">
                                            Submit Content
                                        </IonButton>
                                    </IonItem>
                                    <div className='ion-text-end ion-padding-end'>
                                        <span>
                                            or submit to <IonLabel color="warning">engineerhustler@gmail.com</IonLabel>
                                        </span>
                                    </div></IonToolbar>

                            </IonCard>

                        </IonCol>
                        <IonCol></IonCol>
                    </IonRow>}
                    {topics.length > 0 && (!content_topic || !content_topic?.description) ? <div className="ion-padding  ">
                        <h3 className="ion-text-center"> <IonLabel color="warning">Pick a topic you wish to write on</IonLabel>
                            <div>
                                <IonNote>{topics.length} topics left</IonNote>
                            </div>
                        </h3>
                    </div> :
                        <div className="ion-text-center">
                            {
                                loading && <IonSpinner></IonSpinner>
                            }
                            {
                                !loading && topics.length <= 0 && <h2><IonNote>No Topics Available</IonNote></h2>
                            }
                        </div>

                    }
                    <div
                        style={{ height: "60px" }}
                    ></div>
                    {(!content_topic || !content_topic.description) && <IonRow>
                        <IonCol></IonCol>
                        <IonCol size="12" sizeMd='9' sizeLg="8" sizeXl='6'>
                            {
                                topics.map((topic, index) => {
                                    return (
                                        <>  {
                                            contentProvider ? <TopicCard contentProvider={contentProvider} topic={topic} key={index}></TopicCard>
                                                :
                                                <div></div>
                                        }</>
                                    )
                                })
                            }
                        </IonCol>
                        <IonCol></IonCol>
                    </IonRow>}
                </IonGrid>
            </IonContent>
            <IonPopover isOpen={addTopic} onDidDismiss={() => setaddTopic(false)}>
                <IonContent>
                    <IonToolbar >
                        <IonCardContent>
                            <IonTitle>Add Topic</IonTitle>
                            <IonItem fill="outline">
                                <IonLabel position="floating">topic description</IonLabel>
                                <IonTextarea required disabled={loading}
                                    value={description}
                                    onIonChange={(e) => setdescription(e.detail.value!)}
                                ></IonTextarea>
                            </IonItem>
                            <IonToolbar>
                                <IonButton onClick={addTopicToFirebase} disabled={loading} color="success" slot='end'>Add</IonButton>
                            </IonToolbar>
                        </IonCardContent>
                    </IonToolbar>
                </IonContent>
                {loading && <IonProgressBar type="indeterminate" color="success" ></IonProgressBar>}
            </IonPopover>
            {contentProvider?.email == "obend678@gmail.com" && <IonFab color="success" vertical='bottom' horizontal='end'>
                <IonFabButton
                    onClick={() => setaddTopic(true)}
                >
                    <IonIcon icon={add}></IonIcon>
                </IonFabButton>
            </IonFab>}
        </IonPage>
    )
}




const TopicCard: React.FC<{ topic: ContentTopic, contentProvider: ContentProvider }> = ({ topic, contentProvider }) => {


    //confirm selection to topic
    const [confirmTopic, setconfirmTopic] = useState(false)

    //loading state
    const [loading, setloading] = useState(false)
    const history = useHistory()

    //function to assign topic to content provider
    async function assignTopicToContentProvider() {
        if (!contentProvider || !contentProvider.email || !topic.description) {
            history.push("/content/login")
            return
        }
        setloading(true)
        await firestore.collection("content_providers").doc(contentProvider.email).collection("content_topic").doc(topic.id).set(topic)
        await firestore.collection("content_topics").doc(topic.id).set({ ...topic, available: false })
        setloading(false)
        setconfirmTopic(false)
    }



    return (
        <div className="card ion-padding ion-margin-bottom">
            <IonToolbar>
                <IonLabel> {topic.description}</IonLabel>
                <IonButtons slot="end">
                    <IonButton onClick={() => setconfirmTopic(true)}>
                        {loading ? <IonSpinner /> : <IonLabel color="success"><u>Select</u></IonLabel>}
                    </IonButton>
                </IonButtons>
            </IonToolbar>
            <IonAlert
                header='Add Topic'
                message="Are you sure you want to assign this topic to your account? You can't change it afterwards "
                buttons={[{ text: 'Cancel', role: 'cancel' }, { text: "OK", handler: () => { assignTopicToContentProvider() } }]}
                isOpen={confirmTopic}
                onDidDismiss={() => { setconfirmTopic(false) }}
            ></IonAlert>
        </div>
    )
}