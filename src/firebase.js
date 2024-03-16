import firebase from "firebase/compat/app";
import "firebase/compat/auth";

import { getFirestore } from "firebase/firestore/lite";
import "firebase/compat/storage";


/*const firebaseConfig = {
  apiKey: "AIzaSyAJbk7iMvGul3nbWZVEtnDCfjUyVEGZCYs",
  authDomain: "e-commerce-e76f2.firebaseapp.com",
  databaseURL: "https://e-commerce-e76f2-default-rtdb.firebaseio.com",
  projectId: "e-commerce-e76f2",
  storageBucket: "e-commerce-e76f2.appspot.com",
  messagingSenderId: "1074505556237",
  appId: "1:1074505556237:web:a444f7fbf93e76e2f6d044",
  measurementId: "G-4BC1ZSJL0X",
};*/

// const firebaseConfig = {
//   apiKey: "AIzaSyC8QYeSrKvmaMaO2P6Of0e0PxbCtSLTcwc",
//   authDomain: "ecommerce-32a6a.firebaseapp.com",
//   databaseURL: "https://ecommerce-32a6a-default-rtdb.firebaseio.com/",
//   projectId: "ecommerce-32a6a",
//   storageBucket: "ecommerce-32a6a.appspot.com",
//   messagingSenderId: "820403357488",
//   appId: "1:820403357488:web:779848826423dc814baaf5",
//   measurementId: "G-DR2GEMQJ5T"
// };

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
