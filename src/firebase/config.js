// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeoi-Tl7avu-Vu_aZlyj0TG6j4p_enEqI",
  authDomain: "keep-itt-production.firebaseapp.com",
  projectId: "keep-itt-production",
  storageBucket: "keep-itt-production.appspot.com",
  messagingSenderId: "415132472437",
  appId: "1:415132472437:web:138ae32272b7e76004143c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;