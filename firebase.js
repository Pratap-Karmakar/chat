// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCc3TnYrmVRvp0o41ZiXMrkZ4wrdeAeNng",
  authDomain: "sharkchat2.firebaseapp.com",
  projectId: "sharkchat2",
  storageBucket: "sharkchat2.appspot.com",
  messagingSenderId: "147677694182",
  appId: "1:147677694182:web:c70779aa7105ea1fd09327"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)