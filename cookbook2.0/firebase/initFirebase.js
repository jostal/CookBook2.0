import {initializeApp} from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const clientCredentials = {
    apiKey: "AIzaSyDBmiGLI1R0F-V1GFfi8NeVbK6glMeMeRs",
    authDomain: "cookbook-2point0.firebaseapp.com",
    projectId: "cookbook-2point0",
    storageBucket: "cookbook-2point0.appspot.com",
    messagingSenderId: "1010782085985",
    appId: "1:1010782085985:web:774c3fdd7fd19da65edb20",
    measurementId: "G-RB2K9FVLVZ"
}

export default function initFirebase() {
    const app = initializeApp(clientCredentials);
    console.log("fb init.")
    return (app);
}
