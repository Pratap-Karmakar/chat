// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOmcLfmZvKbvCMI_XbAZZtq2CRMzORZY0",
  authDomain: "sharkchat-two.firebaseapp.com",
  projectId: "sharkchat-two",
  storageBucket: "sharkchat-two.appspot.com",
  messagingSenderId: "265483902062",
  appId: "1:265483902062:web:754cc012eb9211bff45a7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)