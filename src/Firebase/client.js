import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    // Aca va el objeto que nos da Firebase:
    apiKey: "AIzaSyDSGQoLwG9ENn8FoQAald2yWJPerKMYikw",
    authDomain: "mi-ecommerce-49676.firebaseapp.com",
    projectId: "mi-ecommerce-49676",
    storageBucket: "mi-ecommerce-49676.appspot.com",
    messagingSenderId: "494587031616",
    appId: "1:494587031616:web:9d09a993ebc152d6172fa5",
    measurementId: "G-HZDYMB6LTY"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);