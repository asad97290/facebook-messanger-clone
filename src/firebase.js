import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDS9XVqPWupgaLu-LVowuCh2yYRPUMmb2E",
  authDomain: "facebook-messanger-app.firebaseapp.com",
  databaseURL: "https://facebook-messanger-app.firebaseio.com",
  projectId: "facebook-messanger-app",
  storageBucket: "facebook-messanger-app.appspot.com",
  messagingSenderId: "494560481457",
  appId: "1:494560481457:web:4638bec1b97174f0e29290",
  measurementId: "G-4RQGT6KT4J",
});

const db = firebaseApp.firestore();

export default db;
