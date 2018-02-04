import firebase from 'firebase'
import 'firebase/firestore' // Need this for firestore side effects.
import ReduxSagaFirebase from 'redux-saga-firebase'

// Init firebase appzzzz
export const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCMPF7um_G2Z2JFo8ZJYzfJZI-bfnbicPw',
  authDomain: 'ridica-te.firebaseapp.com',
  databaseURL: 'https://ridica-te.firebaseio.com',
  projectId: 'ridica-te',
  storageBucket: 'ridica-te.appspot.com',
  messagingSenderId: '190048613046',
})

// Initialize Redux-Saga-Firebase
export const rsf = new ReduxSagaFirebase(firebase, firebase.firestore())

// Init auth provider
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

// Export that shiz
export default firebaseApp
