import firebase from "firebase/compat/app";
import "firebase/compat/auth";

import { getFirestore } from "firebase/firestore/lite";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBMAsWtkGYk7pF2fpELxxiXOaHGw1JVSwo",
  authDomain: "tryfire-6c1cf.firebaseapp.com",
  projectId: "tryfire-6c1cf",
  storageBucket: "tryfire-6c1cf.appspot.com",
  messagingSenderId: "681222925561",
  appId: "1:681222925561:web:250dc6384c6c17e712c628",
  measurementId: "G-Y08MSJ9QNC"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

// const firestore = firebase.firestore();
const db = getFirestore(app);
const storage = firebase.storage().ref();

export { auth, provider, db, storage };
