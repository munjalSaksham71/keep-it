// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-qYLBRdU4NRgajfYHEFyf-3O3kmIboG8",
  authDomain: "keep-it-51d21.firebaseapp.com",
  projectId: "keep-it-51d21",
  storageBucket: "keep-it-51d21.appspot.com",
  messagingSenderId: "250672600720",
  appId: "1:250672600720:web:376381c5f563df3ea46a15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;