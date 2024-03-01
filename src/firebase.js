import firebase from "firebase/compat/app";
import "firebase/compat/auth";

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

const firebaseConfig = {
  apiKey: "AIzaSyC8QYeSrKvmaMaO2P6Of0e0PxbCtSLTcwc",
  authDomain: "ecommerce-32a6a.firebaseapp.com",
  databaseURL: "https://ecommerce-32a6a-default-rtdb.firebaseio.com/",
  projectId: "ecommerce-32a6a",
  storageBucket: "ecommerce-32a6a.appspot.com",
  messagingSenderId: "820403357488",
  appId: "1:820403357488:web:779848826423dc814baaf5",
  measurementId: "G-DR2GEMQJ5T"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
