import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCV7rDQAUoXFjo-Xa4ALGN0NfXQdMdhe38",
    authDomain: "thedojomanagementsite.firebaseapp.com",
    projectId: "thedojomanagementsite",
    storageBucket: "thedojomanagementsite.appspot.com",
    messagingSenderId: "877562688795",
    appId: "1:877562688795:web:30bd906655683d9faacfbe"
  };

// init firebase
firebase.initializeApp(firebaseConfig);

// init services 
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }