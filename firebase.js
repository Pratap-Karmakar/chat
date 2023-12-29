// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCW3WDF4q2UI9bm8f4MPm-d_VHvt08TPcU",
  authDomain: "sharkchat-three.firebaseapp.com",
  projectId: "sharkchat-three",
  storageBucket: "sharkchat-three.appspot.com",
  messagingSenderId: "435142080239",
  appId: "1:435142080239:web:d5d014f5537c666b920d1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)