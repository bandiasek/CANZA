import firebase from 'firebase'
import 'firebase/storage'
require('firebase/auth')

const firebaseConfig = {
      apiKey: "AIzaSyBXwn60pDYke1ziJsQpsjNGJ7coEZP8q4k",
      authDomain: "canza-e0d8e.firebaseapp.com",
      projectId: "canza-e0d8e",
      storageBucket: "canza-e0d8e.appspot.com",
      messagingSenderId: "1047154785488",
      appId: "1:1047154785488:web:b1c0b0cf66c4338b1cb2d5",
      measurementId: "G-731RJRVQVW"
    };

    const firebaseApp = firebase.initializeApp(firebaseConfig);

    export const db = firebaseApp.firestore();

    export const auth = firebase.auth();
    
    export const storage = firebase.storage();