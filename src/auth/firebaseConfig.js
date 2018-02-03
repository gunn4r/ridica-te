import firebase from 'firebase'
import ReduxSagaFirebase from 'redux-saga-firebase'

export const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCMPF7um_G2Z2JFo8ZJYzfJZI-bfnbicPw",
    authDomain: "ridica-te.firebaseapp.com",
    databaseURL: "https://ridica-te.firebaseio.com",
    projectId: "ridica-te",
    storageBucket: "ridica-te.appspot.com",
    messagingSenderId: "190048613046"
})

// Initialize Redux-Saga-Firebase
export const rsf = new ReduxSagaFirebase(firebase)
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export default firebaseApp