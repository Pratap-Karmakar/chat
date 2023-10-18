// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADmod7U6KX7J0W92ZWCcPosZKwTKWfXag",
  authDomain: "sharkchat-one.firebaseapp.com",
  projectId: "sharkchat-one",
  storageBucket: "sharkchat-one.appspot.com",
  messagingSenderId: "286092849105",
  appId: "1:286092849105:web:ef17fd3244dbac472e7af0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)