
import firebase from 'firebase/app';
import 'firebase/firestore';




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwejwRFqWFXt8N91AYCuuwy1jVQUFbMsA",
  authDomain: "practicum-1ea42.firebaseapp.com",
  projectId: "practicum-1ea42",
  storageBucket: "practicum-1ea42.appspot.com", 
  messagingSenderId: "199308370017",
  appId: "1:199308370017:web:f5e815e67bc7d3a5e4ca20",
  };


  try {
    firebase.initializeApp(firebaseConfig);
  } catch(err){
    if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error', err.stack)}
  }
  const fire = firebase;
  export default fire;