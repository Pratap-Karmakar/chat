// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuTcRvLpl_FHBliRUL74CrUF8x35zYbOg",
  authDomain: "sharkchat1.firebaseapp.com",
  projectId: "sharkchat1",
  storageBucket: "sharkchat1.appspot.com",
  messagingSenderId: "71241960756",
  appId: "1:71241960756:web:7f6987dc2155e6da6fa961"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)