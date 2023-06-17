import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

//you can either add your firebase config directly like in the tutorial or can also add it as an
//json string like here https://create-react-app.dev/docs/adding-custom-environment-variables/

const config = {
  apiKey: "AIzaSyDcmYOE14GFGx45gRxj1ROB71JlPJ-ZaSM",
  authDomain: "react-chess-27971.firebaseapp.com",
  projectId: "react-chess-27971",
  storageBucket: "react-chess-27971.appspot.com",
  messagingSenderId: "73289217526",
  appId: "1:73289217526:web:9e93c9979bca8ee3f203d7",
};

const firebaseConfig = config;
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export default firebase;
