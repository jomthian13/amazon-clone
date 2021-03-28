// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAiKjI2RZAkPbv0-LxrUIzibbRFAB9v4Bc",
  authDomain: "clone-3030e.firebaseapp.com",
  projectId: "clone-3030e",
  storageBucket: "clone-3030e.appspot.com",
  messagingSenderId: "897391976515",
  appId: "1:897391976515:web:4aa20689c3475d0538b4f6",
  measurementId: "G-VVH8FM0F75",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
