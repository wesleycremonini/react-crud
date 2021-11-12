import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const app = initializeApp({
    apiKey: "AIzaSyDrpLrwrq0i3aWfGdoFply6JsIzpj5WRF4",
    authDomain: "react-crud-dev.firebaseapp.com",
    databaseURL: "https://react-crud-dev-default-rtdb.firebaseio.com",
    projectId: "react-crud-dev",
    storageBucket: "react-crud-dev.appspot.com",
    messagingSenderId: "512249191321",
    appId: "1:512249191321:web:75e43a2400c52dc703d108"
})

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;