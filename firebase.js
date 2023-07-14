// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCV-QuQtqN88Z7THMCJEKWxFqA3qSeK31A",
  authDomain: "sharkchat-cebfb.firebaseapp.com",
  projectId: "sharkchat-cebfb",
  storageBucket: "sharkchat-cebfb.appspot.com",
  messagingSenderId: "82476021807",
  appId: "1:82476021807:web:82c404a6416dff136feeda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)