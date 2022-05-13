
import firebase from "firebase";


export const config = {

  apiKey: "AIzaSyCHNycnDFAI9YoAmVBEyT9F10t585EzWK4",

  authDomain: "ultratechgenius.firebaseapp.com",

  databaseURL: "https://ultratechgenius.firebaseio.com",

  projectId: "ultratechgenius",

  storageBucket: "ultratechgenius.appspot.com",

  messagingSenderId: "55654899824",

  appId: "1:55654899824:web:5b3a7fe6484fbbb9a494b5",

  measurementId: "G-KXREG7KC8B"

}

const app = firebase.initializeApp(config)
const auth = app.auth()
const firestore = app.firestore()
const storage = app.storage()


export { auth, firestore, storage }




