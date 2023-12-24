// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNPe1EpBxSKusBgccv4NVzSKAX2RwjxsE",
  authDomain: "shineon-3d2ba.firebaseapp.com",
  projectId: "shineon-3d2ba",
  storageBucket: "shineon-3d2ba.appspot.com",
  messagingSenderId: "1089017573948",
  appId: "1:1089017573948:web:463c5f9b2e33a576df8939"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);