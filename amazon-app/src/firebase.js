import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLxsp5Xx30dLVgV2m40AdXz6zpH0yB3pg",
  authDomain: "challenge-a915b.firebaseapp.com",
  databaseURL: "https://challenge-a915b.firebaseio.com",
  projectId: "challenge-a915b",
  storageBucket: "challenge-a915b.appspot.com",
  messagingSenderId: "88361569404",
  appId: "1:88361569404:web:dc4543475866004edd0df9",
  measurementId: "G-2PE9XCXGVP"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};

