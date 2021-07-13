import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyDDiApd0i6yQ4sihaWcmgSQycYB2_XzNXs",
    authDomain: "aprendiendo-redux.firebaseapp.com",
    projectId: "aprendiendo-redux",
    storageBucket: "aprendiendo-redux.appspot.com",
    messagingSenderId: "193215428009",
    appId: "1:193215428009:web:ff5692de541a43b82000b8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

  export {
      db,
      googleAuthProvider,
      firebase
  }