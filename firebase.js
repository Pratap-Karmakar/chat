// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhosX4I1rQ4pHGr7tVwybiXoVfq42mv18",
  authDomain: "sharkchat2-993b8.firebaseapp.com",
  projectId: "sharkchat2-993b8",
  storageBucket: "sharkchat2-993b8.appspot.com",
  messagingSenderId: "884279353373",
  appId: "1:884279353373:web:2db17071a30391473da6f4"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)