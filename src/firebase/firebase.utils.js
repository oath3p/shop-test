import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA5rWk5B08_Y-kAbr6ksBftAFSAgI6fps8",
  authDomain: "crowd-db-oath.firebaseapp.com",
  projectId: "crowd-db-oath",
  storageBucket: "crowd-db-oath.appspot.com",
  messagingSenderId: "1096659661225",
  appId: "1:1096659661225:web:f7d3876617819b33c694b8",
  measurementId: "G-HG6DZJD8EQ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
